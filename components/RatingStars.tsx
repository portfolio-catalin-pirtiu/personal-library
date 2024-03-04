import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

interface IRatingStars {
  totalStars?: number;
  rating: number;
  onChangeRatingValue?: (field: string, rating: number) => void;
  onChangeRatingStars?: (rating: number) => void;
}

interface IStar {
  selected: boolean;
  index: number;
  handleChangeRatingValue?: (field: string, rating: number) => void;
  handleChangeRatingStars?: (rating: number) => void;
}

function Star({
  selected = false,
  index = 0,
  handleChangeRatingValue = () => {},
  handleChangeRatingStars = () => {},
}: IStar) {
  return (
    <FaStar
      cursor="pointer"
      color={selected ? 'green' : 'grey'}
      onClick={() => {
        handleChangeRatingValue('rating', index);
        handleChangeRatingStars(index);
      }}
    />
  );
}

export default function RatingStars({
  totalStars = 5,
  rating = 0,
  onChangeRatingValue = () => {},
  onChangeRatingStars = () => {},
}: IRatingStars) {
  return Array.from({ length: totalStars }).map((n, i) => (
    <Star
      key={i}
      index={i + 1}
      selected={rating > i}
      handleChangeRatingValue={onChangeRatingValue}
      handleChangeRatingStars={onChangeRatingStars}
    />
  ));
}
