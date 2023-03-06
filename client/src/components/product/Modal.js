import React, { useRef, useEffect } from 'react';

export default function Modal({ image, onClose }) {
  const imageRef = useRef(null);

  useEffect(() => {
    const zoomIn = (event) => {
      const imageElement = imageRef.current;
      const { left, top, width, height } = imageElement.getBoundingClientRect();
      const x = (event.clientX - left) / width;
      const y = (event.clientY - top) / height;
      imageElement.style.transform = `scale(2) translate(${-x * 100}%, ${-y * 100}%)`;
    };

    const zoomOut = () => {
      imageRef.current.style.transform = 'scale(1) translate(0, 0)';
    };

    window.addEventListener('mousemove', zoomIn);
    window.addEventListener('mouseout', zoomOut);

    return () => {
      window.removeEventListener('mousemove', zoomIn);
      window.removeEventListener('mouseout', zoomOut);
    };
  }, []);

  return (
    <div className="modal" onClick={onClose}>
      <img ref={imageRef} src={image.src} alt={image.alt} />
    </div>
  );
}