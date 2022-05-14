import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]); //update할 때는 다른 함수를 만들어서 한다
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    } else {
      setToDo(""); //value를 바로 ""로 수정
      setToDos((currentArray) => {
        const newArray = [toDo, ...currentArray];
        return newArray;
      });
    }
  };
  return (
    <div>
      <h1>My To Dos : {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do"
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.reverse().map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default App;
