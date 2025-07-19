import React from 'react';

const GeometricBackground = () => {
  return (
    // A container for the background layers. It will be positioned behind other content.
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* The Animated Geometric Background Layers */}
      <div 
        className="absolute inset-0 animate-shape-1" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 25% 100%)', backgroundColor: '#d1d5db' }}>
      </div>
      <div 
        className="absolute inset-0 animate-shape-2" 
        style={{ clipPath: 'polygon(22% 0, 100% 0, 100% 100%, -2% 100%)', backgroundColor: '#4b5563' }}>
      </div>
      <div 
        className="absolute inset-0 animate-shape-3" 
        style={{ clipPath: 'polygon(47% 0, 100% 0, 100% 55%, -5% 100%)', backgroundColor: '#374151' }}>
      </div>
    </div>
  );
};

export default GeometricBackground;