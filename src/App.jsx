import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]) // Provide an initial value of an empty array

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])


  const handlerAdduser = e =>{
     e.preventDefault();
     const form = e.target;
     const name = form.name.value;
     const email = form.email.value;
     const user = {name, email}
     console.log(user)

  }

  return (
    <>
      <h1>User management system</h1>
    <h3>This is User on the:{users.length}</h3>

    <form onSubmit={handlerAdduser}>
    <input type='text' name='name' id=''/>
    <br />
    <input type="text" name='email' id='' />
    <br />
  <input type="submit" value='add user' />

    </form>



    {
      users.map(user => <p key={user.id}> 
      {user.id}.
      {user.name} <br />
      {user.email}
      </p>)
    }
    </>
  )
}

export default App
