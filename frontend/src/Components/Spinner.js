import React from 'react'
import loading from './loading.gif'

const Spinner = (props) => {

    return (
        <div className="text-center">
            <img src={loading} className='my-3' style={{ height: '100px' }} alt="loading" />
        </div>       
    )
}

export default Spinner