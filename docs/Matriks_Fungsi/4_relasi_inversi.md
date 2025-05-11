---
sidebar_position: 4
---

# 🔄 Relasi Inversi

Pernah mendengar istilah "kebalikan dari sebuah relasi"? Nah, itulah yang disebut **relasi inversi**. Konsep ini mirip dengan membalik arah panah pada sebuah hubungan.

Misalnya, jika ada relasi R yang menyatakan “a adalah ayah dari b”, maka relasi inversinya akan menyatakan “b adalah anak dari a”. Mudah, kan?

Contoh lain:
- Relasi “lebih besar dari” punya inversi “lebih kecil dari”.
- Relasi “lebih tua dari” inversinya adalah “lebih muda dari”.

---

## 🔁 Apa Itu Relasi Inversi?

Secara umum, jika kamu punya relasi R dari himpunan A ke himpunan B, maka **relasi inversinya**, yang ditulis sebagai `R⁻¹`, adalah relasi dari B ke A. Caranya? Cukup balik posisi setiap pasangan terurut dalam relasi R.

### 📌 Definisi Formal:
Jika `R` adalah relasi dari A ke B, maka:

R⁻¹ = `{ (b, a) | (a, b) ∈ R }`

---

## 📚 Contoh Kasus:

Misalkan:
- P = `{2, 3, 4}`
- Q = `{2, 4, 8, 9, 15}`

Kita definisikan relasi `R` dari P ke Q sebagai:

> (p, q) ∈ R jika **p habis membagi q**

Hasilnya:

R = `{(2,2), (2,4), (4,4), (2,8), (4,8), (3,9), (3,15)}`


### 🔄 Membuat Inversinya:

Sekarang kita balik arah relasinya: dari Q ke P. Maka relasi inversinya `R⁻¹` akan menjadi:

> (q, p) ∈ R⁻¹ jika **q adalah kelipatan dari p**

Hasil:

R⁻¹ = `{(2,2), (4,2), (4,4), (8,2), (8,4), (9,3), (15,3)}`


---

## 🧠 Intinya

Relasi inversi adalah konsep sederhana namun penting: kamu tinggal membalik pasangan relasi yang ada! Ini sangat berguna saat kita ingin melihat hubungan dari sudut pandang yang berbeda.

> Jadi, kalau kamu tahu siapa ayahnya siapa, dengan inversi kamu juga tahu siapa anaknya siapa!

