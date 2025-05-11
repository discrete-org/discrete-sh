---
sidebar_position: 6
---

# 🔄 Komposisi Relasi

Selain menggabungkan relasi dengan operasi himpunan, ada cara lain yang tak kalah penting—yaitu **komposisi relasi**. Metode ini seperti menyambungkan dua relasi untuk membentuk relasi baru yang menghubungkan elemen dari himpunan pertama ke himpunan terakhir, lewat himpunan di tengah.

---

## 📘 Apa Itu Komposisi Relasi?

Bayangkan kamu punya dua relasi:
- `R`, yang menghubungkan elemen dari himpunan A ke B
- `S`, yang menghubungkan elemen dari himpunan B ke C

Nah, **komposisi dari S dan R**, yang ditulis sebagai `S o R`, adalah relasi baru dari A ke C. Relasi ini terbentuk jika ada elemen `b` di B, sehingga:
- `(a, b)` ada di R, dan
- `(b, c)` ada di S

### 🔧 Definisi Resminya:

S o R = `{(a, c) | ada b ∈ B sehingga (a, b) ∈ R dan (b, c) ∈ S}`

Jadi, kamu mulai dengan relasi R dulu (dari A ke B), lalu lanjut ke relasi S (dari B ke C). Ibaratnya seperti naik angkot dua kali: dari rumah ke terminal (R), lalu dari terminal ke kampus (S) — hasil akhirnya kamu bisa menghubungkan rumah ke kampus!

---

## 💡 Contoh Komposisi Relasi

Misalkan:
- A = `{1, 2}`
- B = `{3, 4}`
- C = `{5, 6}`

Kita definisikan dua relasi:
- **R** = `{(1, 3), (2, 4)} ⊆ A × B`  
- **S** = `{(3, 5), (4, 6)} ⊆ B × C`

Kita ingin mencari `S o R`, yaitu komposisi dari R ke S.

### Langkah-langkah:
1. Dari R, kita tahu:
   - 1 terhubung ke 3
   - 2 terhubung ke 4

2. Dari S:
   - 3 terhubung ke 5
   - 4 terhubung ke 6

3. Jadi kita sambungkan:
   - karena `(1, 3)` ∈ R dan `(3, 5)` ∈ S → `(1, 5)` ∈ S o R
   - karena `(2, 4)` ∈ R dan `(4, 6)` ∈ S → `(2, 6)` ∈ S o R

### ✅ Hasil Komposisi:

S o R = `{(1, 5), (2, 6)}`

---

## ✨ Kesimpulan

Komposisi relasi adalah cara cerdas untuk membentuk "jalur baru" antar himpunan melalui penggabungan dua relasi yang saling menyambung. Konsep ini sangat penting di berbagai bidang seperti logika matematika, basis data, dan pemrograman.

> Ingat: R menghubungkan A ke B, S menghubungkan B ke C — komposisinya menghubungkan A ke C! 🔗
