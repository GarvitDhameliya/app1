import { useState } from "react";
import Detail from "./Detail";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Result from "./Result";

function App() {
  // const [number, setnumber] = useState(0);

  const [value, setvalue] = useState({});

  // const submit = () => {
  //   const data = {
  //     firstName: value,
  //   };

  //   console.log(data);
  // };

  const handle = (e) => {
    // console.log(e.target.value);

    setvalue({ ...value, [e.target.name]: e.target.value });
  };

  console.log(value);

  return (
    <div>
      <h1>{}</h1>
      <div>
        {/* <input type="text" name="fname" onChange={handle} />
        <input type="text" name="lname" onChange={handle} />

        <button>Submit</button> */}

        {/* <Detail /> */}
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/:title" exact element={<Result />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
