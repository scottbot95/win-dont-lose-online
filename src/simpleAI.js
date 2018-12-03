import { store } from './redux';
import { endTurn, playCard, drawCard } from './redux/actions';
import { GameStateEnum } from './redux/types';

let lastTurn;

store.subscribe(() => {
  let state = store.getState();
  if (state.turn === lastTurn) return;
  lastTurn = state.turn;

  if (state.status !== GameStateEnum.PLAYING) return;
  if (state.turn !== state.players[0].name) {
    setTimeout(() => {
      store.dispatch(drawCard());
      state = store.getState();
      const player = state.players.find(p => p.name === state.turn);
      const choice = Math.floor(Math.random() * player.hand.length);
      const card = player.hand[choice];
      console.log(`AI ${player.name} playing card:`, card);
      store.dispatch(playCard(card));
      store.dispatch(endTurn());
    }, 1000);
  }
});
