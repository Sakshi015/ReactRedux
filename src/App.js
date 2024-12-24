import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, hideTodo } from "./redux/slice/todos";

function App() {
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data=> setData(data)
  
  )
    .catch(err=> console.log(err))
  },[])
  const [posts, setPosts]= useState([])
  const [data, setData]= useState([])
  const dispatch = useDispatch();
  const state = useSelector((state)=> state);
  const fetchPosts = ()=>{

   dispatch(hideTodo());
   setPosts(data);
  }

  if (state.todo.isLoading){
    return <h1>Loading...</h1>
  }
  const setTodos =()=>{
    setPosts(null);
    dispatch(fetchTodos());
  }
 
  return (
    <>
    <button onClick={fetchPosts}>Fetch Posts: React</button>

    <button onClick={e=>setTodos()}>Fetch Todos:React Redux</button>
  
    {
      posts?.length ?
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
        { posts.map((a,b)=>(
      <tr>
        <td>{a.id}</td>
        <td>{a.title}</td>
      </tr>
        ))
        }
    </table> :null
    }
  
    {
      state.todo.data?.length ?
  <table>
    <tr>
      <th>Id</th>
      <th>Todos</th>
    </tr>
  {  state.todo.data.map(e=>
  <tr>
    <td>{e.id}</td>
    <td>{e.title}</td>
  </tr>
    
    )}
    
  </table>:null
    }
    </>
  );
}

export default App;
