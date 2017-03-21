import React from 'react';
import Collapsible from 'react-collapsible';

const EpisodeTrack = (props) => {
  console.log(props);
  let title = <h4>No. {props.no} {props.name}</h4>;
  return (
    <Collapsible trigger={title}>
      <p>{props.duration}</p>
      <p>{props.description}</p>
    </Collapsible>
  );
};

export default EpisodeTrack;
