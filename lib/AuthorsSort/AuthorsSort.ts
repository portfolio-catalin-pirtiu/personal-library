import { IDbAuthor } from '../definitions';

export class AuthorsSorter {
  #authors: IDbAuthor[] = [];

  constructor(authors: IDbAuthor[]) {
    this.#authors = authors;
  }

  ascending = (currAuthor: IDbAuthor, nextAuth: IDbAuthor) => {
    if (
      this.toLowerCase(currAuthor.first_name) <=
      this.toLowerCase(nextAuth.first_name)
    ) {
      return -1;
    } else return 1;
  }

  descending = (currAuthor: IDbAuthor, nextAuthor: IDbAuthor) => {
    if (this.toLowerCase(currAuthor.first_name) <= this.toLowerCase(nextAuthor.first_name)) {
      return 1;
    } else return -1;
  }

  toLowerCase = (text: string) => {
    return text.toLowerCase();
  }

}