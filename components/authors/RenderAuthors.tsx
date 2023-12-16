import styled from 'styled-components';
import useFetchAuthors from '../../lib/useFetchAuthors';

interface IRenderAuthors {
  url: string;
}

export default function RenderAuthors({ url }: IRenderAuthors) {
  const { authors } = useFetchAuthors(url);
}
