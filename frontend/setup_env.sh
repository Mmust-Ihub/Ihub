#! /bin/bash
set -e
filename=".env.local"
touch $filename || true
truncate -s 0 "$filename"
echo "NODE_ENV=$NODE_ENV" >> "$filename"
echo "VITE_BACKEND_URL=$VITE_BACKEND_URL" >> "$filename"