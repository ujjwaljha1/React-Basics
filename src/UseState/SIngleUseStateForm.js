import React, { useState } from 'react';

function SingleForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${formData.name}, Email: ${formData.email}, Password: ${formData.password}`);
        // Clear form fields after submission (if needed)
        setFormData({
            name: '',
            email: '',
            password: ''
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type='text' name='name' value={formData.name} onChange={handleInputChange}/>
            </label>
            <label>
                Email:
                <input type='email' name='email' value={formData.email} onChange={handleInputChange}/>
            </label>
            <label>
                Password:
                <input type='password' name='password' value={formData.password} onChange={handleInputChange}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default SingleForm;
