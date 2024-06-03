import { IDbAuthor } from '../definitions';

export default class AuthorsSort {
  ascending(currentAuthor: IDbAuthor, nextAuthor: IDbAuthor) {
    if (
      this.isFirstLetterLowerThanTheSecond(
        currentAuthor.first_name,
        nextAuthor.first_name
      )
    ) {
      return -1;
    } else if (
      !this.isFirstLetterLowerThanTheSecond(
        currentAuthor.first_name,
        nextAuthor.first_name
      )
    ) {
      return 1;
    } else return 0;
  }

  descending(currentAuthor: IDbAuthor, nextAuthor: IDbAuthor) {
    if (
      this.isFirstLetterLowerThanTheSecond(
        currentAuthor.first_name,
        nextAuthor.first_name
      )
    ) {
      return 1;
    } else if (
      !this.isFirstLetterLowerThanTheSecond(
        currentAuthor.first_name,
        nextAuthor.first_name
      )
    ) {
      return -1;
    } else return 0;
  }

  isFirstLetterLowerThanTheSecond(word1: string, word2: string) {
    const { firstLetter, secondLetter } =
      this.returnFirstLetterFromBothWordsToLowercase(word1, word2);
    return firstLetter < secondLetter;
  }

  returnFirstLetterFromBothWordsToLowercase(
    word1: string,
    word2: string
  ): { firstLetter: string; secondLetter: string } {
    const firstLetter = this.returnFirstLetterToLowercase(word1);
    const secondLetter = this.returnFirstLetterToLowercase(word2);
    return { firstLetter, secondLetter };
  }

  returnFirstLetterToLowercase(word: string): string {
    return word[0].toLowerCase();
  }
}
