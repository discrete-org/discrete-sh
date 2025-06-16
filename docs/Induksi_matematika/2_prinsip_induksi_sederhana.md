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

Perhatikan bahwa dalam induksi matematik kita tidak mengasumsikan bahwa p(n) benar untuk semua bilangan bulat positif. Kita hanya memperlihatkan bahwa jika diasumsikan p(n) benar, maka p(n #1) juga benar untuk setiap n positif.

Fakta bahwa langkah 1 dan langkah 2 bersama-sama memperlihatkan p(n) benar untuk semua bilangan bulat positif adalah jelas secara intuitif. Dari langkah 1, kita mengetahui bahwa p(1) benar. Dari langkah (2) kita mengetahui bahwa jika p(1) benar maka p(2) juga benar. Tetapi, p(1) sudah ditunjukkan benar dan di sini p(2) juga harus benar. Dari langkah (2) kita juga mengetahui bahwa jika p(2) benar maka p(3) juga benar. Karena kita sudah menunjukkan bahwa p(2) benar, maka p(3) juga benar, dan seterusnya. Secara intuitif kita melihat bahwa langkah 1 dan langkah 2 bersama-sama memperlihatkan bahwa p(1), p(2), ..., p(n) semuanya benar. Pembuktian dengan induksi matematik mirip dapat kita ilustrasikan dengan fenomena yang dikenal dengan **efek domino**. Sejumlah batu domino diletakkan berdiri dengan jarak ruang yang sama satu sama lain (lihat Gambar 4.1). Untuk merebahkan semua batu domino, kita hanya perlu mendorong domino 1 ke kanan. Jika domino 1 di dorong ke kanan, ia akan mendorong domino 2, domino 2 mendorong domino 3, begitu seterusnya sehingga semua batu domino rebah ke kanan.