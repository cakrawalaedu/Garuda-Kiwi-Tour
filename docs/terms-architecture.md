# Arsitektur Terms & Conditions GKT

`terms-and-conditions.html` memuat ketentuan umum. Payment schedule, cancellation/refund, minimum participant, visa, dan ketentuan airline/vendor dapat berbeda menurut produk/perjalanan; Proposal/Booking Confirmation perjalanan terkait menjadi acuan. Tidak ada harga, nominal deposit, milestone, persentase penalti/refund, minimum peserta numerik, atau aturan May 2027 yang diberlakukan sebagai aturan umum.

`terms-and-conditions-may-2027.html` khusus South Island Open Trip 17–24 May 2027. File disalin byte-identical dari `terms-and-conditions.html` pada commit `fbe13a0`; konten dan anchor tidak diubah. SHA-256: `96d613246a154d6a32216bf87fc41dc16d426b53e27875f8ce92ddda21798263`.

## Audit seluruh tautan T&C

| Sumber                                            | Tujuan                                              | Perubahan                                                                              |
| ------------------------------------------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Homepage — Featured Journey May 2027              | `terms-and-conditions-may-2027.html`                | Satu href dipindahkan.                                                                 |
| Homepage — form kontak dan footer                 | `terms-and-conditions.html`                         | Dua href umum tetap.                                                                   |
| Landing page — payment section dan FAQ pembayaran | T&C May `#payment`                                  | Dua href dipindahkan; anchor tetap.                                                    |
| Landing page — FAQ seat                           | T&C May `#reservation`                              | Satu href dipindahkan.                                                                 |
| Landing page — FAQ itinerary                      | T&C May `#itinerary`                                | Satu href dipindahkan.                                                                 |
| Landing page — FAQ cancellation/refund            | T&C May `#cancellation`                             | Satu href dipindahkan.                                                                 |
| Landing page — dua tautan footer                  | T&C May tanpa fragment                              | Dua href dipindahkan.                                                                  |
| T&C umum — daftar perjalanan                      | T&C May                                             | Tautan berlabel “South Island Open Trip 17–24 May 2027 — Specific Terms & Conditions”. |
| `detail-southisland.html`                         | T&C umum dan `#payment`, `#cancellation`, `#vendor` | Tautan umum lama tetap; tiga tautan bagian umum ditambahkan.                           |
| `detail-family.html` — FAQ deposit                | T&C umum `#payment`                                 | Satu tautan umum ditambahkan.                                                          |
| `detail-northsouth.html` — catatan pembayaran     | T&C umum `#payment`                                 | Satu tautan umum ditambahkan.                                                          |
| `index.pre-2027.html`                             | `terms-and-conditions.html`                         | Backup dan tautannya tetap.                                                            |

Seluruh 19 HTML diperiksa: tujuh file memiliki 18 tautan T&C langsung; 12 file lainnya tidak memiliki tautan T&C langsung. Tidak ada halaman private/general yang diarahkan langsung ke aturan May 2027. Tautan dari T&C umum merupakan daftar ketentuan spesifik dengan nama/tanggal perjalanan yang jelas.

## Halaman aktif dan produk bertanggal

`detail-southisland.html`, `detail-family.html`, dan `detail-northsouth.html` adalah halaman private/family tanpa tanggal campaign khusus. DP 30%, pelunasan H-30/30 hari, serta aturan H-14 tanpa refund yang ditemukan dinetralkan ke Proposal/Booking Confirmation produk terkait. Kalkulator dan template WhatsApp tidak lagi menghitung/menyebut deposit 30%. South Island mengacu ke Proposal/vendor untuk pembatalan dan force majeure. Tidak ada aturan May 2027 yang disalin ke halaman private/family.

Harga, promo, tanggal, jumlah peserta terkait harga, single supplement, dan desain halaman tidak berubah. `detail-custom.html` tidak memiliki aturan DP/refund tersebut dan tetap utuh.

`open-trip-early-autumn.html`, `open-trip-april-2026-10d8n.html`, dan `new-zealand-signature-escape.html` memiliki tanggal perjalanan 2026 yang jelas pada judul/hero/informasi produk. Ketentuan mereka tetap dalam konteks perjalanan bertanggal tersebut; ketiga file tidak diubah. Backup tidak berubah; SHA-256: `95a1e8c5cacc4d4e398ef640c85f882f07df567325a95cc69dc72daf15d61b1e`.

## Validasi 6 Oktober 2026

- 19 HTML, 4 CSS, dan 375 referensi lokal diaudit: seluruh 70 resource unik HTTP 200 dan byte-identical dengan checkout; 177 fragment valid; tidak ada 404/path/kapitalisasi gagal.
- Perubahan fungsional homepage hanya satu href; landing page hanya tujuh href. Formatter menyesuaikan pemenggalan baris tautan yang menjadi lebih panjang. T&C spesifik, backup, custom, dan tiga campaign 2026 identik dengan baseline terkait; tidak ada halaman lama dihapus.
- Chromium: T&C umum tanpa overflow/error pada 320, 390, 768, dan 1440 px; file T&C spesifik baru termuat pada 390 px. Gambar/font lokal, menu, Escape, serta navigasi tanpa JavaScript berfungsi.
- Klik Featured membuka T&C spesifik; form/footer tetap umum; link payment landing page membuka tabel spesifik; listing T&C umum membuka halaman spesifik dengan label yang diminta.
- 14 blok JavaScript legacy lolos sintaks; 12 skenario pricing mempertahankan harga/total/minimum peserta/single supplement. Catatan deposit dan template WhatsApp netral, tanpa DP 30%. Tidak ada pesan sungguhan dikirim.
- `git diff --check`, sintaks script bersama, dan pemeriksaan scope ketentuan umum/private lulus.
