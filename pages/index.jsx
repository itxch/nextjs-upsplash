import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Masonary from '../components/masonary.jsx';

import { getAllImageInfo } from '../lib/masonary';

export async function getStaticProps() {
  const allImageInfo = await getAllImageInfo();
  return {
    props: {
      ...allImageInfo,
    },
  };
}
export default function Home({ allImageData, imageDirectory }) {
  return (
    <>
      <h1>{imageDirectory}</h1>
      <Masonary allImageInfo={allImageData} />
    </>
  );
}
