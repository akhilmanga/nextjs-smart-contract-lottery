import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";




export default function Home() {
  const { isWeb3Enabled, chainId } = useMoralis();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      Hello!!
    </div>
  );
}