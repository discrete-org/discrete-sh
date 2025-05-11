---
sidebar_position: 5
---

# 🔗 Menggabungkan Relasi

Tahukah kamu kalau relasi biner bisa diperlakukan seperti himpunan biasa? Karena relasi terdiri dari pasangan-pasangan terurut, maka kita bisa menerapkan operasi himpunan seperti **irisan (∩)**, **gabungan (∪)**, **selisih (-)**, dan **beda setangkup (⊕)** pada relasi juga. Seru, kan?

Artinya, jika kita punya dua relasi, misalnya `R₁` dan `R₂`, yang keduanya merupakan relasi dari himpunan A ke B, maka hasil dari operasi seperti `R₁ ∩ R₂`, `R₁ ∪ R₂`, `R₁ - R₂`, dan `R₁ ⊕ R₂` juga tetap merupakan relasi dari A ke B.

---

## 🧪 Contoh Kasus:

Misalkan:
- A = `{a, b, c}`
- B = `{a, b, c, d}`

Diberikan dua relasi:
- R₁ = `{(a, a), (b, b), (c, c)}`
- R₂ = `{(a, a), (a, b), (a, c), (a, d)}`

Mari kita lakukan berbagai kombinasi!

### 🔍 Operasi-operasi Relasi:

1. **Irisan (∩)**: pasangan yang muncul di *kedua* relasi  

R₁ ∩ R₂ = `{(a, a)}`

2. **Gabungan (∪)**: semua pasangan dari R₁ dan R₂  

R₁ ∪ R₂ = `{(a, a), (b, b), (c, c), (a, b), (a, c), (a, d)}`

3. **Selisih (R₁ - R₂)**: pasangan yang hanya ada di R₁  

R₁ - R₂ = `{(b, b), (c, c)}`

4. **Selisih (R₂ - R₁)**: pasangan yang hanya ada di R₂  

R₂ - R₁ = `{(a, b), (a, c), (a, d)}`

5. **Beda Setangkup (⊕)**: pasangan yang hanya muncul di salah satu relasi  

R₁ ⊕ R₂ = `{(b, b), (c, c), (a, b), (a, c), (a, d)}`

---

## ✨ Kesimpulan

Menggabungkan relasi itu layaknya bermain puzzle! Kita bisa menyusun ulang pasangan berdasarkan operasi himpunan yang kita gunakan. Ini sangat berguna saat kamu ingin membandingkan atau menggabungkan relasi untuk menemukan pola-pola tertentu.

> Dengan memahami operasi ini, kamu bisa lebih fleksibel dan kreatif dalam bekerja dengan relasi antar himpunan!


