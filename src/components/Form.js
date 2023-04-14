import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { createRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

function Form() {

    const [ recaptchaVerified, setVerified ] = useState(false);
    const { register, handleSubmit } = useForm();
    const recaptchaRef = createRef();
    const navigate = useNavigate();

    function onChange(value) {
        setVerified(true);
    }

    const onSubmit = (data) => {
        fetch("https://k7pekghmp3.execute-api.us-east-1.amazonaws.com/contact-form-submission", {
            mode: "cors",
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => {
            if (res.ok) {
                navigate('/formSubmissionResponse/true');
            } else {
                navigate('/formSubmissionResponse/false');
            }
        }).catch(err => {
            navigate('/formSubmissionResponse/false');
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { maxLength: 99 })} className="form-control mb-3" placeholder='Name' required/>
            <input {...register("email", { maxLength: 300 })} className="form-control mb-3" type='email' placeholder='Email Address' required/>
            <textarea {...register("text-body", { maxLength: 9999 })} className="form-control mb-3" type='textarea' placeholder='Your message here' required/>
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={onChange}
                className="mt-5 mb-3"
                />
            <input type='submit' value='Submit' disabled={!recaptchaVerified} className="button-theme form-submit"/>
        </form>
    );
}

export default Form;