---
sidebar_position: 2
---

# 🔗 Relasi 

Dalam dunia himpunan, kamu pasti sudah pernah mendengar istilah **pasangan terurut** (*ordered pairs*). Nah, cara paling sederhana untuk menunjukkan hubungan antar elemen dari dua himpunan adalah dengan menyusunnya dalam bentuk pasangan terurut.

Pasangan-pasangan ini berasal dari sesuatu yang disebut **perkalian kartesian** (*cartesian product*) dari dua himpunan.

---

## 📦 Apa Itu Perkalian Kartesian?

Perkalian kartesian dari dua himpunan A dan B adalah **himpunan semua pasangan (a, b)** yang bisa kamu bentuk, di mana:

- a diambil dari himpunan A
- b diambil dari himpunan B

Ditulis dengan notasi:

A × B = `{ (a, b) | a ∈ A dan b ∈ B }`


---

## 🤝 Mengenal Relasi

Nah, dari hasil perkalian kartesian tadi, kita bisa membuat sebuah konsep baru yang disebut **relasi**.

### 📌 Definisi Relasi Biner

**Relasi biner** R dari A ke B adalah **sebuah himpunan bagian dari A × B**.

Ditulis dengan notasi:

R ⊆ A × B


Artinya, relasi hanyalah beberapa pasangan yang kita pilih dari hasil perkalian kartesian.  

Kalau sebuah pasangan (a, b) termasuk dalam relasi R, kita bisa tulis:

a R b


Kalau tidak termasuk:

a not R b


> 🧭 A disebut **domain** (daerah asal)  
> 🎯 B disebut **range** atau **codomain** (daerah hasil)

---

## 🧪 Contoh Kasus

Misalkan:

- A = `{Amir, Budi, Cecep}` → Himpunan mahasiswa  
- B = `{IF221, IF251, IF342, IF323}` → Himpunan kode mata kuliah

### 🔄 Perkalian Kartesian A × B

Berarti kita akan membuat semua kombinasi mahasiswa dan mata kuliah:

A × B = `{(Amir, IF221), (Amir,IF251), (Amir, IF342), (Amir, IF323),(Budi, IF221), (Budi, IF251), (Budi, IF342), (Budi, IF323),(Cecep, IF221), (Cecep, IF251), (Cecep,IF342), (Cecep, IF323)
}`


Jumlah pasangan: 3 mahasiswa × 4 mata kuliah = **12 kombinasi**

### 🧷 Contoh Relasi: Mata Kuliah Semester Ganjil

Misalnya R adalah relasi yang menunjukkan siapa mengambil mata kuliah apa di semester ganjil:

R = `{(Amir, IF251), (Amir, IF323),
(Budi, IF221), (Budi, IF251),
(Cecep, IF323)
}`


Maka:

- Karena (Amir, IF251) ∈ R, kita tulis: `Amir R IF251`
- Karena (Amir, IF342) ∉ R, kita tulis: `Amir not R IF342`

---

## 🧠 Ringkasan

- Perkalian kartesian menghasilkan semua kombinasi elemen dari dua himpunan.
- Relasi adalah sebagian dari kombinasi itu, yang menunjukkan keterkaitan antara elemen A dan B.
- Relasi bisa dinyatakan dengan notasi `a R b` jika pasangan tersebut termasuk dalam relasi.

---

