import "./App.css";

function App() {


  const handleFormSubmit = (event) => {
    event.preventDefault()

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    
    const users = {name, email}
     console.log(users)

     fetch



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
    </>
  );
}

export default App;
