import React, { useState } from 'react';

function Form() {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${Name}, Email: ${Email}, Password: ${password}`);
        setName("");
        setEmail("");
        setPassword("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type='text' value={Name} onChange={handleName}/>
            </label>
            <label>
                Email:
                <input type='email' value={Email} onChange={handleEmail}/>
            </label>
            <label>
                Password:
                <input type='password' value={password} onChange={handlePassword}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
