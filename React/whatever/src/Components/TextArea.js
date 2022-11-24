import React, { useState } from 'react' // importing useState frm react which allows class based component features in function based components

export default function TextArea(props) {
    const [text, setText] = useState("Enter text here"); // here it is using array destructuring
    //below fnction is using the value typed and covert it to uppercase and then pass to the setText method
    const OnclickUpctext = () => {
        const newText = text.toUpperCase();
        setText(newText);
    }
    const OnclickLoctext = () => {
        const newText = text.toLowerCase();
        setText(newText);
    }
    const clearText = () => {
        setText("");
    }
    const removeExtraSpace = () => {
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    //below function is taking all the changed value in event and passing it to the setText function
    const handleOnchange = (event) => {
        setText(event.target.value); // remember to add .target (find why)
    }
    return (
        <>
            <div>
                <div className="form-group">
                    <label htmlFor="myBox"><h2>{props.heading}</h2></label>
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnchange} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mt-2" onClick={OnclickUpctext}>To Uppercase</button>
                <button className="btn btn-primary mt-2 ms-2" onClick={OnclickLoctext}>To Lowercase</button>
                <button className="btn btn-primary mt-2 ms-2" onClick={removeExtraSpace}>Remove Extra Spaces</button>
                <button className="btn btn-danger mt-2 ms-2" onClick={clearText}>Clear</button>

            </div>
            <div className="container mt-3">
                <h1>Text Summery</h1>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} minute to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
