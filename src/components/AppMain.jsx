import webLanguages from "../database/webLanguages"
import { useState } from 'react';

export default function AppMain() {
    
    const [clicked, setclicked] = useState(null);

    // derived state
    const activeContent = webLanguages[clicked];

    function handleClick(index) {
        setclicked(index)
    }

    
    return (
        <>  
            <div className="container d-flex">
                {webLanguages.map((language, index) => (
                    <div key={language.id}>
                        <button className="btn btn-primary p-2 m-2" onClick={() => handleClick(index)}>{language.name}  </button>
                    </div>
                ))}
            </div>
                {clicked === null ? <p className="container">Select an item</p> : (
                    <div className="container card">
                        <h4 className="p-2">{activeContent.name}</h4>
                        <p className="p-3">{activeContent.description}</p>
                    </div> 
                )}
                 
            
            
        </>
    )
}