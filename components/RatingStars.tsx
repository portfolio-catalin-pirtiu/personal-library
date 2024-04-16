import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import { colors } from '../lib/colors';

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

const Wrapper = styled.div`
  display: flex;
`;

function Star({
  selected = false,
  index = 0,
  handleChangeRatingValue = () => {},
  handleChangeRatingStars = () => {},
}: IStar) {
  return (
    <FaStar
      cursor="pointer"
      size='19'
      color={selected ? `${colors.blue}` : 'grey'}
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
  return (
    <Wrapper>
      {Array.from({ length: totalStars }).map((n, i) => (
        <Star
          key={i}
          index={i + 1}
          selected={rating > i}
          handleChangeRatingValue={onChangeRatingValue}
          handleChangeRatingStars={onChangeRatingStars}
        />
      ))}
      <input type="hidden" name="stars-value" value={rating} />
    </Wrapper>
  );
}
