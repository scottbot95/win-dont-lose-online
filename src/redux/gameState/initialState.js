import { GameStateEnum } from './constants';

const initialState = {
  flags: GameStateEnum.PENDING,
  activePlayerId: 0
};
export default initialState;
