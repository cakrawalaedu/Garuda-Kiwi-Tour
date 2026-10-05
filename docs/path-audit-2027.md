# Audit referensi lokal sebelum refresh 2027

Branch kerja: `gkt-2027-refresh`. Baseline: `f73a1b3e2cdb5a6566f80e245539ffa665f33255`.

Audit menemukan 11 path unik yang menghasilkan HTTP 404 dalam 20 referensi HTML. `logo.png` adalah kesalahan kapitalisasi; sepuluh file lainnya tidak tersedia di checkout maupun riwayat Git lokal. Tidak ada halaman lama yang dihapus. `index.html` tetap utuh; `index.pre-2027.html` adalah salinan identik homepage sebelum redesign.

| Path lama | Tujuan yang tersedia | Alasan |
| --- | --- | --- |
| `logo.png` | `Logo.png` | Nama file peka terhadap kapitalisasi pada server Linux. |
| `paket.html` | `index.html#paket` | Daftar paket berada di bagian homepage ini. |
| `contact.html` | `index.html#kontak` | Informasi kontak berada di bagian homepage ini. |
| `artikel-rental.html` | `artikel-roadtrip.html` | Artikel rental tidak tersedia; kartu diarahkan ke panduan roadtrip yang ada, dengan judul dan deskripsi yang sesuai. |
| `rental-nz.jpg` | `roadtrip-nz.jpg` | Gambar milik artikel roadtrip yang tersedia. |
| `detail-winter.html` | `detail-custom.html#custom-paket` | Halaman detail tidak tersedia; tautan kini menawarkan konsultasi paket. |
| `detail-southcoast.html` | `detail-custom.html#custom-paket` | Halaman detail tidak tersedia; tautan kini menawarkan konsultasi paket. |
| `detail-hobbiton.html` | `detail-custom.html#custom-paket` | Halaman detail tidak tersedia; form custom mendukung destinasi Hobbiton. |
| `winter-queenstown.jpg` | `queenstown-from-bob-s-peak.webp` | Foto Queenstown yang tersedia dengan pegunungan bersalju; teks alternatif disesuaikan. |
| `adventure-coast.jpg` | `south island-a.jpg` | Foto Fiordland yang tersedia sebagai pengganti; teks alternatif menyebut lokasi foto, bukan Catlins. |
| `hobbiton-day.jpg` | `newzealand-hero.jpg` | Foto pemandangan New Zealand sebagai pengganti umum; teks alternatif tidak mengklaim foto Hobbiton. |

Penggantian gambar menggunakan aset yang sudah ada, tanpa mengubah ukuran, kelas CSS, atau struktur kartu. Halaman detail paket dan artikel rental yang belum tersedia tidak dibuat secara fiktif. Kartu artikel roadtrip yang sudah ada tetap dipertahankan, sehingga ada dua tautan menuju panduan yang sama.

Audit seluruh file juga menemukan satu tautan tambahan di `style.css`, yang sebenarnya berisi HTML lama dan tidak dimuat oleh halaman mana pun. Path `files/7D5N_South_Island_Private_Tour.pdf` tidak tersedia; tautan diarahkan ke `detail-southisland.html` dengan label “Lihat Itinerary”, tanpa mengklaim unduhan PDF. File lama tetap dipertahankan.

Validasi: jalankan `python3 -m http.server 8000 --bind 127.0.0.1` dari root proyek, lalu lakukan HTTP GET terhadap semua halaman HTML dan seluruh referensi lokal dari atribut HTML, CSS `url(...)`, dan `srcset` bila tersedia. Respons harus HTTP 200 dengan isi yang cocok dengan file lokal; fragment baru `#paket`, `#kontak`, dan `#custom-paket` harus ada. Pastikan backup cocok byte demi byte dengan `index.html` dan homepage baseline.

Hasil validasi: 17 halaman HTML (termasuk backup), satu file legacy `style.css`, dan 54 sumber daya lokal unik berhasil dilayani dengan HTTP 200 serta isi yang cocok dengan checkout. Tidak ada referensi lokal yang menghasilkan 404. Ketiga target fragment baru tersedia. Sebanyak 22 blok JavaScript inline (termasuk salinan homepage) lolos `node --check`. Tidak ada file baseline yang dihapus; homepage dan backup identik dengan baseline, SHA-256 `95a1e8c5cacc4d4e398ef640c85f882f07df567325a95cc69dc72daf15d61b1e`. Interaksi browser dan pengiriman form tidak diuji.
