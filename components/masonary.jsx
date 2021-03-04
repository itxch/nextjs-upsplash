import Image from 'next/image';
import styles from './masonary.module.css';
import MasonaryItem from './masonaryItem';

//Acts as the parent component for all the masonaryItems - used to loop through allImageInfo
export default function Masonary({ allImageInfo }) {
  return (
    <main className={styles.grid}>
      {allImageInfo.map((singleImageInfo) => {
        return (
          <MasonaryItem
            key={singleImageInfo.path}
            path={singleImageInfo.path}
            height={singleImageInfo.height}
            width={singleImageInfo.width}
          />
        );
      })}
    </main>
  );
}
