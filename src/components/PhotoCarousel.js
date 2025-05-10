import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// Auto-import any file that starts with “photo”
function importAll(r) {
  return r.keys().map(r);
}
const photos = importAll(
  require.context('../assets/images', false, /^\.\/photo.*\.(png|jpe?g|webp)$/)
);

export default function PhotoCarousel() {
  return (
    <div className="container mb-5">
      <Carousel fade pause="hover">
        {photos.map((src, idx) => (
          <Carousel.Item key={idx}>
            <img className="d-block w-100 rounded" src={src} alt={`slide ${idx}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
