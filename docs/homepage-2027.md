# Homepage Garuda Kiwi Tour 2027

Homepage baru berada di `index.html`, dengan stylesheet `assets/gkt-2027.css` dan perilaku menu/form di `assets/gkt-2027.js`. Situs tetap statis tanpa build atau dependensi JavaScript eksternal. Font Cormorant Garamond dan Inter disajikan dari `assets/fonts/`, dengan fallback serif/sans-serif lokal. Tiga file WOFF2 berasal dari layanan Google Fonts resmi, diunduh melalui TLS yang terverifikasi; lisensi SIL Open Font License disertakan. Homepage tidak bergantung pada CDN font saat runtime. Ikon panah menggunakan SVG agar tidak bergantung pada glyph font sistem.

## Arah dan konten

Visual menggunakan navy, warm ivory, muted gold/olive, heading serif editorial, garis tipis, ruang kosong, dan foto perjalanan. Tour menjadi fokus; Visa Assistance/eSIM berada dalam blok pendukung kecil.

Urutan: Hero → Featured Journey → Why Garuda Kiwi Tour → Real Trip Moments → Choose Your Journey → Testimonials → CTA → Contact/Footer.

Featured Journey adalah South Island Open Trip 17–24 May 2027, 8D6N, maximum 10 travellers. Harga normal Rp31.000.000/pax; Early Access Privilege Rp30.500.000/pax untuk empat travellers pertama; Reservation Payment Rp3.000.000/pax; pembayaran hingga 5x. Fasilitas memuat Qantas full-service, Mercedes-Benz Sprinter, Milford Sound Cruise, mostly 4-star accommodation + satu private stay di Lake Tekapo. Copy late autumn tidak menjanjikan foliage atau kondisi cuaca tertentu.

Foto Real Trip Moments dan dua testimoni berasal dari homepage lama. Foto perjalanan sebelumnya diberi konteks yang jelas, bukan klaim kondisi untuk Mei 2027. Tautan Featured Journey, kartu Open Trip, dan tautan footer Mei 2027 kini menuju `south-island-may-2027.html`, landing page campaign NZMAY, yang menyediakan itinerary lengkap dan enquiry WhatsApp.

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

Anchor `home`, `opentrip`, `tentang`, `galeri`, `paket`, `services`, `testimoni`, dan `kontak` dipertahankan agar tautan lama tetap bekerja. Halaman tour dan artikel tidak dihapus atau dirancang ulang. T&C dipisahkan: `terms-and-conditions.html` memuat ketentuan umum GKT, sedangkan `terms-and-conditions-may-2027.html` memuat ketentuan South Island Open Trip 17–24 May 2027.

WhatsApp tetap `https://wa.me/6282154465074`, Instagram tetap `https://instagram.com/garudakiwi.tour`, email tetap `garudakiwi.tour@gmail.com`. Form tetap POST ke `https://formspree.io/f/mjkyejdg`, dengan nama field `nama`, `email`, dan `pesan`. JavaScript menampilkan status pengiriman dan mempertahankan input ketika gagal. Jika JavaScript dinonaktifkan, form tetap memakai native POST dan navigasi tetap tersedia.

`index.pre-2027.html` tidak diubah; SHA-256: `95a1e8c5cacc4d4e398ef640c85f882f07df567325a95cc69dc72daf15d61b1e`.

Tautan T&C pada Featured Journey May 2027 menuju `terms-and-conditions-may-2027.html`; tautan pada form kontak umum dan footer tetap menuju `terms-and-conditions.html`. T&C umum tidak menetapkan harga, deposit, tanggal pembayaran, atau aturan May 2027 bagi produk lain; Proposal/Booking Confirmation perjalanan terkait menjadi acuan. Pemisahan ini hanya mengganti satu href pada homepage; file backup tidak berubah. Rincian audit ada di `docs/terms-architecture.md`.

## SEO dan social sharing

Homepage memakai canonical `https://garudakiwitour.com/`, title/description yang deskriptif, Open Graph dan Twitter `summary_large_image`. Social preview memakai foto JPEG existing `hero2-mountain.jpg` melalui URL absolut `https://garudakiwitour.com/hero2-mountain.jpg`; tidak ada foto baru dibuat. File 4800×3200, sekitar 3,54 MB, tetap utuh.

JSON-LD minimal `TravelAgency` memakai nama, website, Instagram, email, telepon, dan alamat Pontianak yang diberikan pengguna. Tidak ada rating, review, geo, postal code, atau jam operasional yang dibuat. Perubahan SEO hanya di HEAD; body homepage dan form kontak tetap.

Final conversion polish menambahkan link `privacy-policy.html` pada footer. Form kontak dan desain tetap; halaman privacy memakai style dokumen yang tersedia dan hanya menjelaskan penggunaan data, Formspree, tidak dijual kepada pengiklan, serta kontak email untuk permintaan terkait data.

`robots.txt` mempertahankan crawling halaman/aset publik dan mengecualikan backup, `/docs/`, serta legacy HTML `style.css`. `sitemap.xml` memuat 16 URL publik aktif; empat URL utama diikuti halaman private/family/custom, blog, artikel, dan Privacy Policy. Backup, docs, aset, dan paket bertanggal 2026 tidak dimasukkan. Halaman lama tidak dihapus atau diberi noindex massal. URL absolut mengacu pada domain deploy; validasi lokal memeriksa file checkout, bukan mengklaim production sudah diperbarui.

## Menjalankan

Dari root proyek: `python3 -m http.server 8000 --bind 127.0.0.1`. Validasi HTTP akhir memeriksa 67 sumber daya lokal unik, semuanya cocok dengan isi checkout tanpa 404; seluruh fragment lokal tersedia dan backup identik dengan baseline. Pemeriksaan Chromium pada lebar 320, 390, 768, 900, dan 1440 px lolos tanpa overflow atau error JavaScript/request. Tiga font lokal terdaftar dan termuat; seluruh sembilan instance gambar termuat. Menu mobile, Escape, penutupan setelah navigasi, navigasi tanpa JavaScript, dan reduced motion berfungsi. Form memblokir field wajib/email tidak valid; simulasi sukses mengosongkan input, sedangkan simulasi HTTP/network failure mempertahankan input dan mengaktifkan tombol kembali. Tidak ada pesan sungguhan yang dikirim.
