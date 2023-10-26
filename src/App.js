import { useState } from "react";

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
        {/* <h1>{number}</h1>
        <button onClick={() => setnumber(number + 1)}>pluse</button> */}
        <input type="text" name="fname" onChange={handle} />
        <input type="text" name="lname" onChange={handle} />

        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
