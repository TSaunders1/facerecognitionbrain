/* eslint-disable react/prop-types */
import React from 'react';
import './FaceRecognition.css';

// eslint-disable-next-line react/prop-types
const FaceRecognition = ({ imageUrl, box }) => (
  <div className="center ma">
    <div className="absolute mt2">
      <img id="inputimage" alt="" src={imageUrl} width="500px" height="auto" />
      <div
        className="bounding_box"
        style={{
          top: box?.topRow, right: box?.rightCol, bottom: box?.bottomRow, left: box?.leftCol,
        }}
      />
    </div>
  </div>
);
export default FaceRecognition;
