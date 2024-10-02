import { useState } from "react";

import styles from './styles.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className={styles.hello}>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};
