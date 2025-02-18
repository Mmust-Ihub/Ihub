#! /bin/bash

: '---- CONSTANTS ----'
COMPOSE_FILE="docker-compose.dev.yaml"
MONITORING_FILE="monitoring.yaml"
CONTAINER_PREFIX="ihub-"
BRANCH="main"
IHUB_PATH=~/NEW-IHUB/Ihub

set -e

# change path to the ihub working dir
function change_path(){
    cd $IHUB_PATH || exit
    echo "This is the current working dir: $IHUB_PATH"
}

# pull the latest changes from remote url
function pull_latest_changes() {
    echo "Pulling latest changes from the ${BRANCH} branch..."
    git pull origin ${BRANCH}
}

function check_docker_is_running(){
    if ! command docker >/dev/null 2>&1 || ! command -v docker compose &>/dev/null; then
        echo -e "Ensure docker and docker compose are installed on your system and running.\nExiting ...."
        exit 1

    else
        echo "Confirmed! docker is installed on your system ..."
    fi
}

# stop the existing containers
function stop_running_containers() {
    echo "Stopping the running containers ..."

    # docker ps -a --format '{{.Names}}' | grep "^${CONTAINER_PREFIX}" | xargs -r docker stop
    # # remove all the stopped containers
    # docker ps -a --format '{{.Names}}' | grep "^${CONTAINER_PREFIX}" | xargs -r docker rm
    docker compose -f $COMPOSE_FILE down
    docker image prune -f
    docker volume prune -f
    echo "removed the old containers, daggling images and orphan volumes ...."
}

function deploy() {
    if [ ! -f "$COMPOSE_FILE" ]; then
        echo -e "Docker Compose file '$COMPOSE_FILE' not found.\n Exiting..."
        exit 1

    else
        # finally deploy the application
        echo "Finally!. Your application is ready for deployment ..."
        docker compose -f ${COMPOSE_FILE} up -d --build
    fi

}

function reload_prometheus() {
    local url="https://41.89.195.106:9090"
    echo "🩺 Reloading prometheus configurations."

    for _ in {1..20}; do
      if curl --silent --fail "$url"; then
        echo "✅ Prometheus configuration reloaded successfully!"
        return 0
      fi
      echo "👋️ Still waiting for connection."
      sleep 1
    done
}

function main() {
    change_path
    pull_latest_changes
    check_docker_is_running
    # start the monitoring services
    docker compose -f "$MONITORING_FILE" up -d --build
    reload_prometheus
    docker image prune -f; docker volume prune -f  # Remove all dangling images and volumes
    stop_running_containers
    deploy
}

main