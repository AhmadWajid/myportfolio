import React, { useState } from 'react';
import style from './Project.module.css';

const Project = ({ title, images, bulletPoints, technology, source }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="projects" className={style['project-container']}>
      {/* Image and Modal */}
      <div className={style['project-imgs']}>
        {/* Small version with arrows */}
        <div className={style['thumbnail-view']}>
          {images.length > 1 && (
            <button
              onClick={previousImage}
              className={`${style['arrow-button']} ${style['arrow-left']} ${currentImageIndex === 0 ? style['arrow-hidden'] : ''}`}
              aria-label="Previous image"
            >
              ❮
            </button>
          )}
          <img
            alt={title}
            src={images[currentImageIndex]}
            onClick={() => openModal(currentImageIndex)}
            className={style['main-image']}
          />
          {images.length > 1 && (
            <button
              onClick={nextImage}
              className={`${style['arrow-button']} ${style['arrow-right']} ${currentImageIndex === images.length - 1 ? style['arrow-hidden'] : ''}`}
              aria-label="Next image"
            >
              ❯
            </button>
          )}
          
          {/* Image indicators */}
          {images.length > 1 && (
            <div className={style['image-indicators']}>
              {images.map((_, index) => (
                <span 
                  key={index} 
                  className={`${style['indicator']} ${index === currentImageIndex ? style['active-indicator'] : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                ></span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={style['modal']} onClick={closeModal}>
          <div className={style['modal-content']} onClick={(e) => e.stopPropagation()}>
            <img
              src={images[currentImageIndex]}
              alt="Fullscreen View"
              className={style['fullscreen-image']}
            />
            <div className={style['modal-controls']}>
              <button
                onClick={previousImage}
                className={`${style['arrow-button']} ${style['modal-arrow']} ${style['modal-arrow-left']} ${currentImageIndex === 0 ? style['arrow-hidden'] : ''}`}
                aria-label="Previous image"
              >
                ❮
              </button>
              <button
                onClick={nextImage}
                className={`${style['arrow-button']} ${style['modal-arrow']} ${style['modal-arrow-right']} ${currentImageIndex === images.length - 1 ? style['arrow-hidden'] : ''}`}
                aria-label="Next image"
              >
                ❯
              </button>
            </div>
            <div className={style['image-counter']}>
              {currentImageIndex + 1} / {images.length}
            </div>
            <button onClick={closeModal} className={style['close-button']}>
              <span aria-hidden="true">×</span>
              <span className={style['sr-only']}>Close</span>
            </button>
          </div>
        </div>
      )}

      {/* Project Data */}
      <div className={style['project-data']}>
        <div className={style['project-info']}>
          <p className={style['project-title']}>{title}</p>
          <div className={style['project-bullet']}>
            <ul>
              {bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={style['tech']}>
          <div className={style['tech-images']}>
            {technology.map((picture, index) => (
              <img key={index} src={picture} alt={`Technology ${index + 1}`} />
            ))}
          </div>
          <div className={style['button-source']}>
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className={style['button-link']}
            >
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
