import { IDbAuthor } from './definitions';

export const sortAuthors = {
  ascending(currentAuthor: IDbAuthor, nextAuthor: IDbAuthor) {
    if (
      isFirstLetterLowerThanTheSecond(
        currentAuthor.first_name,
        nextAuthor.first_name
      )
    ) {
      return -1;
    } else if (
      !isFirstLetterLowerThanTheSecond(
        currentAuthor.first_name,
        nextAuthor.first_name
      )
    ) {
      return 1;
    } else return 0;
  },

  descending(currentAuthor: IDbAuthor, nextAuthor: IDbAuthor) {
    if (
      isFirstLetterLowerThanTheSecond(
        currentAuthor.first_name,
        nextAuthor.first_name
      )
    ) {
      return 1;
    } else if (
      !isFirstLetterLowerThanTheSecond(
        currentAuthor.first_name,
        nextAuthor.first_name
      )
    ) {
      return -1;
    } else return 0;
  },
};

function isFirstLetterLowerThanTheSecond(word1: string, word2: string) {
  const { firstLetter, secondLetter } =
    returnFirstLetterFromBothWordsToLowercase(word1, word2);
  return firstLetter < secondLetter;
}

function returnFirstLetterFromBothWordsToLowercase(
  word1: string,
  word2: string
): { firstLetter: string; secondLetter: string } {
  const firstLetter = returnFirstLetterToLowercase(word1);
  const secondLetter = returnFirstLetterToLowercase(word2);
  return { firstLetter, secondLetter };
}

function returnFirstLetterToLowercase(word: string): string {
  return word[0].toLowerCase();
}
