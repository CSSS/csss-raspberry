import React, { useState, useEffect } from 'react';

export const ModalAlert = ({ children, color }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {visible && (
        <div
          className={`w-max h-max px-4 py-2 bg-opacity-80 ${color} fixed alertClass fadeUpAnimation z-20 rounded-md`}
        >
          <div>{children}</div>
        </div>
      )}
    </>
  );
};
