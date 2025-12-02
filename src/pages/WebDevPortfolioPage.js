import PortfolioSiteThumbnail from "../img/portfolio-site-thumbnail.jpg";
import TwinDragonSiteThumbnail from "../img/twin-dragon-site-thumbnail.jpg";
import TalentMasonScreenshot from "../img/talentmason-screenshot.jpg";
import "../components/WebDevProjectCard.css";

function WebDevPortfolioPage() {

    return (
        <>
            <h2 className="text-center my-5">MAIN PROJECTS</h2>
           
            <div className="card-list mb-5">
                <div className="portfolio-card card">
                    <a href="https://talentmason.com/" target="_blank" rel="noopener noreferrer">
                        <img src={TalentMasonScreenshot} className="img-thumbnail mt-2 portfolio-piece-img" alt="The thumbnail for the TalentMason site." />
                        <div className="card-body">
                            <h5 className="card-title portfolio-piece">TalentMason</h5>
                            <h6 className="card-subtitle mb-4 text-muted">A multi-tenant Recruitment CRM.</h6>
                            <p className="portfolio-piece">Built with the following technologies:</p>
                            <ul>
                                <li>React.js</li>
                                <li>Express.js</li>
                                <li>Tailwind</li>
                                <li>Stripe</li>
                            </ul>
                            <p className="portfolio-piece">Hosted on AWS, using the following tools:</p>
                            <ul>
                                <li>S3 for front end, EC2 for server</li>
                                <li>Simple Email Service (SES)</li>
                                <li>RDS for the Postgres Database</li>
                            </ul>
                        </div>
                    </a>
                </div>

                <div className="portfolio-card card">
                    <a href="https://twindragonwoodbridge.ca/" target="_blank" rel="noopener noreferrer">
                        <img src={TwinDragonSiteThumbnail} className="img-thumbnail mt-2 portfolio-piece-img" alt="The thumbnail for the Twin Dragon Kickboxing site." />
                        <div className="card-body">
                            <h5 className="card-title portfolio-piece">Twin Dragon Kickboxing Site</h5>
                            <h6 className="card-subtitle mb-4 text-muted">The official site for a local kickboxing gym I train at.</h6>
                            <p className="portfolio-piece">Built with the following technologies:</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Vanilla JavaScript</li>
                            </ul>
                            <p className="portfolio-piece">Hosted on AWS, incorporating the following tools:</p>
                            <ul>
                                <li>S3</li>
                                <li>Cloudfront</li>
                                <li>Github Actions</li>
                            </ul>
                        </div>
                    </a>
                </div>

                <div className="portfolio-card card">
                    <img src={PortfolioSiteThumbnail} className="img-thumbnail mt-2 portfolio-piece-img" alt="The thumbnail for this portfolio site." />
                    <div className="card-body">
                        <h5 className="card-title portfolio-piece">This Portfolio Site</h5>
                        <h6 className="card-subtitle mb-4 text-muted">A place to showcase my game and web development projects.</h6>
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
        </>
    );
}

export default WebDevPortfolioPage;