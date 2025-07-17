export default function DescriptionCard({activeContent}) {
    return (
        <>
            <div className="container card">
                <h4 className="p-2">{activeContent.name}</h4>
                <p className="p-3">{activeContent.description}</p>
            </div> 
        </>
    )
}