import { useEffect, useRef, useState } from "react";
import Detail from "./Detail";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Result from "./Result";
import axios from "axios";
import Test from "./Test";

function App() {
  const [data, setdata] = useState();

  const title = useRef();
  const author = useRef();

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((res) => {
      // console.log(res.data);
      setdata(res.data || []);
    });
  }, []);

  function handlesubmit() {
    const maindata = {
      title: title.current.value,
      author: author.current.value,
    };

    // console.log(data);

    axios.post("http://localhost:3001/posts", maindata).then((res) => {
      console.log(res.data);

      setdata([...data, res.data]);
    });
  }

  console.log(data, "data");
  return (
    <div>
      <Test />
    </div>
  );
}

export default App;
