import { IDbAuthor } from '../definitions';

export class AuthorsSorter {
  ascending = (currAuthor: IDbAuthor, nextAuthor: IDbAuthor) => {
    if (
      this.isCurrentAuthorBeforeTheNext(
        currAuthor.first_name,
        nextAuthor.first_name
      )
    ) {
      return -1;
    } else return 1;
  };

  descending = (currAuthor: IDbAuthor, nextAuthor: IDbAuthor) => {
    if (
      this.isCurrentAuthorBeforeTheNext(
        currAuthor.first_name,
        nextAuthor.first_name
      )
    ) {
      return 1;
    } else return -1;
  };

  isCurrentAuthorBeforeTheNext = (
    currAuthorFirstName: string,
    nextAuthorFirstName: string
  ): boolean => {
    return currAuthorFirstName <= nextAuthorFirstName;
  };
}
