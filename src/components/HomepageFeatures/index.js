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
              Rangkaian pikiran yang runtut, itulah kekuatan logika
              </p>
            </div>
          </Link>

          <Link to="/docs/category/himpunan" className={styles.featureItem}>
            <div>
              <h3 className={styles.featureTitle}>Teori himpunan</h3>
              <p className={styles.featureDescription}>
              Kelompokkan, bedakan, dan temukan makna dalam setiap elemen
              </p>
            </div>
          </Link>

          <Link to="/docs/category/matrix-relasi--fungsi" className={styles.featureItem}>
            <div>
              <h3 className={styles.featureTitle}>Matrix, Relasi & Fungsi</h3>
              <p className={styles.featureDescription}>
              Susun datanya, hubungkan elemennya, temukan polanya
              </p>
            </div>
          </Link>

          <Link to="/docs/category/matrix-relasi--fungsi" className={styles.featureItem}>
            <div>
              <h3 className={styles.featureTitle}>Matrix, Relasi & Fungsi</h3>
              <p className={styles.featureDescription}>
              Susun datanya, hubungkan elemennya, temukan polanya
              </p>
            </div>
          </Link>

           <Link to="/docs/category/matrix-relasi--fungsi" className={styles.featureItem}>
            <div>
              <h3 className={styles.featureTitle}>Matrix, Relasi & Fungsi</h3>
              <p className={styles.featureDescription}>
              Susun datanya, hubungkan elemennya, temukan polafadfdafadanya
              </p>
            </div>
          </Link>

          <Link to="/docs/category/matrix-relasi--fungsi" className={styles.featureItem}>
            <div>
              <h3 className={styles.featureTitle}>Matrix, Relasi & Fungsi</h3>
              <p className={styles.featureDescription}>
              Susun datanya, hubungkan elemennya, temukan polanya
              </p>
            </div>
          </Link>
          
        </div>
      </div>
    </section>
  );
}
