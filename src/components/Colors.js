import React from 'react';
import { ColorExtractor } from 'react-color-extractor';

const Colors = ({image, colors, handleColors}) => {
  return (
    <div>
        <ColorExtractor rgb getColors={handleColors}>
          <img
            src={image}
            style={{display: 'none'}}
          />
        </ColorExtractor>
      </div>
  );
}

export default Colors;