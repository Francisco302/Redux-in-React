import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import RenderCustomField from './Components/RenderCustomField';
import ImageInput from './Components/ImageInput';


function ReduxFormView(props) {
    
    const handleSubmit = formValues => {
        console.log(formValues);
    }

    const [isImageValid, setIsImageValid] = useState(true)
    
    return (
        <form
         onSubmit={props.handleSubmit(handleSubmit)}
        >
            <div>
                <label>Email</label>
                <Field name='email' type='text' component='input' />
            </div>
            <div>
                <Field name='prueba' type='text' label='Prueba' component={RenderCustomField} />
            </div>
            <div>
                <Field name='image' setIsImageValid={setIsImageValid} component={ImageInput} />
            </div>
            <div>
                <label>Password</label>
                <Field name='password' type='password' component='input' />
            </div>
            <button type='submit' disabled={!isImageValid}>Login</button>
        </form>
    )
}

export default reduxForm({ form: 'loginForm' })(ReduxFormView);