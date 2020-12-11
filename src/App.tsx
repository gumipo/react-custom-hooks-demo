import React from "react";
import "./App.css";
import DocTitleOne from "./components/DocTitleOne";
import DocTitleTwo from "./components/DocTitleOne";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import UserForm from "./components/UseForm";
import TextInput from "./components/TextInput";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
      {/* <CounterOne />
      <CounterTwo /> */}
      {/* <UserForm /> */}
      <TextInput />
    </div>
  );
};

export default App;
