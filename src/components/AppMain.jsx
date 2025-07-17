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
                        <button
                            className={`btn btn-primary p-2 m-2${clicked === index ? " btn-warning" : ""}`}
                            onClick={() => handleClick(index)}
                        >
                            {language.name}
                        </button>
                    </div>
                ))}
            </div>
                {clicked === null ? (
                    <div className="container card">
                        <p className="container">Nessun linguaggio selezionato</p>
                    </div>
                ) : (
                    <div className="container card">
                        <h4 className="p-2">{activeContent.name}</h4>
                        <p className="p-3">{activeContent.description}</p>
                    </div> 
                )}
                 
            
            
        </>
    )
}