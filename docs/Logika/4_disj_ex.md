---
sidebar_position: 4
---

# Disjungsi Ekslusif (XOR)

Dalam logika, kata **"atau"** (or) bisa punya dua makna berbeda.

### 1️⃣ "Atau" Inklusif (Inclusive OR)

Ini berarti "P atau Q atau keduanya". Artinya, pernyataan tetap benar jika salah satu atau bahkan keduanya benar. Operator **OR** yang sudah kita bahas sebelumnya adalah jenis yang inklusif ini.

### 2️⃣ "Atau" Eksklusif (Exclusive OR / XOR)

Nah, ini beda! XOR berarti "P atau Q, **tapi bukan keduanya** tapi bukan keduanya". Pernyataan hanya bernilai benar jika salah satu dari P atau Q yang benar, tetapi tidak keduanya sekaligus.

#### 💡 Contoh Sederhana:

Bayangkan ada lomba dengan hadiah TV 20 inci. Kalau pemenang tidak mau TV, panitia bisa menggantinya dengan uang.

Pernyataannya bisa ditulis begini:

"Pemenang lomba mendapat hadiah berupa TV atau uang."

Tapi di sini kata "atau" bersifat **ekslusif**. Artinya, pemenang hanya bisa membawa **salah satu, bukan keduanya sekaligus**.

### Notasi XOR dalam Logika

Untuk membedakan dari Inclusive OR, kita menggunakan operator ⊕ (XOR), yang didefinisikan sebagai berikut:

| P  | Q  | P ⊕ Q |
|----|----|------|
| T  | T  | F    |
| T  | F  | T    |
| F  | T  | T    |
| F  | F  | F    |

Dari tabel di atas, kita bisa melihat bahwa **P ⊕ Q** bernilai *True* jika *salah satu* dari P atau Q yang benar tetapi **tidak keduanya sekaligus**.

Jadi, kalau ada situasi di mana hanya satu pilihan bisa benar, tapi bukan keduany, **XOR** adalah konsep yang tepat! 🚀
