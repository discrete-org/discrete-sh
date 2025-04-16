---
sidebar_position: 4
---

# ❌ Disjungsi Eksklusif (XOR)

Dalam logika, kata **"atau"** ternyata punya dua makna berbeda. Yuk kita bahas!

---

## 1️⃣ "Atau" Inklusif (Inclusive OR)

Jenis ini berarti **"P atau Q atau keduanya"**.

- Pernyataan akan bernilai **benar** jika:
  - P benar
  - Q benar
  - atau **keduanya benar**

Jenis ini adalah **OR** yang biasa kita gunakan dalam logika proposisi.

---

## 2️⃣ "Atau" Eksklusif (Exclusive OR / XOR)

Nah, yang ini beda!

- **XOR** berarti **"P atau Q, tetapi *bukan keduanya sekaligus*"**
- Artinya, pernyataan hanya **benar jika hanya satu dari P atau Q yang benar**

---

### 💡 Contoh Sederhana

Bayangkan ada pernyataan berikut dalam sebuah lomba:

> "Pemenang lomba mendapat hadiah berupa **TV atau uang tunai**."

Tapi... hanya boleh **memilih salah satu** — tidak bisa keduanya.

🛑 Jadi:
- TV ✅, uang ❌ → **Benar**
- TV ❌, uang ✅ → **Benar**
- TV ✅, uang ✅ → **Salah**
- TV ❌, uang ❌ → **Salah**

---

## 🔣 Notasi XOR dalam Logika

Untuk menyatakan XOR, kita menggunakan simbol:

P ⊕ Q



Artinya: **P XOR Q**

---

## 📊 Tabel Kebenaran XOR

| P  | Q  | P ⊕ Q |
|----|----|--------|
| T  | T  | ❌ F    |
| T  | F  | ✅ T    |
| F  | T  | ✅ T    |
| F  | F  | ❌ F    |

---

Dari tabel di atas, jelas bahwa:

> **P ⊕ Q bernilai benar hanya jika salah satu dari P atau Q benar, tapi bukan keduanya.**

---

## ✅ Kapan Gunakan XOR?

Gunakan **XOR** kalau kamu ingin membatasi pilihan:
- Hanya satu kondisi yang boleh benar
- Tidak boleh keduanya aktif

Contoh lain:
- Sistem login yang hanya memperbolehkan satu dari dua metode otentikasi
- Soal pilihan ganda dengan jawaban tunggal

---
