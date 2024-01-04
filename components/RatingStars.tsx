import { FaStar } from 'react-icons/fa';

interface IRatingStars {
  stars: number;
  rating: number;
}

function Star({ selected }: { selected: boolean }) {
  return <FaStar cursor="pointer" color={selected ? 'green' : 'grey'} />;
}

export default function RatingStars({ stars = 5, rating = 0 }: IRatingStars) {
  return Array.from({ length: stars }).map((n, i) => (
    <Star key={i} selected={rating > i} />
  ));
}
