import { useForm } from 'react-hook-form';
import './Form.css';

function Form() {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => alert(JSON.stringify(data));

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email")} className="form-control mb-3" type='email' placeholder='Email Address' required/>
            <textarea {...register("text-body")} className="form-control mb-3" type='textarea' placeholder='Your message here' required/>
            <input type='submit' value='Submit' className="button-theme"/>
        </form>
    );
}

export default Form;