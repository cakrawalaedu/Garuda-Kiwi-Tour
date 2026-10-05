# Homepage Garuda Kiwi Tour 2027

Homepage baru berada di `index.html`, dengan stylesheet `assets/gkt-2027.css` dan perilaku menu/form di `assets/gkt-2027.js`. Situs tetap statis tanpa build atau dependensi JavaScript eksternal. Font Cormorant Garamond dan Inter disajikan dari `assets/fonts/`, dengan fallback serif/sans-serif lokal. Tiga file WOFF2 berasal dari layanan Google Fonts resmi, diunduh melalui TLS yang terverifikasi; lisensi SIL Open Font License disertakan. Homepage tidak bergantung pada CDN font saat runtime. Ikon panah menggunakan SVG agar tidak bergantung pada glyph font sistem.

## Arah dan konten

Visual menggunakan navy, warm ivory, muted gold/olive, heading serif editorial, garis tipis, ruang kosong, dan foto perjalanan. Tour menjadi fokus; Visa Assistance/eSIM berada dalam blok pendukung kecil.

Urutan: Hero → Featured Journey → Why Garuda Kiwi Tour → Real Trip Moments → Choose Your Journey → Testimonials → CTA → Contact/Footer.

Featured Journey adalah South Island Open Trip 17–24 May 2027, 8D6N, maximum 10 travellers. Harga normal Rp31.000.000/pax; Early Access Privilege Rp30.500.000/pax untuk empat travellers pertama; Reservation Payment Rp3.000.000/pax; pembayaran hingga 5x. Fasilitas memuat Qantas full-service, Mercedes-Benz Sprinter, Milford Sound Cruise, mostly 4-star accommodation + satu private stay di Lake Tekapo. Copy late autumn tidak menjanjikan foliage atau kondisi cuaca tertentu.

Foto Real Trip Moments dan dua testimoni berasal dari homepage lama. Foto perjalanan sebelumnya diberi konteks yang jelas, bukan klaim kondisi untuk Mei 2027. Tautan Featured Journey meminta informasi keberangkatan 2027 lewat WhatsApp, bukan menuju halaman open trip 2026.

## Aset gambar yang digunakan

Semua salinan WebP berada di `assets/images/`. File sumber tetap dipertahankan. Total salinan sekitar 1,24 MB; hanya ukuran, kompresi, dan orientasi EXIF yang disesuaikan.

| Aset                         | Sumber                 | Penggunaan                                                    |
| ---------------------------- | ---------------------- | ------------------------------------------------------------- |
| `hero-landscape.webp`        | `hero2-mountain.jpg`   | Hero: Aoraki / Mount Cook saat senja                          |
| `featured-south-island.webp` | `northsouth-hero2.jpg` | Featured Journey dan Open Trip: Milford Sound                 |
| `moment-1.webp`              | `real-trip-1.jpg`      | Real Trip Moments: jeda bersama di The Little Red Fox         |
| `moment-2.webp`              | `real-trip-2.jpg`      | Real Trip Moments: rombongan di lembah pegunungan, Maret 2026 |
| `moment-3.webp`              | `real-trip-3.jpg`      | Real Trip Moments: foto di Lake Wānaka                        |
| `journey-private.webp`       | `signature-hero.jpg`   | Private Journey: jalan di Lake Pukaki menuju Aoraki           |
| `journey-family.webp`        | `group-2.jpg`          | Family Journey: rombongan di Lake Tekapo                      |
| `brand-logo.webp`            | `Logo.png`             | Logo navigasi; `Logo.png` asli tetap menjadi favicon          |

Tidak ada gambar wajib yang belum tersedia. Foto kendaraan Mercedes-Benz Sprinter yang benar-benar digunakan, akomodasi yang sudah dikonfirmasi, private stay Lake Tekapo, dan pemandangan akhir Mei dapat ditambahkan kemudian bila tersedia. Foto umum saat ini tidak dipakai sebagai bukti fasilitas menginap atau kendaraan.

## Kompatibilitas dan kontak

Anchor `home`, `opentrip`, `tentang`, `galeri`, `paket`, `services`, `testimoni`, dan `kontak` dipertahankan agar tautan lama tetap bekerja. Halaman tour, artikel, dan Terms & Conditions tidak dihapus atau dirancang ulang.

WhatsApp tetap `https://wa.me/6282154465074`, Instagram tetap `https://instagram.com/garudakiwi.tour`, email tetap `garudakiwi.tour@gmail.com`. Form tetap POST ke `https://formspree.io/f/mjkyejdg`, dengan nama field `nama`, `email`, dan `pesan`. JavaScript menampilkan status pengiriman dan mempertahankan input ketika gagal. Jika JavaScript dinonaktifkan, form tetap memakai native POST dan navigasi tetap tersedia.

`index.pre-2027.html` tidak diubah; SHA-256: `95a1e8c5cacc4d4e398ef640c85f882f07df567325a95cc69dc72daf15d61b1e`.

Halaman Terms & Conditions lama tetap dipertahankan dan masih menyebut DP 50%. Homepage menampilkan Reservation Payment Rp3.000.000 sesuai brief; detail jadwal pembayaran keberangkatan 2027 perlu dikonfirmasi dengan tim dan ketentuan lama perlu diselaraskan sebelum menerima reservasi berdasarkan ketentuan 2027.

## Menjalankan

Dari root proyek: `python3 -m http.server 8000 --bind 127.0.0.1`. Validasi HTTP akhir memeriksa 67 sumber daya lokal unik, semuanya cocok dengan isi checkout tanpa 404; seluruh fragment lokal tersedia dan backup identik dengan baseline. Pemeriksaan Chromium pada lebar 320, 390, 768, 900, dan 1440 px lolos tanpa overflow atau error JavaScript/request. Tiga font lokal terdaftar dan termuat; seluruh sembilan instance gambar termuat. Menu mobile, Escape, penutupan setelah navigasi, navigasi tanpa JavaScript, dan reduced motion berfungsi. Form memblokir field wajib/email tidak valid; simulasi sukses mengosongkan input, sedangkan simulasi HTTP/network failure mempertahankan input dan mengaktifkan tombol kembali. Tidak ada pesan sungguhan yang dikirim.
