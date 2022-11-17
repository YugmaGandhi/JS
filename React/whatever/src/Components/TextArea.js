import React, {useState} from 'react' // importing useState frm react which allows class based component features in function based components

export default function TextArea(props) {
    const [text,setText] = useState("Enter text here"); // here it is using array destructuring
    //below fnction is using the value typed and covert it to uppercase and then pass to the setText method
    const handleOnclick = ()=>{
        const newText = text.toUpperCase();
        setText(newText);
    }
    //below function is taking all the changed value in event and passing it to the setText function
    const handleOnchange = (event)=>{
        setText(event.target.value); // remember to add .target (find why)
    }
    return (
        <div>
            <div className="form-group">
                <label htmlFor="myBox"><h2>{props.heading}</h2></label>
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnchange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleOnclick}>Capitalise</button>
        </div>
    )
}
