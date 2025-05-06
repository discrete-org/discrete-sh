# 🔄 Perampatan Operasi Himpunan

**Perampatan operasi himpunan** merujuk pada **penggunaan berbagai operasi himpunan secara bersamaan** untuk membentuk ekspresi yang lebih kompleks. Hal ini memungkinkan kita untuk menyelesaikan masalah himpunan yang lebih rumit dengan cara yang lebih efisien.

Beberapa contoh perampatan operasi himpunan melibatkan **gabungan**, **irisan**, dan **selisih** dalam satu ekspresi. Berikut adalah penjelasan dan contoh-contohnya:

---

## 1. **Perampatan Gabungan dan Irisan**

Kadang-kadang kita ingin menggabungkan dua himpunan terlebih dahulu dan kemudian melakukan irisan dengan himpunan lain. 

Contoh:  
`(A ∪ B) ∩ C`  
Artinya:  
- Gabungkan himpunan A dan B terlebih dahulu (`A ∪ B`), lalu  
- Ambil irisan dari hasil gabungan tersebut dengan himpunan C (`(A ∪ B) ∩ C`).

### 📚 Contoh:
- **A = {1, 2}**  
- **B = {2, 3}**  
- **C = {2, 4}**

Langkah-langkah:
1. Gabungan A dan B: `A ∪ B = {1, 2, 3}`
2. Irisan hasil gabungan dengan C: `(A ∪ B) ∩ C = {2}`

---

## 2. **Perampatan Gabungan dan Selisih**

Kadang-kadang kita ingin mengambil gabungan dari dua himpunan, tetapi setelah itu hanya mengambil elemen-elemen yang ada di salah satu himpunan (selisih).

Contoh:  
`(A ∪ B) - C`  
Artinya:  
- Gabungkan A dan B terlebih dahulu (`A ∪ B`), lalu  
- Ambil elemen yang ada di hasil gabungan, tetapi tidak ada di C (`(A ∪ B) - C`).

### 📚 Contoh:
- **A = {1, 2}**  
- **B = {2, 3}**  
- **C = {2, 4}**

Langkah-langkah:
1. Gabungan A dan B: `A ∪ B = {1, 2, 3}`
2. Selisih hasil gabungan dengan C: `(A ∪ B) - C = {1, 3}`

---

## 3. **Perampatan Irisan dan Selisih**

Kita juga bisa melakukan irisan dua himpunan terlebih dahulu, lalu mengurangkan hasilnya dengan himpunan lain.

Contoh:  
`(A ∩ B) - C`  
Artinya:  
- Ambil irisan antara A dan B (`A ∩ B`), lalu  
- Ambil selisih hasil irisan tersebut dengan C (`(A ∩ B) - C`).

### 📚 Contoh:
- **A = {1, 2, 3}**  
- **B = {2, 3, 4}**  
- **C = {3}**

Langkah-langkah:
1. Irisan A dan B: `A ∩ B = {2, 3}`
2. Selisih hasil irisan dengan C: `(A ∩ B) - C = {2}`

---

## 4. **Perampatan Symmetric Difference (Δ) dan Gabungan (∪)**

Kita juga bisa melakukan operasi **selisih simetris** terlebih dahulu, lalu melakukan **gabungan** dengan himpunan lain.

Contoh:  
`(A Δ B) ∪ C`  
Artinya:  
- Ambil selisih simetris antara A dan B (`A Δ B`), lalu  
- Gabungkan hasilnya dengan himpunan C (`(A Δ B) ∪ C`).

### 📚 Contoh:
- **A = {1, 2, 3}**  
- **B = {3, 4, 5}**  
- **C = {2, 6}**

Langkah-langkah:
1. Selisih simetris A dan B: `A Δ B = {1, 2, 4, 5}`
2. Gabungkan hasilnya dengan C: `(A Δ B) ∪ C = {1, 2, 4, 5, 6}`

---

## 🎯 Kesimpulan:

Perampatan operasi himpunan memungkinkan kita untuk menggabungkan beberapa operasi dalam satu ekspresi untuk menyelesaikan masalah yang lebih kompleks. Beberapa contoh operasi yang dapat digabungkan adalah:
- **Union (∪)** dengan **Intersection (∩)**
- **Union (∪)** dengan **Difference (-)**
- **Intersection (∩)** dengan **Difference (-)**
- **Symmetric Difference (Δ)** dengan **Union (∪)**

Dengan memahami perampatan ini, kita bisa lebih fleksibel dalam bekerja dengan himpunan! 😊

