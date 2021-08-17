import React from 'react';

interface Attr {
    x: number;
    y: number;
    w: number;
    h: number;
    deg: number;
    opacity: number;
}

interface Props {
    attr: Attr
    id: string
}

const Container: React.FC<Props> = (props) => {
  const {children, attr, id} = props;
  const {x , y , w , h, deg, opacity} = attr

  const styles = {
      width: w || 0,
      height: h || 0,
      left: x || 0,
      top: y ||0 ,
      transform: `rotate(${deg || 0}deg)`,
      opacity: opacity || 1,
  }
  
  return <div style={styles} className="absolute" data-id={id}>
      {children}
  </div>;
};

export default Container;