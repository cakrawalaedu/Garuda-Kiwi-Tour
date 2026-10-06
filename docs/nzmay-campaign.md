# South Island May 2027 / NZMAY

Landing page: `south-island-may-2027.html`. Campaign keyword: `NZMAY`. Semua tombol WhatsApp pada halaman mengarah ke nomor GKT yang sama dengan pesan berisi nama perjalanan, tanggal, dan kode `NZMAY`; tidak ada automation ManyChat atau pesan yang dikirim oleh setup ini.

Halaman memakai design system homepage dari `assets/gkt-2027.css`, font lokal, dan stylesheet tambahan `assets/south-island-may-2027.css`. `assets/gkt-2027.js` dipakai bersama; form kontak bersifat opsional agar menu landing page tetap berjalan tanpa form. Form reservation dan event hooks memakai tambahan `assets/south-island-may-2027.js`. FAQ memakai `details`/`summary` native dan berfungsi tanpa JavaScript.

## Konten

Urutan: Hero → Why this journey → Itinerary Day 1–8 → Travel & Stay → Milford Sound included → Pricing → Reservation & payment scheme → What’s included / not included → FAQ → Download Full Itinerary PDF → Reservation Form → Reservation / WhatsApp CTA.

Tanggal 17–24 May 2027, 8D6N, maximum 10 travellers, solo travellers welcome. Normal Rp31.000.000/pax; Early Access Privilege Rp30.500.000/pax untuk empat travellers pertama yang menyelesaikan Reservation Payment dan terverifikasi oleh GKT; Reservation Payment Rp3.000.000/pax; payment scheme up to 5x sesuai waktu reservasi dan Booking Confirmation. Seat baru confirmed setelah pembayaran diverifikasi; form/chat/minat belum mengonfirmasi seat. Provisional seat hold opsional maksimal 24 jam.

Itinerary mengikuti arahan pengguna: Jakarta/transit/Christchurch; orientasi ringan dan istirahat di Christchurch; Fairlie/Tekapo dengan Mt John bila waktu dan kondisi perjalanan memungkinkan; Pukaki/Aoraki/Hooker Valley/Wānaka/Queenstown; Arrowtown/Glenorchy; Milford Sound Cruise; Queenstown Free & Flexible Day; pulang dari Queenstown. Tidak menjanjikan seluruh Hooker Valley Track, full autumn foliage, salju, atau cuaca tertentu.

Inclusion dan exclusion mengikuti konfirmasi pengguna: Qantas beserta allowance pada fare/tiket final tanpa angka kilogram, Sprinter, hotel mayoritas setara bintang 4 + satu malam private stay Tekapo, cruise, pengalaman Aoraki/Hooker Valley bersyarat, Tour Leader Indonesia, dokumentasi, rekomendasi makanan dan local tips. No hidden fee dibatasi pada komponen yang termasuk paket; tidak ada compulsory tipping.

Makanan/minuman pribadi, visa NZ dan assistance, visa transit Australia bila dibutuhkan routing/tiket/aturan imigrasi, travel insurance, bagasi ekstra, aktivitas pilihan Day 7, pengeluaran pribadi dan perubahan pribadi di luar itinerary grup tidak termasuk. Insurance sangat disarankan. Meals tidak termasuk kecuali dinyatakan secara spesifik dalam final itinerary; Tour Leader memberi rekomendasi sesuai lokasi, preferensi, dan budget. Aktivitas opsional Day 7 (Skyline Gondola/Luge, jet boat, aktivitas berbayar lainnya) dipisahkan dari personal expenses seperti shopping dan café. Allowance bagasi mengikuti tiket dan fare final tanpa angka kilogram; kelebihan/penambahan bagasi menjadi biaya peserta.

## PDF dan T&C

Belum ada PDF khusus perjalanan Mei 2027. Ketiga PDF di repositori adalah dokumen 2026 dan tidak ditautkan sebagai dokumen 2027. Tombol `View Full Itinerary PDF` dinonaktifkan, disertai keterangan bahwa PDF belum tersedia, serta tautan menuju itinerary di halaman ini. Tidak dibuat file PDF fiktif atau URL unduhan yang menghasilkan 404.

Filename final yang disiapkan adalah `garuda-kiwi-tour-south-island-may-2027.pdf` di root. Tombol disabled menyimpan nama tersebut dalam `data-pdf-filename`; tidak ada href atau request ke file yang belum tersedia. Setelah PDF final benar-benar di-upload, ganti tombol dengan anchor aktif sesuai langkah di `docs/tracking-setup.md` dan perbarui status PDF. `terms-and-conditions-may-2027.html` kini memuat T&C khusus keberangkatan 17–24 May 2027, memakai font/style dasar yang sama dengan tambahan scoped stylesheet `assets/terms-2027.css`. Konten spesifik disalin identik dari versi T&C pada commit `fbe13a0`; ketujuh tautan T&C lama landing page menuju file spesifik tersebut dengan fragment semula. Form reservation menambahkan satu tautan T&C spesifik lagi. `terms-and-conditions.html` menjadi halaman umum yang mengacu ke Proposal/Booking Confirmation per perjalanan. Task pemisahan T&C hanya mengubah href Featured Journey. Task conversion/SEO berikutnya menambahkan metadata, form, dan CTA mobile; desain yang sudah jadi tetap. Audit pemisahan ada di `docs/terms-architecture.md`.

Milestone pembayaran: Reservation Rp3.000.000/pax, Payment 2 pada 30 November 2026, Payment 3 pada 15 January 2027, Payment 4 pada 28 February 2027, dan Final Payment pada 2 April 2027. Tanggal berlaku untuk Early Access dan harga normal, dengan total sesuai harga paket. Reservasi kurang dari 14 hari sebelum milestone berikutnya dapat melewati milestone itu dan membagi sisa pembayaran ke milestone berikutnya. Up to 5x bukan jaminan lima pembayaran untuk setiap peserta; Booking Confirmation menjadi acuan final individual.

T&C mencakup data paspor, visa NZ terpisah dan visa transit Australia bersyarat, refund berdasarkan kebijakan dan nilai aktual vendor, perubahan itinerary, force majeure, tanggung jawab peserta, serta dokumentasi/promosi dengan kesempatan menyampaikan keberatan sebelum keberangkatan. Tidak ada penalti/persentase refund baru, jaminan visa/refund/cuaca, angka kilogram, atau meal inclusion yang dibuat.

Nominal Payment 2–Final Payment belum diberikan dalam brief dan ditampilkan sebagai “Sesuai Booking Confirmation”. Ketentuan spesifik fare/vendor mengikuti tiket dan booking final; tidak dibuat ketentuan vendor fiktif. Landing page hanya menampilkan ringkasan dan tautan ke bagian T&C yang sesuai.

## Reservation form, mobile CTA, dan SEO

Section `#reservation-form` memuat form `#nzmay-reservation-form` dengan enam field wajib (full name, WhatsApp, email, jumlah peserta, travelling as, room preference), nama peserta lain optional, dan dua checkbox wajib. Jumlah peserta 1–10 mengikuti batas grup yang sudah dikonfirmasi; preferensi kamar dibahas bersama tim. Hidden fields `source` dan `trip` membedakan enquiry dari form kontak homepage. Endpoint Formspree website tetap dipakai; tidak ada payment gateway atau field kartu.

Pesan setelah form menegaskan bahwa submission tidak mengonfirmasi seat; Reservation Payment Rp3.000.000/pax harus diverifikasi GKT. JavaScript menampilkan acknowledgement sukses yang diminta pengguna, memblokir submit ganda saat pending, dan mempertahankan input saat gagal. Tanpa JavaScript, native POST dan validasi HTML tetap tersedia.

Sticky CTA `Reserve` / `WhatsApp` tampil pada lebar di bawah 900 px. Reserve menuju form; WhatsApp memakai pesan NZMAY existing. Body menyediakan ruang bawah 80 px + safe-area, dan field/link mempunyai scroll margin agar footer serta interaksi form tetap dapat dijangkau.

Canonical landing page adalah `https://garudakiwitour.com/south-island-may-2027.html`. OG/Twitter memakai JPEG existing `northsouth-hero2.jpg` (2000×1333, sekitar 0,48 MB) melalui URL absolut pada domain tersebut. JSON-LD minimal `TouristTrip` hanya memuat nama, tanggal/durasi/rute pada deskripsi, URL, foto, small group, dan provider GKT; tidak ada availability, rating, review, hotel name, flight number, atau offer yang dibuat.

Lima event lokal `gkt:conversion` menyiapkan integrasi tracking, tanpa library analytics/ID dummy atau request tracking. Trigger dan adapter untuk ViewMay2027, DownloadItinerary, ClickWhatsApp, StartReservation, dan SubmitReservation dijelaskan di `docs/tracking-setup.md`. PDF final, endpoint reservation khusus bila diinginkan, serta ID Meta Pixel/GA4 masih menunggu tim; endpoint saat ini sesuai brief pengguna.

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

## Validasi conversion readiness dan SEO — 6 Oktober 2026

Homepage dan landing page lolos Chromium pada 320, 390, 768, 900, dan 1440 px tanpa overflow, error console/JavaScript, atau failed local request. Sticky CTA tampil di bawah 900 px, mempunyai touch target 48 px, Reserve menuju form, dan footer tetap dapat terlihat di atas bar. Screenshot form/sticky mempertahankan palet dan typography halaman. Body homepage tetap byte-identical dengan baseline `065fecb`; perubahan homepage hanya metadata HEAD.

Empat belas skenario input invalid diblokir tanpa POST. Mock Formspree sukses, HTTP 422, network failure, dan pending/submit ganda lulus: payload memuat metadata dan dua acknowledgement, nama ditrim, sukses menampilkan pesan exact dan mereset form, error mempertahankan data, dan pending hanya menghasilkan satu request. Optional names boleh kosong. No-JS native form diblokir saat invalid dan payload valid diuji memakai respons simulasi. Batas nomor WhatsApp native diselaraskan menjadi 8–15 angka; delapan skenario valid/invalid tanpa JavaScript lulus. Tidak ada submission Formspree atau pesan WhatsApp sungguhan.

Event View/Start hanya sekali per load, Submit hanya saat sukses, dan ClickWhatsApp diuji dengan navigasi dicegah. Event payload tidak memuat PII. Hook DownloadItinerary diuji dengan anchor simulasi di DOM browser saja, tanpa membuat PDF atau meminta URL file yang belum tersedia; tombol di repository tetap disabled.

Audit seluruh 19 HTML dan 4 CSS memeriksa 409 referensi, termasuk 30 URL production yang dipetakan ke checkout: 73 resource unik HTTP 200 dan byte-identical, 179 fragment HTML valid, tanpa 404. Canonical, OG/Twitter, JSON-LD TravelAgency/TouristTrip, robots, dan sitemap XML 15 URL unik lulus. Alamat schema berasal dari brief pengguna. JSON-LD tidak memuat rating/review/availability/flight number/hotel name atau offer yang belum dikonfirmasi.

Backup, kedua file T&C, halaman custom, dan tiga produk bertanggal 2026 tetap utuh; tidak ada file lama dihapus atau noindex massal. Pemeriksaan format file yang diubah, sintaks JavaScript, dan `git diff --check` lulus. PDF final serta ID tracking sebenarnya masih TBC; endpoint reservation khusus opsional karena endpoint website dipakai sesuai instruksi.
