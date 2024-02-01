import { Link } from "react-router-dom";

const Card = ({ book }) => {
  //   console.log(book);

  return (
    <div className="card shadow rounded p-2">
      <img className="rounded" src={book.image} alt={book.title} />

      <div className="card-body">
        <h4 className="fw-bold">{book.title}</h4>
        <h5 className="text-secondary">{book.author}</h5>
      </div>

      <Link to={`/ürün/${book.id}`} className="btn btn-primary w-100">
        Detayları Gör
      </Link>
    </div>
  );
};

export default Card;
