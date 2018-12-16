import Card from './Card';
import Keeper from './Keeper';

import basicCards from './basic';

export default [...basicCards];

export const dummyCard = new Card({ title: 'Dummy Card' }, true);

export { Card, Keeper, basicCards };
