import React from 'react';
import Collapsible from 'react-collapsible';

const EpisodeTrack = (props) => {
  let title =
  <header className="all-episodes-header">
    <ul>
      <li>
        <h4>No. {props.no} {props.name}</h4>
      </li>
      <li>
        <p>{props.duration}</p>
      </li>
      <li className="row-buttons">
        <ul>
          <li><i className="fa fa-play" aria-hidden="true"
            title="Play Episode"></i></li>
          <li><i className="fa fa-plus" aria-hidden="true"
            title="Add to Playlist"></i></li>
        </ul>
      </li>
    </ul>
  </header>;

  return (
    <Collapsible className="collapsible"
      trigger={title}>
      <p>{props.description}</p>
    </Collapsible>
  );
};

export default EpisodeTrack;
