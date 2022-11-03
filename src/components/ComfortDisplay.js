const ComfortDisplay = ({comfort}) => {
    return (
        <div className="comfort-display">
            <div className="star-container">
                <h3 style={{color: comfort >= 1 ? 'rgb(253,222,0)' : ''}}>★</h3>
                <h3 style={{color: comfort >= 2 ? 'rgb(253,222,0)' : ''}}>★</h3>
                <h3 style={{color: comfort >= 3 ? 'rgb(253,222,0)' : ''}}>★</h3>
                <h3 style={{color: comfort >= 4 ? 'rgb(253,222,0)' : ''}}>★</h3>
                <h3 style={{color: comfort >= 5 ? 'rgb(253,222,0)' : ''}}>★</h3>
            </div>
        </div>
    )
}

export default ComfortDisplay