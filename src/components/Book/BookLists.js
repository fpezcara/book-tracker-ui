import React, { useState } from "react";
import { useParams } from "react-router-dom";

const BookLists = () => {
  const [nowReading, setNowReading] = useState([]);
  const [alreadyFinished, setAlreadyFinished] = useState([]);
  const [bookWishlist, setBookWishlist] = useState([]);

  const params = useParams();
  console.log(params);

  // hacer un switch para si elige tal, que se me agregue a ese estado. Fijarme donde agregar estos.  Tal vez puedo agregarlo directamente al react router dom
  return <div>Estoy en book list</div>;
};

export default BookLists;
