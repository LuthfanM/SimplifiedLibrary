import { Library } from "./models/library.js";

const library = new Library()
library.addBook("conan", "daisuke")
library.addBook("oshi no ko", "mesiuke")
library.addBook("one piece", "mangaka")
library.addBook("whatever", "dasiuki")
library.registerMember("luthfan")
library.registerMember("eru")

console.log(library.SearchByBook("da"))

console.log(library.borrowBook(1, 1))
console.log(library.borrowBook(1, 2))
console.log(library.borrowBook(2, 1))