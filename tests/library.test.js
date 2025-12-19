import { Library } from "../models/library.js";

test("Add Book", () => {
  const library = new Library();
  const data = library.addBook("conan", "daisuke");
  expect(data.data.id).toBe(1)
  expect(data.status).toBe("Success")
});
