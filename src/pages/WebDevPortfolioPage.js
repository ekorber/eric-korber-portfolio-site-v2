import { useNavigate } from "react-router-dom";
import PortfolioSiteThumbnail from "../img/portfolio-site-thumbnail.webp";
import "../components/WebDevProjectCard.css";

function WebDevPortfolioPage() {

    let navigate = useNavigate();

    return (
        <div className='container'>
            <div className="row">
                <h2 className="text-center my-5">MAIN PROJECTS</h2>
            </div>
            
            <div className="row">
                <div className="card portfolio-card col-xl-3 col-lg-4 col-md-6 mb-5" onClick={() => {navigate("/");}}>
                    <img src={PortfolioSiteThumbnail} className="img-thumbnail mt-2 portfolio-piece-img" alt="The thumbnail for this portfolio site." />
                    <div className="card-body">
                        <h5 className="card-title portfolio-piece">This Portfolio Site</h5>
                        <h6 className="card-subtitle mb-4 text-muted">A place to showcase my game and web development projects</h6>
                        <p className="portfolio-piece">Built with the following technologies:</p>
                        <ul>
                            <li>React.js</li>
                            <li>Bootstrap 5</li>
                            <li>React Router Dom</li>
                        </ul>
                        <p className="portfolio-piece">Hosted on AWS, using the following tools:</p>
                        <ul>
                            <li>S3</li>
                            <li>Simple Email Service (SES)</li>
                            <li>Lambda</li>
                            <li>API Gateway</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WebDevPortfolioPage;