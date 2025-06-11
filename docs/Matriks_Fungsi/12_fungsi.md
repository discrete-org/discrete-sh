---
sidebar_position: 12
---

# Fungsi

Berapa lama waktu yang dibutuhkan komputer untuk mengeksekusi sebuah program? Jawabannya bergantung pada ukuran masukan yang diberikan. Kalau program kita mengalikan matriks yang berukuran 10 x 10 tentu kebutuhan waktunya berbeda jika matriksnya berukuran 100 x 100. Ini berarti ada hubungan antara ukuran masukan dengan kebutuhan waktu program. Dengan kata lain, kebutuhan waktu sebuah program adalah *fungsi* dari ukuran masukan.

Konsep fungsi sangat penting di dalam matematika diskrit. Fungsi sering dipakai untuk mentranformasikan elemen di sebuah himpunan dengan elemen di himpunan lain. 

Definisi : Misalkan A dan B himpunan. Relasi biner *f* dari A ke B merupakan suatu fungsi jika setiap elemen di dalam A dihubungkan dengan tepat satu elemen di dalam B. Jika *f* adalah fungsi dari A ke B kita menuliskan *f* : A -> B yang artinya *f* **memetakan** A ke B.

Nama lain untuk fungsi adalah **pemetaan** atau **transformasi**. Kita menuliskan *f*(a) = b jika elemen a di dalam A dihubungkan dengan elemen b di dalam B. Himpunan A disebut **daerah asal** (*domain*) dari *f* dan himpunan B disebut **daerah hasil** (*codomain*) dari *f*. Jika *f*(a) = b, maka b dinamakan **bayangan** (*image*) dari a dan a dinamakan **pra-bayangan** (*pre-image*) dari b. Himpunan yang berisi semua nilai pemetaan *f* disebut **jelajah** (*range*) dari *f*. 

Fungsi adalah relasi yang khusus. Kekhususan ini tercakup pada dua hal penting : 

1. Tiap elemen di dalam himpunan A, yang merupakan daerah asal *f*, harus digunakan oleh prosedur atau kaidah yang mendefenisikan *f*.
2. Frasa "dihubungkan dengan tepat satu elemen di dalam B" berarti bahwa jika (a,b) ∈ *f* dan (a,c) ∈ *f*, maka b = c.

Fungsi dapat dispesifisikan dalam berbagai bentuk, diantaranya :
1. Himpunan pasangan terurut. 
   
   Ingatlah bahwa fungsi adalah relasi, sedangkan relasi biasanya dinyatakan sebagai himpunan pasangan terurut.

2. Formula pengisian nilai (*assignment*)

   Di dalam kuliah aljabar atau kalkulus, fungsi dispesifikasikan dalam bentuk rumus pengisian nilai (*assignment*), misalnya *f*(x) = 2x + 10, *f*(x) = x^2, dan *f*(x) = 1/x. Jika himpunan daerah asal maupun daerah hasil fungsi tidak dinyatakan secara spesifik, maka diasumsikan daerah asal fungsi adalah **R** dan daerah hasilnya juga **R**. Dalam himpunan pasangan terurut kita mendefenisikan fungsi sebagai *f* = `{(x, x2) | x ∈ R}`.

3. Kata-kata
   
   Fungsi dapat dinyatakan secara eksplisit dalam rangkaian kata-kata. Misalnya "*f* adalah fungsi yang memetakan jumlah 1 bit di dalam suatu *string* biner".

4. Kode program (*source code*) 
   Fungsi dispesifikasikan dalam bentuk kode program komputer.