import Head from 'next/head';
import styles from '../styles/Home.module.css'
import SearchBar from '../components/SearchBar';


export default function Home() {



  return (
    <div className={styles.container}>
      <Head>
        <title>Jammming</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBar />
    </div>
  );
}
