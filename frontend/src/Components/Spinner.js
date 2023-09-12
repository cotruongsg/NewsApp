import React from 'react'
import loading from './loading.gif'

const Spinner = (props) => {

    return (
        <div className="text-center">
            <img src={loading} className='my-3' style={{ height: '100px' }} alt="loading" />
        </div>
        // <div className="text-center" >
        //     <div className="spinner-border text-dark" role="status">
        //         <span className="visually-hidden">Loading...</span>
        //     </div>
        // </div>
    )
}

export default Spinner