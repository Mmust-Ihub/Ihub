#!/bin/bash

set -euo pipefail

# 1. Purge apache2 and clean its config
echo "[+] Removing Apache2..."
sudo systemctl stop apache2 || true
sudo apt purge -y apache2 apache2-utils apache2-bin apache2.2-common || true
sudo apt autoremove -y
sudo apt autoclean -y
sudo rm -rf /etc/apache2

# 2. Ensure SSH is installed and running
echo "[+] Ensuring SSH is installed and active..."
sudo apt update
sudo apt install -y openssh-server
sudo systemctl enable ssh
sudo systemctl restart ssh

# 3. Allow SSH on port 22 via ufw
echo "[+] Allowing SSH on port 22 via UFW..."
sudo ufw allow ssh
sudo ufw reload

# 4. Restore your public key
AUTHORIZED_KEYS="/home/ihub/.ssh/authorized_keys"
YOUR_PUBLIC_KEY="ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCk2UrAWq3Ogwl3L8DHcQjfQOuytXTLog32eCbNDru4VHTZahI01UoHWCZ+TbIi3UgL9KHqfUal9Hlmnx6foe8OQRq891gg3e0G+noiLsd267e2pMaejwNXj5IATEJCXyVpNWSZPksiSvVjDOxNRR+xACyuBUOGOakO5uQ1R62IxfmDG9JKCxoxzay9DV76DVDmC5xcpEz1jVYfA/fiiB77XGUV+l3+5G11f+6dSi3eJW5iO8DvrVpn9nQg1uyEcruYuzRPJt5IyEp2g7K4M9gnvubUij64otO0EMFLzdQIFMSUlD1oeZRGhX2dsuieL1wwSiLwju41aU3apqRxlPB34oFQnCKBEflWx+FCJezp9PUkH5GaCsTMZgpcAb75LWHsg1orCbr0u9RsspYJvn0ICK5DidM6IXfyLODvYFlS6TofKQ2g7XhpGZhta2d0UWTPZu+nMf/QIKn0CtRPsamwCJuEyvMmZZHwpzUTmnrNAimRD+3naBU3r+GZXtYSly1bbKOBG/R1seYwbYq9/ffqtuOi3avgabZIDRHsDHeYgq7fYcfkH+TwiOpXGu/GK7hwN/FcbJoe8DSNDBnqmqbRLSDJo0gsDleZ1NeIQKRWnDfkFaRcbBlSF/z1lJ8mO8d+OdEQczvdtq5hw+12QxoZT4KECtLo+wSxAjCPByKESQ== antonygichoya9@gmail.com" # <-- Replace with your actual key

echo "[+] Restoring your SSH public key..."
sudo mkdir -p "$(dirname "$AUTHORIZED_KEYS")"
echo "$YOUR_PUBLIC_KEY" | sudo tee "$AUTHORIZED_KEYS" > /dev/null
sudo chown ihub:ihub "$AUTHORIZED_KEYS"
sudo chmod 600 "$AUTHORIZED_KEYS"

# 5. Harden sshd_config
echo "[+] Hardening sshd_config..."
SSHD_CONFIG="/etc/ssh/sshd_config"

sudo sed -i 's/^#\?PasswordAuthentication .*/PasswordAuthentication no/' "$SSHD_CONFIG"
sudo sed -i 's/^#\?PermitRootLogin .*/PermitRootLogin no/' "$SSHD_CONFIG"
sudo sed -i 's/^#\?PubkeyAuthentication .*/PubkeyAuthentication yes/' "$SSHD_CONFIG"

sudo systemctl restart ssh

echo "[✓] Reclamation complete. You should now be able to SSH using your key."
