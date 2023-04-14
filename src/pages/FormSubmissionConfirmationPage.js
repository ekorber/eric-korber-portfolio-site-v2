import { useParams } from "react-router-dom";
import ErrorPage from './ErrorPage';

function FormSubmissionConfirmationPage(props) {

    const params = useParams();
    const responseSuccessful = params.responseSuccess;

    if (responseSuccessful === 'true') {
        return (
            <div className="container alert alert-success text-center my-5" role="alert">
                Thanks for your message! I'll be checking it out shortly!
            </div>
        );
    } else if (responseSuccessful === 'false') {
        return (
            <div className="container alert alert-danger text-center my-5" role="alert">
                Error: Message could not be sent correctly at this time!
            </div>
        );
    } else {
        return (<ErrorPage />);
    }
}

export default FormSubmissionConfirmationPage;