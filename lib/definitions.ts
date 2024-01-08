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
  id: string;
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
  id: string;
}
