import { useEffect, useState } from "react";
import Detail from "./Detail";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Result from "./Result";

function App() {
  const [data, setdata] = useState([]);

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

  console.log(data, "res");

  useEffect(() => {
    fetch("http://localhost:3001/posts").then((res) => {
      res.json().then((result) => {
        console.log(result);
        setdata(result || []);
      });
    });
  }, []);

  return (
    <div>
      <h1>{}</h1>
      <div>
        {/* <input type="text" name="fname" onChange={handle} />
        <input type="text" name="lname" onChange={handle} />

        <button>Submit</button> */}

        {/* <Detail /> */}
        {/* <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/:title" exact element={<Result />} />
        </Routes> */}

        {data?.map((val, ind) => {
          return (
            <>
              <h1>{val.id}</h1>
              <h2>{val.author}</h2>
              <p>{val.title}</p>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
