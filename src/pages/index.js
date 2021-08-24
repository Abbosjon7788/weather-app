import Layout from "../components/Layout";
import Head from 'next/head';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/weather-icon.png" />
      </Head>
    </Layout>
  )
}
