import React from 'react';

const useKeydown = (key, callback) => {
  React.useEffect(() => {
    const dismissAllToasts = (e) => {
      if (e.code === key) {
        callback();
      }
    };

    window.addEventListener('keydown', dismissAllToasts);

    return () => window.removeEventListener('kewdown', dismissAllToasts);
  }, [key, callback]);
};

export default useKeydown;
