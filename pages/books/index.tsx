import useFetchBooks from '../../lib/useFetchBooks';
import { booksApiUrl } from '../../lib/constants';

export default function Books() {
  const { books } = useFetchBooks(booksApiUrl);
  return <h1>Books Page</h1>;
}
