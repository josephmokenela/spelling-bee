import { useContext, useState } from "react"
import { CounterDispatchContext } from "../contexts/context";

export function AddCounter() {

    const counterDispatch = useContext(CounterDispatchContext);
    const [counterShortName, setCounterShortName] = useState('');
    const [counterLongName, setCounterLongName] = useState('');
    const [tab, setTab] = useState(1);
    const [startingValue, setStartingValue] = useState(1);

    const counterShortNameHandler = (event) => {
        setCounterShortName(event.target.value);
    };

    const counterLongNameHandler = (event) => {
        setCounterLongName(event.target.value);
    };

    const startingValueHandler = (event) => {
        setStartingValue(event.target.value);
    };

    const tabHandler = (event) => {
        setTab(event.target.value);
    };

    

    const handleSubmit = (event) => {
        event.preventDefault();

        counterDispatch({
            type: 'add',
            data: {
                shortName: counterShortName,
                longName: counterLongName,
                tab: tab,
                startingValue: Number(startingValue)
            }
        });

        console.log(counterShortName);
        console.log(startingValue);
    };

    return (
        <>
        <form method="post" onSubmit={handleSubmit}>
            <h2>Add Counter</h2>
            <p>
                <label htmlFor="counterShortName">Name</label>
                <input type="text" name="counterShortName" id="counterShortName" value={counterShortName}  onChange={counterShortNameHandler} />
            </p>
            <p>
                <label htmlFor="counterLongName">Name</label>
                <textarea type="text" name="counterLongName" id="counterLongName" value={counterLongName}  onChange={counterLongNameHandler} />
            </p>
            <p>
                <label htmlFor="tab">Tab</label>
                <select value={tab} name="tab" id="tab" onChange={tabHandler}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </p>
            <p>
                <label htmlFor="startingValue">Starting Value</label>
                <input type="number" name="counterName" id="startingValue" value={startingValue} onChange={startingValueHandler} />
            </p>
            <button type="submit">Add</button>
        </form>
        </>
    );
}