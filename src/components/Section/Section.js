import React, { useEffect, useRef } from 'react';
import styles from './Section.module.css';

const Section = ({ children, backgroundColor, style, floatingItems = [] }) => {
  const floatingContainerRef = useRef(null);

  useEffect(() => {
    const floatingElements = Array.from(
      floatingContainerRef.current.querySelectorAll(`.${styles['floating-item']}`)
    );

    const items = floatingElements.map((element) => {
      const speedX = Math.random() * .8 + .1; // Random horizontal speed
      const speedY = Math.random() * .8 + .1; // Random vertical speed
      const directionX = Math.random() < 0.5 ? 1 : -1; // Random initial direction
      const directionY = Math.random() < 0.5 ? 1 : -1;
      const spinSpeed = Math.random() * 0.5 + 0.2; // Random spin speed

      return {
        element,
        speedX: speedX * directionX,
        speedY: speedY * directionY,
        spinSpeed,
        positionX: parseFloat(window.getComputedStyle(element).left) || 0,
        positionY: parseFloat(window.getComputedStyle(element).top) || 0,
        rotation: 0, // Initial rotation angle
      };
    });

    const animate = () => {
      items.forEach((item) => {
        const { element, spinSpeed } = item;
        const rect = floatingContainerRef.current.getBoundingClientRect();

        // Update positions
        item.positionX += item.speedX;
        item.positionY += item.speedY;

        // Handle bouncing and dynamic spin adjustment
        if (item.positionX <= 0 || item.positionX + element.offsetWidth >= rect.width) {
          item.speedX *= -1; // Reverse horizontal direction
          item.spinSpeed = Math.random() * 0.5 + 0.2; // Adjust spin speed
        }

        if (item.positionY <= 0 || item.positionY + element.offsetHeight >= rect.height) {
          item.speedY *= -1; // Reverse vertical direction
          item.spinSpeed = Math.random() * 0.5 + 0.2; // Adjust spin speed
        }

        // Update rotation (dynamic based on direction)
        item.rotation += spinSpeed * (item.speedX > 0 ? 1 : -1);

        // Apply new position and rotation
        element.style.left = `${item.positionX}px`;
        element.style.top = `${item.positionY}px`;
        element.style.transform = `rotate(${item.rotation}deg)`;
      });

      requestAnimationFrame(animate); // Keep animating
    };

    animate();

    return () => {
      cancelAnimationFrame(animate); // Cleanup animation frame
    };
  }, []);

  return (
    <div
      className={styles["section-wrapper"]}
      style={{ backgroundColor, ...style }}
    >
      <div ref={floatingContainerRef} className={styles.background}>
        {floatingItems.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt || `Floating item ${index + 1}`}
            className={styles['floating-item']}
            style={{
              width: item.size || '100px',
              position: 'absolute',
              top: `${Math.random() * 80}%`, // Random initial position
              left: `${Math.random() * 80}%`, // Random initial position
            }}
          />
        ))}
      </div>
      {children}
    </div>
  );
};

export default Section;
