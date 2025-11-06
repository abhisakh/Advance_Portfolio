import React from 'react';
import Lottie from 'lottie-react';
import aiAnimation from '../assets/lottie/ai-animation.json';

const MobileFeature = () => {
  return (
    // The class 'mobile-feature' is styled in mobile-feature.css
    <div className="mobile-feature">

      {/* 1. Lottie Animation */}
      <div className="mobile-feature-animation">
        <Lottie
          animationData={aiAnimation}
          loop={true}
          autoplay={true}
          // The style here controls the actual SVG size, set to fill its container
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* 2. Short Tagline */}
      <p className="mobile-feature-tagline">
        Physics-Driven Data Discovery
      </p>
    </div>
  );
};

export default MobileFeature;