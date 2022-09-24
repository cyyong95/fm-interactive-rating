import styles from './RatingStar.module.css';
import { IRatingStar } from '.';

const RatingStar =
  (
    {
      rating,
      handleOnRatingClick
    }: {
      rating: IRatingStar,
      handleOnRatingClick: React.MouseEventHandler
    }) => {
    return (
      <li
        className={
          rating.isSelected ?
            styles.cardRatingValuesIsSelected
            : styles.cardRatingValuesNotSelected
        }
        onClick={handleOnRatingClick}>
        {rating.value}
      </li>
    );
  }

export default RatingStar;