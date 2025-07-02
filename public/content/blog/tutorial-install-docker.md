---
title: 'Tutorial Install Docker di Linux, Mac, dan Windows'
date: '2025-06-30'
coverImage: '/thumbnail/tutorial-install-docker.png'
excerpt: 'Panduan lengkap cara install Docker di Linux, Mac, dan Windows, beserta tips troubleshooting.'
---

Docker adalah platform containerization yang memudahkan proses deploy aplikasi di berbagai environment. Berikut panduan lengkap instalasi Docker di berbagai sistem operasi.

## 1. Install Docker di Linux (Ubuntu)

```bash
sudo apt update
sudo apt install \ \
    ca-certificates \ \
    curl \ \
    gnupg \ \
    lsb-release

# Tambahkan GPG key Docker
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# Tambahkan repository Docker
echo \ \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \ \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Cek versi Docker
sudo docker --version
```

## 2. Install Docker di Mac

- Download Docker Desktop dari [docker.com](https://www.docker.com/products/docker-desktop/)
- Install seperti aplikasi biasa (drag ke Applications)
- Jalankan Docker Desktop, pastikan icon Docker muncul di menu bar
- Cek versi di terminal:

```bash
docker --version
```

## 3. Install Docker di Windows

- Download Docker Desktop dari [docker.com](https://www.docker.com/products/docker-desktop/)
- Install seperti aplikasi Windows biasa
- Pastikan "WSL 2" sudah aktif (untuk Windows 10/11)
- Jalankan Docker Desktop, cek icon Docker di system tray
- Cek versi di Command Prompt atau PowerShell:

```powershell
docker --version
```

## Troubleshooting

- Jika Docker tidak bisa jalan di Linux, cek status service: `sudo systemctl status docker`
- Di Mac/Windows, pastikan virtualization aktif di BIOS/UEFI
- Cek dokumentasi resmi: [docs.docker.com](https://docs.docker.com/get-docker/)

---

Selamat mencoba! Jika ada error, cek log error dan pastikan mengikuti langkah sesuai OS masing-masing.
