import OperandForm from "./components/OperandForm";
import {useState} from "react";
import History from "./components/History";


function App() {

    const [result, setResult] = useState("");
    const [history, setHistory] = useState([]);

    function receiveResultFromServer(json) {
        setResult(json.lastResult);
        setHistory(json.history);
    }

    return (
        <div className="App">
            <OperandForm url={"/add"} receiveResult={receiveResultFromServer}/>
            {result ? <div className="border p-3">Result is {result}</div> : ""}
            <History history={history}/>
        </div>
    );
}

export default App;