import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        
        <div className={styles.featureList}>
          <Link to="docs/category/logika" className={styles.featureItem}>
            <div>
              <h3 className={styles.featureTitle}>Logika Matematika</h3>
              <p className={styles.featureDescription}>
                Pelajari bagaimana cara mengelompokkan elemen-elemen dalam suatu himpunan dan hubungan antar himpunan.
              </p>
            </div>
          </Link>

          <Link to="/docs/category/himpunan" className={styles.featureItem}>
            <div>
              <h3 className={styles.featureTitle}>Teori himpunan</h3>
              <p className={styles.featureDescription}>
                Memahami dasar-dasar logika yang digunakan untuk membangun argumen matematis.
              </p>
            </div>
          </Link>

          <Link to="/teori-graf" className={styles.featureItem}>
            <div>
              <h3 className={styles.featureTitle}>Matrix, Relasi & Fungsi</h3>
              <p className={styles.featureDescription}>
              next update
              </p>
            </div>
          </Link>

          <Link to="/teori-graf" className={styles.featureItem}>
            <div>
              <h3 className={styles.featureTitle}>Induksi Matematik</h3>
              <p className={styles.featureDescription}>
              next update
              </p>
            </div>
          </Link>

          <Link to="/teori-graf" className={styles.featureItem}>
            <div>
              <h3 className={styles.featureTitle}>Algoritma & Bilangan Bulat</h3>
              <p className={styles.featureDescription}>
              next update
              </p>
            </div>
          </Link>

          <Link to="/teori-graf" className={styles.featureItem}>
            <div>
              <h3 className={styles.featureTitle}>Kombinatorial & Peluang Diskrit</h3>
              <p className={styles.featureDescription}>
              next update
              </p>
            </div>
          </Link>

          <Link to="/teori-graf" className={styles.featureItem}>
            <div>
              <h3 className={styles.featureTitle}>Aljabar Boolean</h3>
              <p className={styles.featureDescription}>
              next update.
              </p>
            </div>
          </Link>

          <Link to="/teori-graf" className={styles.featureItem}>
            <div>
              <h3 className={styles.featureTitle}>Teori Graf</h3>
              <p className={styles.featureDescription}>
              next update
              </p>
            </div>
          </Link>

          <Link to="/teori-graf" className={styles.featureItem}>
            <div>
              <h3 className={styles.featureTitle}>Teori Tree</h3>
              <p className={styles.featureDescription}>
              next update
              </p>
            </div>
          </Link>

          <Link to="/teori-graf" className={styles.featureItem}>
            <div>
              <h3 className={styles.featureTitle}>Kompleksitas Algoritma</h3>
              <p className={styles.featureDescription}>
              next update
              </p>
            </div>
          </Link>

          <Link to="/teori-graf" className={styles.featureItem}>
            <div>
              <h3 className={styles.featureTitle}>Barisan & Deret</h3>
              <p className={styles.featureDescription}>
              next update
              </p>
            </div>
          </Link>

          <Link to="/teori-graf" className={styles.featureItem}>
            <div>
              <h3 className={styles.featureTitle}>Otomata & Teori Bahasa</h3>
              <p className={styles.featureDescription}>
              next update
              </p>
            </div>
          </Link>

          <Link to="/teori-graf" className={styles.featureItem}>
            <div>
              <h3 className={styles.featureTitle}>Fungsi Pembangkit</h3>
              <p className={styles.featureDescription}>
                next update
              </p>
            </div>
          </Link>

          <Link to="/teori-graf" className={styles.featureItem}>
            <div>
              <h3 className={styles.featureTitle}>Grup & Ring</h3>
              <p className={styles.featureDescription}>
                next update
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
