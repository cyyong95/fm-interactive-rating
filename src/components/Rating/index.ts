import Rating from './Rating';
import { IRatingStar } from './RatingSection/RatingStar';

export const ratings: IRatingStar[] = [
  {
    id: 1,
    value: 1,
    isSelected: false
  },
  {
    id: 2,
    value: 2,
    isSelected: false
  },
  {
    id: 3,
    value: 3,
    isSelected: false
  },
  {
    id: 4,
    value: 4,
    isSelected: false
  },
  {
    id: 5,
    value: 5,
    isSelected: true
  }
];

export default Rating;