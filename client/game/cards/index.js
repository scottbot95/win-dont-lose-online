import Card from './Card';
import Keeper from './Keeper';

import basicCards from './basic';

const allCards = [...basicCards];

export default allCards;

export const dummyCard = new Card({ title: 'Dummy Card' }, true);

export const findCardById = id => allCards.find(card => card.id === id);

export { Card, Keeper, basicCards };
