import { Book } from "./book.js";
import { Member } from "./member.js";

export class Library {
  constructor() {
    this.books = new Map();
    this.members = new Map();
    this.curBookId = 0;
    this.curMemberId = 0;
  }

  addBook(title, author) {
    if (!title || !author) throw new Error("field is empty");
    const book = new Book(++this.curBookId, title, author);
    this.books.set(book.id, book);
    return { status: "Success", data: book };
  }

  removeBook(bookId) {
    const book = this.books.get(bookId);
    if (!book) throw new Error("Book not found");
    if (!book.isAvailable) throw new Error("book is not available");
    this.books.delete(book.id);
    return { status: "Success", data: book };
  }

  registerMember(name) {
    if (!name) throw new Error("field is empty");
    const member = new Member(++this.curMemberId, name);
    this.members.set(member.id, member);
    return { status: "Success", data: member };
  }

  borrowBook(memberId, bookId) {
    const member = this.members.get(memberId);
    if (!member) throw new Error("member not found");
    const book = this.books.get(bookId);
    if (!book) throw new Error("Book not found");
    if (!book.isAvailable) throw new Error("book is not available");

    book.isAvailable = false;
    member.bookList.add(book.id);
    return { status: "Success", data: member };
  }

  returnBook(memberId, bookId) {
    const member = this.members.get(memberId);
    if (!member) throw new Error("member not found");
    const book = this.books.get(bookId);
    if (!book) throw new Error("Book not found");
    if (!book.isAvailable) throw new Error("book is not available");

    book.isAvailable = true;
    member.bookList.delete(book.id);
    return { status: "Success", data: member };
  }

  SearchByBook(str) {
    const t = (str ?? "").toLowerCase();
    return [...this.books.values()].filter(
      (book) =>
        book.title.toLowerCase().includes(t) ||
        book.author.toLowerCase().includes(t)
    );
  }
}
