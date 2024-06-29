import React, { useState } from 'react';
import datas from "./Data.json";

const Data = () => {
    const [nData, setNData] = useState(datas); // Corrected state variable name to follow conventions

    const handleClick = () => {
        setNData([]);
    }

    const Remove = (itemId) => {
        setNData(nData.filter(item => item.id !== itemId)); // Corrected filtering logic
    }
    const Update=(itemId)=>{
        setNData(nData.map(items=>{
            if(items.id===itemId){
                return {name:"newName"}
            }
            else{
                return items;
            }
        }))
    }
    return (
        <div>
            <ul>
                {nData.map((item) => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => Update(item.id)}>Update</button> 
                        <button onClick={() => Remove(item.id)}>Remove</button> {/* Corrected onClick handler */}
                    </li>
                ))}
            </ul>
            <button onClick={handleClick}>Clear</button>
            <button onClick={() => setNData([])}>Clear</button>
        </div>
    );
}

export default Data;
