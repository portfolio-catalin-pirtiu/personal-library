import styled from 'styled-components';
import Button from '../../shared/Button';
import { BookFilterOption, ISelection } from '../../../lib/definitions';
import { Dispatch, SetStateAction } from 'react';

const Wrapper = styled.div``;

interface BooksFilterProps {
  bookFiltersNameAndValue: BookFilterOption[];
  filter: ISelection;
  setFilter: Dispatch<SetStateAction<ISelection>>;
}

export default function BooksFilter({}) {
  return <Wrapper></Wrapper>;
}
