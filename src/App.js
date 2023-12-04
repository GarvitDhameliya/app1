import { useEffect, useRef, useState } from "react";
import Detail from "./Detail";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Result from "./Result";
import axios from "axios";

function App() {
  const [data, setdata] = useState([]);

  const title = useRef();
  const author = useRef();

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((res) => {
      // console.log(res.data);
      setdata(res.data || []);
    });
  }, []);

  function handlesubmit() {
    const data = {
      title: title.current.value,
      author: author.current.value,
    };

    // console.log(data);

    axios.post("http://localhost:3001/posts", data).then((res) => {
      console.log(res.data);

      setdata(...data, [res.data]);
    });
  }

  console.log(data, "data");
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

        <input type="text" name="title" ref={title} />
        <input type="text" name="author" ref={author} />
        <button onClick={handlesubmit}>submit</button>

        {data?.map((val, ind) => {
          return (
            <>
              <h1>{val.id}</h1>
              <h2>{val.title}</h2>
              <h3>{val.author}</h3>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
