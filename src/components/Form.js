import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { createRef, useState } from 'react';
import './Form.css';

function Form() {

    const [ recaptchaVerified, setVerified ] = useState(false);
    const { register, handleSubmit } = useForm();
    const recaptchaRef = createRef();

    function onChange(value) {
        setVerified(true);
    }

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email")} className="form-control mb-3" type='email' placeholder='Email Address' required/>
            <textarea {...register("text-body")} className="form-control mb-3" type='textarea' placeholder='Your message here' required/>
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Ld2B3wlAAAAAC7YnoyLZmVN8SCIP5cwPP2AaB5x"
                onChange={onChange}
                className="mt-5 mb-3"
                />
            <input type='submit' value='Submit' disabled={!recaptchaVerified} className="button-theme form-submit"/>
        </form>
    );
}

export default Form;