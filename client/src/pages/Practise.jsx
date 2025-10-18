import Counter from "../components/Counter";
import { useContext } from "react";
// import  {CounterContext} from "../context/Counter"
import {CounterContext} from "../context/Counter";
import { use } from "react";
export default function App() {
  
const counterState =useContext(CounterContext)

  return (
    <div>
       <h1 className="text-center text-4xl">Counter value is {counterState.name}</h1>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}
