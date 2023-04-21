import React, {useState} from "react";

export default function Pass(){
    const[pass, setPass] = useState('')
    console.log("📚 ~ file: Pass.js:11 ~ handleSubmit ~ pass:", pass);


    function handleSubmit(e){
        e.preventDefault();

        setPass(e.target.firstChild.value)
        

        console.log("📚 ~ file: Pass.js:17 ~ handleSubmit ~ e.target.firstChild.value:", e.target.firstChild.value);
        

        e.target.reset()
    }


    // function handlePass(e){
    //     setPass(e.target.value)
    //     console.log('Loading...');
    // }
    // onChange={handlePass}

    return(
        <form onSubmit={handleSubmit}>
            <input type="password" placeholder="Password" 
            />
            <button type="submit" >🔐</button>
        </form>
    )
}