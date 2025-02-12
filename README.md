# Google Sheets API Archiver

Sistem API sederhana untuk mengelola arsip dokumen menggunakan Google Sheets sebagai database.

## Fitur
- Autentikasi menggunakan API key
- Mengambil data arsip dari Google Sheets
- Pencarian full-text di semua kolom
- Response format JSON

## Instalasi
1. Buka [Google Apps Script](https://script.google.com)
2. Buat project baru
3. Copy-paste kode dari `code.gs`
4. Ganti `YOUR_API_KEY_HERE` dengan API key pilihan Anda
5. Deploy sebagai web app
   - Execute as: Me
   - Who has access: Anyone

## Penggunaan
**Base URL:**
https://script.google.com/macros/s/.../exec

**Endpoints:**
1. Get All Data
GET /?key=YOUR_API_KEY
2. Search Data
GET /?key=YOUR_API_KEY&search=keyword

## Struktur Data
- Timestamp
- Nomor Arsip
- Jenis Arsip
- Kategori
- Tanggal Arsip
- Perihal
- Deskripsi
- Tags
- File URL
- File ID
- Uploader

## Lisensi
MIT License
