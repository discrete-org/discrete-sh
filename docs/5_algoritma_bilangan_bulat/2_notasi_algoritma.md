---
sidebar_position: 2
---

# 📝 Notasi Algoritma

Sebuah algoritma bisa dituliskan dalam berbagai cara — mulai dari bentuk kalimat biasa hingga menyerupai kode program. Tujuannya tetap sama: menyampaikan langkah-langkah penyelesaian masalah dengan cara yang jelas dan mudah dipahami.

---

## 📘 1. Notasi Deskriptif (Kalimat Biasa)

Notasi ini menjelaskan algoritma dengan kalimat sehari-hari, seperti layaknya resep masakan. Setiap langkah biasanya dimulai dengan kata kerja seperti "baca", "hitung", "ganti", "bandingkan", dan lain-lain. Untuk menyatakan kondisi, biasanya digunakan struktur seperti "jika ... maka ...".

### ✨ Contoh: Mencari Elemen Terbesar dari Sekumpulan Bilangan

Misalkan kita punya sejumlah bilangan bulat: a₁, a₂, ..., aₙ. Kita ingin mencari bilangan yang paling besar di antara semuanya dan menyimpannya di dalam variabel `maks`.

#### 🔍 Algoritma:

1. Anggap `a₁` sebagai nilai maksimum sementara. Simpan `a₁` ke dalam `maks`.
2. Bandingkan `maks` dengan `a₂`. Jika `a₂` lebih besar, ganti nilai `maks` dengan `a₂`.
3. Ulangi proses tersebut untuk `a₃`, `a₄`, hingga `aₙ`.
4. Setelah seluruh elemen dibandingkan, nilai `maks` adalah elemen terbesar.

Notasi ini cukup efektif untuk algoritma yang pendek. Namun, jika algoritmanya panjang dan kompleks, notasi kalimat sering kali menjadi kurang praktis dan bisa membingungkan pembaca.

---

## 💻 2. Notasi Bahasa Pemrograman

Algoritma juga bisa ditulis menggunakan bahasa pemrograman seperti Python, C, atau Java. Ini sangat membantu bila ingin langsung mengimplementasikan solusi ke dalam kode.

Namun, notasi ini memiliki kekurangan: sintaks tiap bahasa berbeda dan cenderung rumit. Kita harus memperhatikan hal teknis seperti tanda titik koma, struktur input/output, dan sebagainya. Akibatnya, algoritma yang seharusnya bersifat umum menjadi terlalu teknis dan sulit dipahami pembaca awam.

---

## 🧾 3. Notasi Pseudocode (Kode Semu)

Solusinya? Gunakan **pseudocode** — yaitu cara penulisan algoritma yang menyerupai bahasa pemrograman, tetapi tanpa aturan sintaks yang kaku.

Pseudocode mengambil elemen-elemen yang umum dari berbagai bahasa pemrograman seperti `if-then-else`, `while-do`, `repeat-until`, `read`, `write`, dan lainnya. Kita bisa menulis pseudocode dengan fleksibel, selama perintahnya tetap jelas dan mudah dimengerti.

### ✅ Keuntungan Pseudocode:

- Tidak terikat aturan sintaks bahasa pemrograman tertentu.
- Lebih fokus pada logika dan struktur algoritma.
- Mudah diubah menjadi kode program sebenarnya (translasi).
- Tidak perlu repot dengan hal teknis seperti tanda kurung, titik koma, atau format output.

> Intinya, pseudocode itu seperti peta jalan untuk programmer — tidak terlalu rinci, tapi cukup jelas untuk diikuti dan dikembangkan lebih lanjut.

---

## 📌 Kesimpulan

Menulis algoritma bisa dilakukan dengan berbagai notasi — mulai dari kalimat biasa, bahasa pemrograman, hingga pseudocode. Masing-masing punya keunggulan dan kelemahannya sendiri. Namun, untuk keperluan pembelajaran dan komunikasi yang jelas, **pseudocode adalah pilihan paling seimbang** antara kejelasan dan kedekatan dengan implementasi nyata.

