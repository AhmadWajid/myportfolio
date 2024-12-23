import React, { useEffect, useState } from 'react';
import './ScrollToTopButton.css'; // Add your styles here

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 200; // Adjust based on your layout
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        id="scrollTopButton"
        className="scroll-top-button"
        onClick={scrollToTop}
      >
        ▲
      </button>
    )
  );
};

export default ScrollToTopButton;
