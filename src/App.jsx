import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate()


  const handleFormSubmit = (event) => {
    event.preventDefault()

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;

    const user = {name, email}
     console.log(user)

     fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(user)
     })
     .then(res => res.json())
     .then(data => {
      // users 
      console.log(data)
      if(data.insertedId){
        alert("user added successfully")
        // reset form
        form.reset()
      }
     })


  }




  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <button type="submit">Submit</button>
      </form>

      <button onClick={() => navigate("/users")}>Users</button>
    </>
  );
}

export default App;
