import React, {useState} from 'react'

export default function Homepage(props) {

    const[text, setText] = useState('Enter Text here');

    const handleChange = (event)=>{
        setText(event.target.value);
        props.Alert('Text is Changing', 'success');
    }

    const handleCapital = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.Alert('Text is Capitalized', 'success');
    }

    const handleLower = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.Alert('Text is converted to Lower', 'success');
    }

    const handleReverse =()=>{
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.Alert('Text is Reversed', 'success');
    }

    const handleClear =()=>{
        let newText = 'Enter text here';
        setText(newText);
        props.Alert('Text is Cleared', 'success');
    }

    const handleSplaces =()=>{
        let newText = text.split(' ').join('');
        setText(newText);
        props.Alert('Spaces are removed', 'success');
    }

  return (
    <>
    <h1 style={{color: props.mode === 'light'?'black':'white'}}>{props.heading}</h1>
    <div className="mb-3 my-2">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleChange} style={{backgroundColor: props.mode === 'light'?'white':'grey'}}></textarea>
        <div className="container my-2">
            <button type="button" className="btn btn-outline-primary mx-1" onClick={handleCapital}>Capitalize</button>
            <button type="button" className="btn btn-outline-primary mx-1" onClick={handleLower}>Lower</button>
            <button type="button" className="btn btn-outline-primary mx-1" onClick={handleReverse}>Reverse</button>
            <button type="button" className="btn btn-outline-primary mx-1" onClick={handleSplaces}>Remove Spaces</button>
            <button type="button" className="btn btn-outline-primary mx-1" onClick={handleClear}>Clear</button>
        </div>
    </div>
    </>
  )
}
