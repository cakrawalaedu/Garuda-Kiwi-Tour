# South Island May 2027 / NZMAY

Landing page: `south-island-may-2027.html`. Campaign keyword: `NZMAY`. Semua tombol WhatsApp pada halaman mengarah ke nomor GKT yang sama dengan pesan berisi nama perjalanan, tanggal, dan kode `NZMAY`; tidak ada automation ManyChat atau pesan yang dikirim oleh setup ini.

Halaman memakai design system homepage dari `assets/gkt-2027.css`, font lokal, dan stylesheet tambahan `assets/south-island-may-2027.css`. `assets/gkt-2027.js` dipakai bersama; form kontak bersifat opsional agar menu landing page tetap berjalan tanpa form. FAQ memakai `details`/`summary` native dan berfungsi tanpa JavaScript.

## Konten

Urutan: Hero → Why this journey → Itinerary Day 1–8 → Travel & Stay → Milford Sound included → Pricing → Reservation & payment scheme → What’s included / not included → FAQ → Download Full Itinerary PDF → Reservation / WhatsApp CTA.

Tanggal 17–24 May 2027, 8D6N, maximum 10 travellers, solo travellers welcome. Normal Rp31.000.000/pax; Early Access Privilege Rp30.500.000/pax untuk empat travellers pertama yang menyelesaikan Reservation Payment dan terverifikasi oleh GKT; Reservation Payment Rp3.000.000/pax; payment scheme up to 5x sesuai waktu reservasi dan Booking Confirmation. Seat baru confirmed setelah pembayaran diverifikasi; form/chat/minat belum mengonfirmasi seat. Provisional seat hold opsional maksimal 24 jam.

Itinerary mengikuti arahan pengguna: Jakarta/transit/Christchurch; orientasi ringan dan istirahat di Christchurch; Fairlie/Tekapo dengan Mt John bila waktu dan kondisi perjalanan memungkinkan; Pukaki/Aoraki/Hooker Valley/Wānaka/Queenstown; Arrowtown/Glenorchy; Milford Sound Cruise; Queenstown Free & Flexible Day; pulang dari Queenstown. Tidak menjanjikan seluruh Hooker Valley Track, full autumn foliage, salju, atau cuaca tertentu.

Inclusion dan exclusion mengikuti konfirmasi pengguna: Qantas beserta allowance pada fare/tiket final tanpa angka kilogram, Sprinter, hotel mayoritas setara bintang 4 + satu malam private stay Tekapo, cruise, pengalaman Aoraki/Hooker Valley bersyarat, Tour Leader Indonesia, dokumentasi, rekomendasi makanan dan local tips. No hidden fee dibatasi pada komponen yang termasuk paket; tidak ada compulsory tipping.

Makanan/minuman pribadi, visa NZ dan assistance, visa transit Australia bila dibutuhkan routing/tiket/aturan imigrasi, travel insurance, bagasi ekstra, aktivitas pilihan Day 7, pengeluaran pribadi dan perubahan pribadi di luar itinerary grup tidak termasuk. Insurance sangat disarankan. Meals tidak termasuk kecuali dinyatakan secara spesifik dalam final itinerary; Tour Leader memberi rekomendasi sesuai lokasi, preferensi, dan budget. Aktivitas opsional Day 7 (Skyline Gondola/Luge, jet boat, aktivitas berbayar lainnya) dipisahkan dari personal expenses seperti shopping dan café. Allowance bagasi mengikuti tiket dan fare final tanpa angka kilogram; kelebihan/penambahan bagasi menjadi biaya peserta.

## PDF dan T&C

Belum ada PDF khusus perjalanan Mei 2027. Ketiga PDF di repositori adalah dokumen 2026 dan tidak ditautkan sebagai dokumen 2027. Tombol `View Full Itinerary PDF` dinonaktifkan, disertai keterangan bahwa PDF belum tersedia, serta tautan menuju itinerary di halaman ini. Tidak dibuat file PDF fiktif atau URL unduhan yang menghasilkan 404.

Saat dokumen final tersedia, masukkan file yang sudah disetujui, ganti tombol nonaktif dengan tautan ke file tersebut, dan perbarui status PDF. `terms-and-conditions-may-2027.html` kini memuat T&C khusus keberangkatan 17–24 May 2027, memakai font/style dasar yang sama dengan tambahan scoped stylesheet `assets/terms-2027.css`. Konten spesifik disalin identik dari versi T&C pada commit `fbe13a0`; ketujuh tautan T&C landing page kini menuju file spesifik tersebut dengan fragment semula. `terms-and-conditions.html` menjadi halaman umum yang mengacu ke Proposal/Booking Confirmation per perjalanan. Homepage hanya mengubah href T&C Featured Journey; desain landing page tetap. Audit pemisahan ada di `docs/terms-architecture.md`.

Milestone pembayaran: Reservation Rp3.000.000/pax, Payment 2 pada 30 November 2026, Payment 3 pada 15 January 2027, Payment 4 pada 28 February 2027, dan Final Payment pada 2 April 2027. Tanggal berlaku untuk Early Access dan harga normal, dengan total sesuai harga paket. Reservasi kurang dari 14 hari sebelum milestone berikutnya dapat melewati milestone itu dan membagi sisa pembayaran ke milestone berikutnya. Up to 5x bukan jaminan lima pembayaran untuk setiap peserta; Booking Confirmation menjadi acuan final individual.

T&C mencakup data paspor, visa NZ terpisah dan visa transit Australia bersyarat, refund berdasarkan kebijakan dan nilai aktual vendor, perubahan itinerary, force majeure, tanggung jawab peserta, serta dokumentasi/promosi dengan kesempatan menyampaikan keberatan sebelum keberangkatan. Tidak ada penalti/persentase refund baru, jaminan visa/refund/cuaca, angka kilogram, atau meal inclusion yang dibuat.

Nominal Payment 2–Final Payment belum diberikan dalam brief dan ditampilkan sebagai “Sesuai Booking Confirmation”. Ketentuan spesifik fare/vendor mengikuti tiket dan booking final; tidak dibuat ketentuan vendor fiktif. Landing page hanya menampilkan ringkasan dan tautan ke bagian T&C yang sesuai.

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

Validasi T&C dan landing page pada 5 October 2026: server statis Python melayani seluruh 18 halaman HTML dan 69 resource lokal unik, semuanya HTTP 200 dan byte-identical dengan checkout. Audit 357 referensi lokal mencakup 4 CSS (termasuk legacy `style.css`); seluruh 166 fragment link valid. Tidak ada 404 atau kesalahan kapitalisasi/path. Homepage `index.html` dan backup tidak berubah dibanding `a3341ae`; SHA-256 backup tetap `95a1e8c5cacc4d4e398ef640c85f882f07df567325a95cc69dc72daf15d61b1e`. Tidak ada halaman lama yang dihapus.

Chromium pada 320, 390, 768, 900, dan 1440 px: Terms dan landing page tanpa overflow, error JavaScript/console, failed request, atau respons gagal. Semua gambar dan font lokal yang dipakai termuat. Menu mobile, Escape/fokus, 12 FAQ dengan Enter/Space, serta navigasi/FAQ tanpa JavaScript berfungsi. Tautan pembayaran landing page membuka bagian pembayaran Terms, dan tautan kembali membuka bagian reservasi perjalanan yang benar.

Tanggal milestone dan nominal Reservation Payment pada tabel cocok dengan brief; nominal empat milestone berikutnya hanya mengacu ke Booking Confirmation. Review konten memeriksa konfirmasi seat, Early Access, up to 5x, aturan kurang dari 14 hari, visa, refund vendor, musim/track, tanggung jawab, dan dokumentasi. Tidak ada DP 50% atau persentase penalti pada landing page May 2027 maupun Terms. Homepage dan struktur/desain landing page tidak dirancang ulang.

PDF tetap nonaktif dan tidak menautkan dokumen 2026. Semua enquiry WhatsApp pada landing page tetap membawa NZMAY. Tidak ada pesan yang dikirim sungguhan. Pemeriksaan sintaks JavaScript dan `git diff --check` lolos. Validasi form homepage sebelumnya tetap tercatat pada `docs/homepage-2027.md`; form tidak berubah dalam task T&C ini.
