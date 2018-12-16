import React from 'react';
import PropTypes from 'prop-types';

import CardList from '../cards/CardList';

/**
 * A component representing a player.
 *
 * Displays their name, current points, current keepers, and hand.
 * The hand is displayed face down unless the `me` prop is given
 */
const Player = props => {
  return (
    <div className="player" style={props.style}>
      <div className="info">
        <p className="playerName">{props.player.name}</p>
        <p className="score">{props.player.points || 0} Points</p>
      </div>
      <div style={{ transform: `rotate(${props.rotate - 90}deg)` }}>
        <CardList
          cards={props.player.hand}
          selectCard={props.playCard}
          faceDown={!props.me}
          spread
          raise={props.me}
        />
        <CardList cards={props.player.keepers} />
      </div>
    </div>
  );
};

Player.propTypes = {
  /** style object to pass along to div */
  style: PropTypes.object,
  me: PropTypes.bool,
  rotate: PropTypes.number,
  playCard: PropTypes.func
};

Player.defaultProps = {
  rotate: 90
};

export default Player;
