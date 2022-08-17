
//import{gql} from 'apollo-boost'

/*const addMovie = gql `
mutation myMovie($name:String!,$genre:String!,year:String!){
  addMovie(name:$name, genre:$genre,year:$year){
    name
    genre
    year
  }
}
`*/
const submitHandler=(event)=>{
  event.preventDefault();
  


}

export default function AddMovie() {
  return (
    <div>
        <form onSubmit={submitHandler}>
          <h1>Form add movie </h1>
            <input type="text" onChange={(e)=>console.log(e.target.value)}></input>  
             <input type="text" onChange={(e)=>console.log(e.target.value)}></input>
              <input type="text" onChange={(e)=>console.log(e.target.value)}></input>    
              <button type='submit'> Add movie</button>
                </form>
    </div>
  )
}
