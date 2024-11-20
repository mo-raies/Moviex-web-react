import { Link } from "react-router-dom";




const Card = ({ movies, title, posterPath, releaseDate, overview, vote_average, id }) => {






  return (
    <>
      <div className="card card-custom" style={{ width: '250px', height: 'auto', }} >

        <Link to={`/movie/${id}`}>  <img
          src={posterPath}
          className=" card-img card-img-top " alt='...' /> </Link>

        <div className="card-body">
          <h5 className="card-title " style={{ minHeight: "40px", }}> {title}</h5>
          <p className="vote-average"> <span className="vote"> Rating : {vote_average} </span></p>
          <p> { }</p>
          <p className="card-text"> </p>
          <a href="#" className="btn2 btn-primary"> Release Date : {releaseDate}</a>
        </div>
      </div>

    </>
  )
}
export default Card;

