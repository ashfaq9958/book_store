import { lazy } from "react";

const BookList = lazy(() => import("../BookList/BookList.jsx"));
const EditBook = lazy(() => import("../EditBook/EditBooks.jsx"));
const AddBook = lazy(() => import("../AddBooks/AddBooks.jsx"));
const NotFound = lazy(() => import("../NotFound/NotFound.jsx"));

export { BookList, EditBook, AddBook, NotFound };
