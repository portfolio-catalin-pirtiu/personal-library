import { IUser, IAuthor, IBook } from './definitions';

export class User implements IUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  constructor(props: IUser) {
    this.id = props.id;
    this.first_name = props.first_name;
    this.last_name = props.last_name;
    this.email = props.email;
    this.password = props.password;
  }
}

export class Author implements IAuthor {
  first_name: string;
  last_name: string;
  constructor(props: IAuthor) {
    this.first_name = props.first_name;
    this.last_name = props.last_name;
  }
}

export class Book implements IBook {
  author_id: string;
  title: string;
  read: boolean;
  in_progress: boolean;
  rating: number;
  stop_reading?: string;
  start_reading?: string;
  publisher?: string | undefined;
  edition?: string | undefined;
  notes?: string | undefined;
  constructor(props: IBook) {
    this.author_id = props.author_id;
    this.title = props.title;
    this.read = props.read;
    this.start_reading = props.start_reading;
    this.stop_reading = props.stop_reading;
    this.in_progress = props.in_progress;
    this.rating = props.rating;
    this.publisher = props.publisher;
    this.edition = props.edition;
    this.notes = props.edition;
  }
}
