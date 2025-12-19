export class Member {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.bookList = new Set();
    
  }
}
