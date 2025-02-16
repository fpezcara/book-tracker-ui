import useUniqueBook from "./useUniqueBook.js";
import bookList from "../tests/mocks/bookList";

const bookNotInBookList = {
  title: "Penguin Readers Level 1: Little Women (ELT Graded Reader)",
  subtitle: "Abridged Edition",
  authors: ["Louisa May Alcott"],
  publisher: "Penguin UK",
  publishedDate: "2020-07-30",
  description:
    "Penguin Readers is an ELT graded reader series. Please note that the eBook edition does NOT include access to the audio edition and digital book. Written for learners of English as a foreign language, each title includes carefully adapted text, new illustrations and language learning exercises. Titles include popular classics, exciting contemporary fiction, and thought-provoking non-fiction, introducing language learners to bestselling authors and compelling content. The eight levels of Penguin Readers follow the Common European Framework of Reference for language learning (CEFR). Exercises at the back of each Reader help language learners to practise grammar, vocabulary, and key exam skills. Before, during and after-reading questions test readers' story comprehension and develop vocabulary. Little Women, a Level 1 Reader, is A1 in the CEFR framework. Short sentences contain a maximum of two clauses, introducing the past simple tense and some simple modals, adverbs and gerunds. Illustrations support the text throughout, and many titles at this level are graphic novels. Little Women is the story of a poor American family in the American Civil War. The four sisters, Beth, Jo, Meg and Amy are very different. But together they work hard and help their mother and father. Sometimes their lives are very happy, and sometimes they are very sad. But the family's love always helps them. Visit the Penguin Readers website Register to access online resources including tests, worksheets and answer keys. Exclusively with the print edition, readers can unlock a digital book and audio edition (not available with the eBook).",
  industryIdentifiers: [
    {
      type: "ISBN_13",
      identifier: "9780241482919",
    },
    {
      type: "ISBN_10",
      identifier: "0241482917",
    },
  ],
  readingModes: {
    text: true,
    image: true,
  },
  pageCount: 67,
  printType: "BOOK",
  categories: ["Young Adult Fiction"],
  maturityRating: "NOT_MATURE",
  allowAnonLogging: true,
  contentVersion: "1.4.4.0.preview.3",
  panelizationSummary: {
    containsEpubBubbles: false,
    containsImageBubbles: false,
  },
  imageLinks: {
    smallThumbnail:
      "http://books.google.com/books/content?id=xfHiDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    thumbnail:
      "http://books.google.com/books/content?id=xfHiDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  language: "en",
  previewLink:
    "http://books.google.co.uk/books?id=xfHiDwAAQBAJ&printsec=frontcover&dq=intitle:little+women&hl=&cd=5&source=gbs_api",
  infoLink:
    "https://play.google.com/store/books/details?id=xfHiDwAAQBAJ&source=gbs_api",
  canonicalVolumeLink:
    "https://play.google.com/store/books/details?id=xfHiDwAAQBAJ",
};
describe("useUniqueBook hook", () => {
  it("returns true when book is not in booklist", () => {
    const result = useUniqueBook(bookList, bookList[0].books[0], "reading");

    expect(result).toBeTruthy();
  });

  it("returns false when book is in booklist", () => {
    const result = useUniqueBook(bookList, bookNotInBookList, "reading");

    expect(result).toBeFalsy();
  });
});
