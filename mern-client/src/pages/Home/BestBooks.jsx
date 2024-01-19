import { useEffect, useState } from "react";
import BestBookCard from "../../components/BestBookCard";

const BestBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch("https://book-app-api-lime.vercel.app/first-3-books").then(res => res.json()).then(data => setBooks(data));
    },[])

  return (
    <div>
      <BestBookCard books={books} headline="Must Read books" />
      {/*card section*/}
      

      
    </div>
  )
}

export default BestBooks
