export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface Author {
  id: string;
  first_name: string;
  last_name: string;
}

export interface Book {
  id: string;
  author_id: string;
  title: string;
  read: boolean;
  startReading: string;
  stopReading: string;
  inProgress: boolean;
  rating: number;
}
