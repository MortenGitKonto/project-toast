import React from 'react';

export const ToastsContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const dismissToast = (id) => {
    const prevToasts = [...toasts];

    const toastIndex = prevToasts.findIndex((t) => t.id === id);

    if (toastIndex !== -1) {
      prevToasts.splice(toastIndex, 1);

      setToasts(prevToasts);
    }
  };

  const createToast = (message, variant) => {
    const prevToasts = [...toasts];

    const newToast = {
      variant,
      message,
      id: crypto.randomUUID(),
    };

    prevToasts.push(newToast);
    setToasts(prevToasts);
  };

  const value = {
    toasts,
    createToast,
    dismissToast,
  };

  return (
    <ToastsContext.Provider value={value}>{children}</ToastsContext.Provider>
  );
}

export default ToastProvider;
