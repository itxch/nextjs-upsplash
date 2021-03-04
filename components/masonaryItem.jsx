import Image from 'next/image';
import styles from './masonaryItem.module.css';

export default function MasonaryItem({ path, height, width }) {
  return (
    <figure className={styles.masonaryItemFigure}>
      <Image
        src={`/images/${path}`}
        layout="responsive"
        height={height}
        width={width}
        className={styles.masonaryItemImage}
      />
    </figure>
  );
}
