import React from 'react';

function BrodiLogo({
  label="brodi",
  fontSize = 14,
  fontWeight = 700,
  color = '#ffffff',
  width = 'auto',
  height = '3.5rem',
  className = '',
}) {
  // Generate a unique ID for the font definition to avoid conflicts
  const fontId = `nunito-${fontWeight}-${Date.now()}`;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${label.length * fontSize * 0.6} ${fontSize + 10}`}
      className={className}
    >
      {/* Embed Nunito font directly in SVG */}
      <defs>
        <style type="text/css">
          {`
            @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@${fontWeight}&display=swap');
          `}
        </style>
        {/* Alternative: Embed font-face directly */}
        <style type="text/css">
          {`
            @font-face {
              font-family: 'Nunito-Embedded';
              font-style: normal;
              font-weight: ${fontWeight};
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/nunito/v26/XRXV3I6Li01BKofINeaBTMnFcQ.woff2) format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
          `}
        </style>
      </defs>
      
      {/* Render the text */}
      <text
        x="0"
        y={fontSize}
        fontFamily="'Nunito', 'Nunito-Embedded', sans-serif"
        fontSize={fontSize}
        fontWeight={fontWeight}
        fill={color}
        style={{ 
          whiteSpace: 'pre',
          fontFeatureSettings: 'normal',
          fontVariant: 'normal'
        }}
      >
        {label}
      </text>
    </svg>
  );
};

export default BrodiLogo;
