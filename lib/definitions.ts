export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface IAuthor {
  id: string;
  first_name: string;
  last_name: string;
}

export interface IBook {
  id: string;
  author_id: string;
  title: string;
  read: boolean;
  startReading: string;
  stopReading: string;
  inProgress: boolean;
  rating: number;
}
