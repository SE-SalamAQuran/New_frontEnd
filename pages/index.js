import Head from "next/head";
import styles from "../styles/Home.module.css";
import AppBar from "../components/Appbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Palestinian Estates</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#343a40" />
        <meta name="background-color" content="#888" />
        <meta
          name="description"
          content="Your number one app for real estate transactions"
        />
        <meta
          name="keywords"
          content="Real Estate, Lands, Apartments, Villas, Roofs, Sell/Buy/Rent"
        />
        <link
          type="application/json"
          rel="manifest"
          href="../public/manifest.json"
        />
      </Head>
      <AppBar></AppBar>

      <Footer />
    </div>
  );
}
