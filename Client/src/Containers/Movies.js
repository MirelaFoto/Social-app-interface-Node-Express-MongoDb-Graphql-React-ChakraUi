
import { useQuery, gql } from '@apollo/client';
import Movie from '../components/Movie'

const allMovies = gql`

  query allMovies {
    movies{
      name
      genre
      year
    }


  }

`;
function Movies() {
  const { loading, error, data } = useQuery(allMovies)
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :</p>;
  return (
    <div>
{data.movies.map((movie,i)=> {
  return <Movie key={i}
  name={movie.name}
  genre={movie.genre}
  year={movie.year}></Movie>
})}
    </div>
  )
}


 export default  Movies