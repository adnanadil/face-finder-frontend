import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        {box.map((eachBox, i) => <div key = {i} className='bounding-box' style={{top: eachBox.topRow, right: eachBox.rightCol, bottom: eachBox.bottomRow, left: eachBox.leftCol}}></div>)}
      </div>
    </div>
  );
}

export default FaceRecognition;

