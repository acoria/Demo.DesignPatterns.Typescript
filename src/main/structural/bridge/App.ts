import Analog from "./environments/Analog";
import Digital from "./environments/Digital";
import Audiobook from "./mediums/Audiobook";
import Book from "./mediums/Book";


const digitalBook = new Book(new Digital());
digitalBook.getCover();
digitalBook.goToPosition(5);

const analogAudiobook = new Audiobook(new Analog());
analogAudiobook.getCover();
analogAudiobook.goToPosition(10);