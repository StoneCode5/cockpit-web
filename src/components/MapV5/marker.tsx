import React from 'react';
import './marker.less'

function Marker() {
  const texts = ['成本率＞105%', '100%≤成本率≤105%', '95%≤成本率≤100%', '成本率＜95%']
  const colors = ['#CD545C', '#F99912', '#4965D1', '#7CCBCF']
  return (
    <div className="mapMarkerContainer">
      {texts.map((text, index) => <div className="mapMarkerItem">
        <div className="mapMarkerItemColorBox" style={{backgroundColor: colors[index]}} />
        <div className="mapMarkerItemText">{text}</div>
      </div>)}
    </div>
  );
}

export default Marker;
