import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Prompt } from 'react-router';


function AlertPrompt(props) {
    const [isFormDirty, setIsFormDirty] = useState(false);
    console.log('Alert');
    return (
        <>
            <Prompt
                when={true}
                message="Are you sure you want to leave? Your changes may not be saved."
            />
        </>
    )
}

AlertPrompt.propTypes = {}

export default AlertPrompt
