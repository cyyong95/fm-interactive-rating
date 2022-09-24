import styles from './Rating.module.css';
import iconStar from './images/icon-star.svg';
import iconThankYou from './images/illustration-thank-you.svg';
import RatingSection from './RatingSection';
import { useState } from 'react';
import { IRatingStar } from './RatingSection/RatingStar';
import { ratings } from '.';

const Rating = () => {

  const [ratingSelections, setRatingSelections] = useState<IRatingStar[]>(ratings);

  const [hasSubmit, setHasSubmit] = useState<boolean>(false);

  const handleOnSubmit = () => {
    setHasSubmit(e => !e);

    if (hasSubmit) {
      setRatingSelections(ratingSelections.map(x => (
        {
          id: x.id,
          value: x.value,
          isSelected: x.id === 5 ? true : false
        }
      )));
    }
  };

  return (
    <div className={styles.card}>
      {hasSubmit ?
        <>
          <img className={styles.iconThankYou} src={iconThankYou} alt="Thank you icon" />
          <p
            className={styles.ratingResult}
            data-testid="ratingResult">
            You have selected {ratingSelections.find(rating => rating.isSelected)?.value ?? 0} out of 5
          </p>
          <p className={styles.votedTitle}>Thank you!</p>
          <p className={styles.votedDescription}>
            We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch
          </p>
          <button className={styles.cardButton} onClick={handleOnSubmit}>Back</button>
        </>
        : <>
          <img className={styles.iconStar} src={iconStar} alt="Star icon" />
          <h2 className={styles.cardTitle}>How did we do?</h2>
          <p className={styles.cardFeedback}>
            Please let us know how we did with your
            support request. All feedback is appreciated
            to help us improve our offering!
          </p>
          <RatingSection ratingSelections={ratingSelections} setRatingSelections={setRatingSelections} />
          <button className={styles.cardButton} onClick={handleOnSubmit}>Submit</button>
        </>
      }
    </div>
  );
};

export default Rating;