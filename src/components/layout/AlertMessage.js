import React from 'react'
import Alert from 'react-bootstrap/Alert'
const AlertMessage = ({info}) => {

    return info === null ? null : (
        <Alert className='transitionAlert' variant={info.type}>
            {
                info.message
            }
        </Alert>
    )
}

export default AlertMessage