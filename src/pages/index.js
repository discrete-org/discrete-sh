// src/pages/index.js

import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.terminalWindow}>
          <div className={styles.terminalHeader}>
            <span className={styles.dot} style={{backgroundColor: '#ff5f56'}}></span>
            <span className={styles.dot} style={{backgroundColor: '#ffbd2e'}}></span>
            <span className={styles.dot} style={{backgroundColor: '#27c93f'}}></span>
          </div>
          <div className={styles.terminalBody}>
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title || "Matematika Diskrit"}
            </Heading>
            <p className={styles.heroSubtitle}>
              {siteConfig.tagline || "Fondasi Logika untuk Software Engineer."}
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/a_intro"> {/* Pastikan URL to-nya mengarah ke intro.mdx yang tadi kita buat */}
                $ ./Mulai_Belajar.sh
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Logika & Komputasi | ${siteConfig.title}`}
      description="Catatan perjalanan belajar Matematika Diskrit dan Logika Komputasi.">
      <main className={styles.mainContainer}>
        <HomepageHeader />
      </main>
    </Layout>
  );
}