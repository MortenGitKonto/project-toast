import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastsContext } from '../ToastProvider/ToastProvider';

function ToastShelf({ handleDismiss }) {
  const { toasts } = React.useContext(ToastsContext);
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => {
        return (
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast
              variant={toast.variant}
              handleDismiss={handleDismiss}
              id={toast.id}
            >
              {toast.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
