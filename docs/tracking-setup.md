# Persiapan tracking GKT / NZMAY

Belum ada Meta Pixel ID atau GA4 Measurement ID yang diberikan. Tidak ada library analytics, tracker, ID dummy, atau request analytics yang dipasang. Landing page hanya menyediakan event lokal melalui `window` dengan nama `gkt:conversion`, dari `assets/south-island-may-2027.js`.

## Event dan titik trigger

| Event               | Trigger dalam code                                                                                           | Catatan integrasi                                                                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ViewMay2027`       | Listener `DOMContentLoaded` pada landing page.                                                               | Sekali per page load.                                                                                                                                  |
| `DownloadItinerary` | Delegated click pada anchor `[data-itinerary-pdf]` yang aktif dan menuju filename final di origin yang sama. | Anchor PDF final kini aktif. Event mencatat klik tautan PDF, bukan konfirmasi file selesai diunduh.                                                    |
| `ClickWhatsApp`     | Delegated click pada link WhatsApp GKT di landing page, termasuk sticky CTA.                                 | `placement` membedakan `payment`, `reservation`, `footer`, atau `mobile-sticky`.                                                                       |
| `StartReservation`  | Pertama kali pengguna fokus pada input/select/textarea form atau mengklik link `#reservation-form`.          | Sekali per page load; `placement` menyatakan sumber interaksi.                                                                                         |
| `SubmitReservation` | Setelah respons HTTP sukses dari endpoint Formspree pada submit yang valid.                                  | Tidak dipicu pada validasi gagal, request pending, HTTP error, atau network error. Event berarti enquiry diterima, bukan seat confirmed atau purchase. |

Payload event hanya berisi `name`, `trip`, `source`, dan `placement` bila relevan. Nama peserta, nomor WhatsApp, email, pilihan kamar, dan isi form tidak dikirim dalam event. Formspree tetap menerima field form yang ditujukan untuk enquiry.

Pasang adapter/listener **sebelum** script campaign dijalankan agar event page view tertangkap. Script campaign menggunakan `defer`, lalu memicu page view pada `DOMContentLoaded`. Adapter dapat memakai kontrak berikut setelah tracker asli dikonfigurasi:

```js
window.addEventListener("gkt:conversion", ({ detail }) => {
  const { name, ...context } = detail;
  // Hubungkan name/context ke tracker yang telah dikonfigurasi.
});
```

Untuk Meta Pixel, kelima nama di tabel dapat digunakan sebagai custom events. Untuk GA4, mapping yang disarankan adalah `view_may_2027`, `download_itinerary`, `click_whatsapp`, `start_reservation`, dan `submit_reservation`. ID dan konfigurasi tujuan sebenarnya masih menunggu tim. Jangan memetakan enquiry menjadi payment/purchase atau confirmed booking.

## Form reservasi

Form `#nzmay-reservation-form` berada dalam section `#reservation-form`. Endpoint yang dipakai saat ini adalah endpoint website yang ada: `https://formspree.io/f/mjkyejdg`. Hidden fields membedakan submission dengan `source = NZMAY Reservation Form` dan `trip = South Island Open Trip 17–24 May 2027`. Jika endpoint reservation khusus diberikan, ubah `action` form; script menggunakan nilai `form.action` sehingga endpoint tidak diduplikasi dalam JavaScript.

Dua checkbox wajib menjelaskan bahwa form belum mengonfirmasi seat dan mengarahkan ke T&C May 2027. Pesan sukses adalah enquiry acknowledgement; Reservation Payment Rp3.000.000/pax masih harus diverifikasi GKT untuk konfirmasi seat. Tanpa JavaScript, form memakai native POST dengan validasi HTML. Jangan melakukan submission sungguhan saat QA; intercept endpoint dengan respons simulasi sebelum halaman dibuka.

Validasi WhatsApp menerima angka dengan spasi, tanda hubung, dan tanda `+` di awal untuk kode negara, misalnya `082154465074`, `0821 5446 5074`, `0821-5446-5074`, atau `+62 821 5446 5074`. Batas 8–15 berlaku pada jumlah digit, bukan panjang string. Validasi HTML dan JavaScript mempertahankan nomor persis seperti input pengguna; tidak ada normalisasi pada field atau payload Formspree.

Pilihan kamar tetap Twin Share / Double / Single Room. Keterangan terhubung melalui `aria-describedby` menjelaskan bahwa preferensi mengikuti ketersediaan dan single room dapat memerlukan supplement yang dikonfirmasi sebelum reservasi; nominal belum ditetapkan. Privacy Policy tersedia di `privacy-policy.html`, footer homepage/landing page, dan dekat form reservasi. Halaman ini hanya menjelaskan penggunaan data form, pemrosesan melalui Formspree, tidak dijual kepada pengiklan, serta kontak email untuk pertanyaan/koreksi/permintaan data.

## PDF final tersedia

PDF final unggahan pengguna tersedia di root repository dengan filename `garuda-kiwi-tour-south-island-may-2027.pdf`. File disimpan byte-identical dengan unggahan; isi, gambar, dan layout PDF tidak diubah.

- Ukuran: 2.090.261 bytes; 8 halaman.
- Judul dokumen: `Garuda Kiwi Tour - South Island 17-24 May 2027`.
- SHA-256: `f34fe01c0e6a3050e769db1365f103e98d1cae0b397c2f589892b3e32d6a7b4a`.

Anchor aktif `#itinerary-pdf-link` mempertahankan `data-itinerary-pdf` dan `data-pdf-filename="garuda-kiwi-tour-south-island-may-2027.pdf"`, dengan `href="garuda-kiwi-tour-south-island-may-2027.pdf"`. Link membuka PDF pada tab baru melalui `target="_blank"` dan `rel="noopener noreferrer"`. Copy halaman menyatakan PDF tersedia; tombol disabled sebelumnya sudah diganti dengan anchor.

Hook `DownloadItinerary` yang ada mengenali klik pada anchor aktif menuju filename final di origin yang sama. JavaScript tracking tidak perlu diubah untuk aktivasi ini. Event tetap lokal `gkt:conversion`; belum ada Meta Pixel ID atau GA4 Measurement ID, adapter analytics, maupun request ke tracker. Klik PDF tidak sama dengan konfirmasi bahwa file selesai diunduh.

PDF tersedia melalui landing page; sitemap tetap memuat 16 halaman publik dan tidak perlu menambahkan URL dokumen PDF.

Jika pengguna menyediakan revisi PDF kemudian, simpan dokumen yang disetujui di filename yang sama tanpa mengubah isinya, catat ukuran/jumlah halaman/hash baru, lalu validasi respons PDF dan tautan serta event klik yang sebenarnya. Jangan mengganti dokumen 2027 dengan PDF perjalanan 2026.

QA aktivasi pada 6 Oktober 2026 lulus: HTTP GET 200 dengan MIME `application/pdf`, ukuran dan hash sesuai lampiran; link desktop/mobile, klik SVG dan Enter membuka PDF dan memicu tepat satu `DownloadItinerary` per klik dengan JavaScript. Link juga bekerja tanpa JavaScript. Tidak ada tracker baru atau submission Formspree sungguhan. Audit seluruh link lokal menemukan 75 resource HTTP 200 dan 182 fragment valid, tanpa 404; hasil lengkap ada di `docs/nzmay-campaign.md`.
