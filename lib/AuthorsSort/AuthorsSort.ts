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
// export class AuthorsSort {
//   #authorsSortUtils: AuthorsSortUtils;

//   constructor(authorsSortUtils: AuthorsSortUtils) {
//     this.#authorsSortUtils = authorsSortUtils;
//   }

//   ascending(currentAuthor: IDbAuthor, nextAuthor: IDbAuthor) {
//     console.log('currentAuthor', currentAuthor.first_name);
//     console.log('nextAuthor', nextAuthor.first_name);
//     const predicate = this.#authorsSortUtils.isFirstLetterLowerThanTheSecond(
//       currentAuthor.first_name,
//       nextAuthor.first_name
//     );
//     if (predicate) {
//       return -1;
//     } else if (
//       !this.#authorsSortUtils.isFirstLetterLowerThanTheSecond(
//         currentAuthor.first_name,
//         nextAuthor.first_name
//       )
//     ) {
//       return 1;
//     } else return 0;
//   }

//   descending(currentAuthor: IDbAuthor, nextAuthor: IDbAuthor) {
//     if (
//       this.#authorsSortUtils.isFirstLetterLowerThanTheSecond(
//         currentAuthor.first_name,
//         nextAuthor.first_name
//       )
//     ) {
//       return 1;
//     } else if (
//       !this.#authorsSortUtils.isFirstLetterLowerThanTheSecond(
//         currentAuthor.first_name,
//         nextAuthor.first_name
//       )
//     ) {
//       return -1;
//     } else return 0;
//   }
// }

// export class AuthorsSortUtils {
//   isFirstLetterLowerThanTheSecond(word1: string, word2: string) {
//     const { firstLetter, secondLetter } =
//       this.returnFirstLetterFromBothWordsToLowercase(word1, word2);
//     return firstLetter < secondLetter;
//   }

//   returnFirstLetterFromBothWordsToLowercase(
//     word1: string,
//     word2: string
//   ): { firstLetter: string; secondLetter: string } {
//     const firstLetter = this.returnFirstLetterToLowercase(word1);
//     const secondLetter = this.returnFirstLetterToLowercase(word2);
//     return { firstLetter, secondLetter };
//   }

//   returnFirstLetterToLowercase(word: string): string {
//     return word[0].toLowerCase();
//   }
// }