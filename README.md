# Cài ubuntu 
```bash
wsl --install
```

restart lại máy


# Docker Setup on Ubuntu (WSL)

## Mục tiêu

Cài đặt và sử dụng Docker trực tiếp trong Ubuntu (WSL) trên Windows 11.

---

## 1. Cập nhật hệ thống

```bash
sudo apt update
sudo apt upgrade -y
```

---

## 2. Cài các package cần thiết

```bash
sudo apt install -y ca-certificates curl gnupg lsb-release
```

---

## 3. Thêm Docker GPG key

```bash
sudo mkdir -p /etc/apt/keyrings

curl -fsSL https://download.docker.com/linux/ubuntu/gpg \
| sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

---

## 4. Thêm Docker repository

```bash
echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
https://download.docker.com/linux/ubuntu \
$(lsb_release -cs) stable" \
| sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

---

## 5. Cài Docker

```bash
sudo apt update

sudo apt install -y docker-ce docker-ce-cli containerd.io \
docker-buildx-plugin docker-compose-plugin
```

---

## 6. Chạy Docker daemon (WSL)

WSL không có systemd nên cần chạy thủ công:

```bash
sudo dockerd
```

Mở terminal khác để dùng Docker.

---

## 7. Kiểm tra Docker

```bash
docker --version
docker compose version
docker ps
```

---

## 8. Fix lỗi permission denied

Nếu gặp lỗi:

```
permission denied while trying to connect to the docker API
```

Chạy:

```bash
sudo usermod -aG docker $USER
newgrp docker
```

---

## 9. Test Docker

```bash
docker run hello-world
```

---

## 10. Fix lỗi dockerd đã chạy

Nếu gặp lỗi:

```
failed to start daemon... docker.pid
```

Kiểm tra:

```bash
ps aux | grep dockerd
```

Nếu process tồn tại thì không cần chạy lại `dockerd`.

Nếu chỉ là file PID lỗi:

```bash
sudo rm -f /var/run/docker.pid
sudo dockerd
```

---

## 11. Chạy project với Docker Compose

```bash
docker compose up --build
```