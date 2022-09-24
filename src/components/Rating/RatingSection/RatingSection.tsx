import styles from './RatingSection.module.css';
import RatingStar, { IRatingStar } from './RatingStar';

const RatingSection = (
  { ratingSelections, setRatingSelections }:
    { ratingSelections: IRatingStar[], setRatingSelections: React.Dispatch<React.SetStateAction<IRatingStar[]>> }) => {

  const onChangeSelected = (id: number, isSelected: boolean) => {
    if (isSelected) {
      return;
    }

    const updatedRatingSelection = ratingSelections.map(rating => {
      rating.isSelected = false;
      if (rating.id === id) {
        rating.isSelected = true;
      }
      return rating;
    });

    setRatingSelections(updatedRatingSelection);
  };

  return (
    <ul className={styles.cardRatingSelection}>
      {ratingSelections.map((rating) => (
        <RatingStar
          key={`cardRatingSelection_${rating.id}`}
          rating={rating}
          handleOnRatingClick={() => onChangeSelected(rating.id, rating.isSelected)} />
      ))}
    </ul>
  );
}

export default RatingSection;