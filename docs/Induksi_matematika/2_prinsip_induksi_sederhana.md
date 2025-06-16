---
sidebar_position: 2
---

# Prinsip Induksi Sederhana
Prinsip induksi sederhana berbunyi sebagai berikut: 

Misalkan p(n) adalah proposisi perihal bilangan bulat positif dan kita ingin membuktikan bahwa p(n) benar untuk semua bilangan bulat positif n. Untuk membuktikan proposisi ini, kita hanya perlu menunjukkan bahwa:

1. p(l) benar, dan
2. jika p(n) benar, maka p(n+1) juga benar untuk setiap n > 1.
   
Sehingga p(n) benar untuk semua bilangan bulat positif n.

Langkah 1 dinamakan **basis induksi**, sedangkan langkah 2 dinamakan **langkah induksi**. Langkah induksi berisi asumsi (andaian) yang menyatakan bahwa p(n) benar. Asumsi tersebut dinamakan **hipotesis induksi**. Bila kita sudah menunjukkan kedua langkah tersebut benar maka kita sudah membuktikan bahwa p(n) benar untuk semua bilangan bulat positif n.

Basis induksi digunakan untuk memperlihatkan bahwa pernyataan tersebut benar bila n diganti dengan 1, yang merupakan bilangan bulat positif terkecil. Kemudian kita harus memperlihatkan bahwa implikasi p(n) —> p(n + 1) benar untuk setiap bilangan bulat positif. Untuk membuktikan implikasi tersebut benar untuk setiap bilangan bulat positif n, kita perlu menunjukkan bahwa p(n + 1) tidak mungkin salah bila p(n) benar. Hal ini diselesaikan dengan cara memperlihatkan bahwa berdasarkan hipotesis p(n) benar maka p(n + 1) juga harus benar.