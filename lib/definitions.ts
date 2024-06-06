import { Dispatch, SetStateAction } from 'react';
import { booksFilterSelection } from './constants';

export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface IAuthor {
  first_name: string;
  last_name: string;
}

export interface IDbAuthor extends IAuthor {
  author_id: string;
}

export interface IBook {
  author_id: string;
  title: string;
  read: boolean;
  in_progress: boolean;
  rating?: number;
  stop_reading?: string;
  start_reading?: string;
  publisher?: string;
  edition?: string;
  notes?: string;
}

export interface IDbBook extends IBook {
  book_id: string;
}

export interface IBookWithAuthor extends IDbBook, IAuthor {}

export interface IUpdateBookReadingStatusDatabase {
  id: string;
  status: 'start' | 'stop';
  timestamp: string;
}

export interface IOption {
  name: string;
  value: ISelection;
}

export type ISelection = (typeof booksFilterSelection)[number];

export interface ISelect {
  options: IOption[];
  handleChange: Dispatch<SetStateAction<ISelection>>;
}

export type AuthorFilterOption = 'ascending' | 'descending';
