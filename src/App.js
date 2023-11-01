import { useState } from "react";
import Detail from "./Detail";

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

        <Detail />
      </div>
    </div>
  );
}

export default App;
