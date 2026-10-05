# South Island May 2027 / NZMAY

Landing page: `south-island-may-2027.html`. Campaign keyword: `NZMAY`. Semua tombol WhatsApp pada halaman mengarah ke nomor GKT yang sama dengan pesan berisi nama perjalanan, tanggal, dan kode `NZMAY`; tidak ada automation ManyChat atau pesan yang dikirim oleh setup ini.

Halaman memakai design system homepage dari `assets/gkt-2027.css`, font lokal, dan stylesheet tambahan `assets/south-island-may-2027.css`. `assets/gkt-2027.js` dipakai bersama; form kontak bersifat opsional agar menu landing page tetap berjalan tanpa form. FAQ memakai `details`/`summary` native dan berfungsi tanpa JavaScript.

## Konten

Urutan: Hero → Why this journey → Itinerary Day 1–8 → Travel & Stay → Milford Sound included → Pricing → Reservation & payment scheme → What’s included / not included → FAQ → Download Full Itinerary PDF → Reservation / WhatsApp CTA.

Tanggal 17–24 May 2027, 8D6N, maximum 10 travellers, solo travellers welcome. Normal Rp31.000.000/pax; Early Access Privilege Rp30.500.000/pax untuk empat travellers pertama; Reservation Payment Rp3.000.000/pax; payment scheme up to 5x. Tidak ada jadwal pembayaran, batas pelunasan, atau ketentuan refund baru yang dibuat.

Itinerary mengikuti arahan pengguna: Jakarta/transit/Christchurch; orientasi ringan dan istirahat di Christchurch; Fairlie/Tekapo dengan Mt John bila waktu memungkinkan; Pukaki/Aoraki/Hooker Valley/Wānaka/Queenstown; Arrowtown/Glenorchy; Milford Sound Cruise; Queenstown Free & Flexible Day; pulang dari Queenstown. Tidak menjanjikan seluruh Hooker Valley Track, full autumn foliage, salju, atau cuaca tertentu.

Inclusion dan exclusion mengikuti konfirmasi pengguna: Qantas beserta allowance pada fare/tiket final tanpa angka kilogram, Sprinter, hotel mayoritas setara bintang 4 + satu malam private stay Tekapo, cruise, pengalaman Aoraki/Hooker Valley bersyarat, Tour Leader Indonesia, dokumentasi, rekomendasi makanan dan local tips. No hidden fee dibatasi pada komponen yang termasuk paket; tidak ada compulsory tipping.

Makanan/minuman pribadi, visa NZ dan assistance, visa transit Australia bila dibutuhkan routing/tiket/aturan imigrasi, travel insurance, bagasi ekstra, aktivitas pilihan Day 7, pengeluaran pribadi dan perubahan pribadi di luar itinerary grup tidak termasuk. Insurance sangat disarankan. Ketentuan makanan tertentu hanya berubah bila dinyatakan secara eksplisit dalam itinerary.

## PDF dan T&C

Belum ada PDF khusus perjalanan Mei 2027. Ketiga PDF di repositori adalah dokumen 2026 dan tidak ditautkan sebagai dokumen 2027. Tombol `View Full Itinerary PDF` dinonaktifkan, disertai keterangan bahwa PDF belum tersedia, serta tautan menuju itinerary di halaman ini. Tidak dibuat file PDF fiktif atau URL unduhan yang menghasilkan 404.

Saat dokumen final tersedia, masukkan file yang sudah disetujui, ganti tombol nonaktif dengan tautan ke file tersebut, dan perbarui status PDF. T&C 2027 merupakan task terpisah; file lama `terms-and-conditions.html` tidak diubah dan tidak diklaim sebagai aturan pembayaran baru.

## Foto dan penggantian nanti

| Lokasi        | Aset sementara yang digunakan                        | Sumber                                   |
| ------------- | ---------------------------------------------------- | ---------------------------------------- |
| Hero          | `assets/images/hero-landscape.webp`                  | `hero2-mountain.jpg`, Aoraki saat senja  |
| Gambaran rute | `assets/images/journey-private.webp`                 | `signature-hero.jpg`, Lake Pukaki/Aoraki |
| Milford Sound | `assets/images/featured-south-island.webp`           | `northsouth-hero2.jpg`, Milford Sound    |
| Logo          | `assets/images/brand-logo.webp` + favicon `Logo.png` | Logo asli                                |

Tidak ada foto baru yang dibuat. Foto destinasi bukan bukti kondisi Mei 2027 atau foto akomodasi/transportasi yang sebenarnya. Setelah pengguna memilih foto yang diunggah, ganti `src` dan dimensi pada gambar hero serta sesuaikan `alt` dan caption lokasi. `IMG_4494` saat ini hanya contoh nama dan belum ditemukan sebagai aset yang tersedia. Foto kendaraan Sprinter atau private stay Tekapo yang sudah dikonfirmasi bisa ditambahkan nanti.

Homepage kini mengarahkan CTA Featured Journey, kartu Open Trip, dan tautan footer Mei 2027 ke landing page baru. `index.pre-2027.html` dan seluruh halaman lama dipertahankan.

## Validasi

Server statis Python dijalankan dari root proyek. Semua 18 halaman HTML dan 69 sumber daya lokal unik berhasil dilayani tanpa 404; isi respons cocok dengan checkout dan semua fragment lokal tersedia. Backup dan `terms-and-conditions.html` identik dengan baseline `4f35955`; tidak ada file lama yang dihapus.

Chromium pada lebar 320, 390, 768, 900, dan 1440 px lolos tanpa overflow, error JavaScript/console, failed request, atau respons lokal gagal. Empat gambar dan tiga font lokal termuat. Menu mobile, Escape/fokus, sepuluh FAQ dengan Enter/Space, serta navigasi/FAQ tanpa JavaScript berfungsi. PDF nonaktif dan tidak mengarah ke file 2026. Ketiga tautan WhatsApp membawa `NZMAY`; CTA Featured homepage membuka landing page dalam tab yang sama.

Pemeriksaan inclusion/exclusion, Day 1–8, harga, kondisi musim, dan batasan Hooker Valley lolos. Regresi form homepage diuji dengan respons simulasi sukses dan HTTP error; input tetap tersedia saat gagal dan tombol aktif kembali. Tidak ada pesan yang dikirim sungguhan. Pemeriksaan sintaks JavaScript dan `git diff --check` lolos.
