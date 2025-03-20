---
sidebar_position: 5
---

# Hukum-hukum Logika Proposisi

Proposisi dalam kerangka hubungan ekivalensi logika, memenuhi sifat-sifat yang dinyatakan dalam sejumlah hukum. Beberapa hukum tersebut mirip dengan hukum aljabar pada sistem bilangan riil, sehingga kadang-kadang hukum logika proposisi dinamakan juga **hukum aljabar proposisi**.

## 1. Hukum Identitas
| Hukum              | Bentuk Matematis |
|--------------------|----------------|
| Identitas AND     | P ∧ T ≡ P      |
| Identitas OR      | P ∨ F ≡ P      |

## 2. Hukum Dominas
| Hukum              | Bentuk Matematis |
|--------------------|----------------|
| Dominasi AND      | P ∧ F ≡ F      |
| Dominasi OR       | P ∨ T ≡ T      |

## 3. Hukum Idempotensi
| Hukum              | Bentuk Matematis |
|--------------------|----------------|
| Idempotensi AND   | P ∧ P ≡ P      |
| Idempotensi OR    | P ∨ P ≡ P      |

## 4. Hukum Involusi
| Hukum              | Bentuk Matematis |
|--------------------|----------------|
| Negasi Ganda      | ¬(¬P) ≡ P      |

## 5. Hukum Komutatif
| Hukum              | Bentuk Matematis |
|--------------------|----------------|
| Komutatif AND     | P ∧ Q ≡ Q ∧ P  |
| Komutatif OR      | P ∨ Q ≡ Q ∨ P  |

## 6. Hukum Asosiatif
| Hukum              | Bentuk Matematis |
|--------------------|----------------|
| Asosiatif AND     | (P ∧ Q) ∧ R ≡ P ∧ (Q ∧ R) |
| Asosiatif OR      | (P ∨ Q) ∨ R ≡ P ∨ (Q ∨ R) |

## 7. Hukum Distributif
| Hukum              | Bentuk Matematis |
|--------------------|----------------|
| Distributif AND   | P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R) |
| Distributif OR    | P ∨ (Q ∧ R) ≡ (P ∨ Q) ∧ (P ∨ R) |

## 8. Hukum De Morgan
| Hukum              | Bentuk Matematis |
|--------------------|----------------|
| De Morgan 1       | ¬(P ∧ Q) ≡ ¬P ∨ ¬Q |
| De Morgan 2       | ¬(P ∨ Q) ≡ ¬P ∧ ¬Q |

## 9. Hukum Absorpsi
| Hukum              | Bentuk Matematis |
|--------------------|----------------|
| Absorpsi 1        | P ∨ (P ∧ Q) ≡ P |
| Absorpsi 2        | P ∧ (P ∨ Q) ≡ P |

## 10. Hukum Negasi
| Hukum              | Bentuk Matematis |
|--------------------|----------------|
| Negasi AND        | P ∧ ¬P ≡ F |
| Negasi OR         | P ∨ ¬P ≡ T |

Hukum-hukum logika ini sangat berguna untuk membuktikan apakah dua proposisi setara atau tidak. Selain lewat tabel kebenaran, kita juga bisa membuktikan kesetaraan dengan menerapkan hukum-hukum logika langsung pada proposisi atomik.

Namun, kalau sebuah proposisi majemuk punya n proposisi atomik, tabel kebenarannya bakal punya 2^n baris. Kebayang kan kalau *n* = 10? Itu berarti ada 2^10 atau 1.024 baris! Jadi, kalau jumlah proposisinya banyak, pakai tabel kebenaran bisa jadi kurang praktis. Dalam kasus seperti ini, membuktikan dengan hukum logika jelas jauh lebih efisien.