import { useParams } from "react-router-dom";
import ErrorPage from './ErrorPage';
import './FormSubmissionConfirmationPage.css';


function FormSubmissionConfirmationPage() {

    const params = useParams();
    const responseSuccessful = params.responseSuccess;

    if (responseSuccessful === 'true') {
        return (
            <div id="success-message" className="container alert alert-success text-center my-5" role="alert">
                Thanks for your message! I'll be checking it out shortly!
            </div>
        );
    } else if (responseSuccessful === 'false') {
        return (
            <div id="failure-message" className="container alert alert-danger text-center my-5" role="alert">
                Error: Message could not be sent correctly at this time!
            </div>
        );
    } else {
        return (<ErrorPage />);
    }
}

export default FormSubmissionConfirmationPage;