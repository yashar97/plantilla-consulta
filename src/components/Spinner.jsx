import React from 'react'

const Spinner = () => {
    return (
        <div className="preloader">
            <div className="loading-container">
                <div className="loading" />
                <div id="loading-icon"><img src="images/loader.svg" alt="" /></div>
            </div>
        </div>

    )
}

export default Spinner