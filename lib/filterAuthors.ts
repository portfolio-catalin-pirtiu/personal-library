import { IDbAuthor } from './definitions';

export const filterAuthors = {
  ascending: () => true,
  descending(currentAuthor: IDbAuthor, nextAuthor: IDbAuthor) {
    const firstLetter = currentAuthor.first_name[0];
    const secondLetter = nextAuthor.first_name[0];

    if (firstLetter > secondLetter) return -1;
    else if (firstLetter < secondLetter) return 1;
    return 0;
  },
};
