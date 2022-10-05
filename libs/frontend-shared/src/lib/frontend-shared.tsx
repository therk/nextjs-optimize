import styles from './frontend-shared.module.css';

/* eslint-disable-next-line */
export interface FrontendSharedProps {}

export function FrontendShared(props: FrontendSharedProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FrontendShared!</h1>
    </div>
  );
}

export default FrontendShared;
