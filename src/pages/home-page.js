import React from 'react';
import BookList from '../components/book-list';
const HomePage = () => {
  const books = [
    {
      id: 1,
      title: 'Production-ready Microcervices',
      author: 'Susan J. Flower',
    },
    {
      id: 2,
      title: 'Release It',
      author: 'Michael T. Nighart',
    },
  ];
  return <BookList books={books} />;
};
export default HomePage;
