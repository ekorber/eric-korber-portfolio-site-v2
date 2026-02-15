import CodeDibsScreenshot from "../img/codedibs.webp";
import TwinDragonScreenshot from "../img/twindragon.webp";
import TalentMasonScreenshot from "../img/talentmason.webp";
import "../components/WebDevProjectCard.css";

function WebDevPortfolioPage() {

    return (
        <>
            <h2 className="text-center my-5">RECENT PROJECTS</h2>
           
            <div className="card-list mb-5">
                <div className="portfolio-card card">
                    <a href="https://talentmason.com/" target="_blank" rel="noopener noreferrer">
                        <img src={TalentMasonScreenshot} className="img-thumbnail mt-2 portfolio-piece-img" alt="The thumbnail for the TalentMason site." />
                        <div className="card-body">
                            <h5 className="card-title portfolio-piece">TalentMason</h5>
                            <h6 className="card-subtitle mb-3 text-muted">Recruitment CRM Platform</h6>
                            <p className="project-description">
                                This is a recruitment-focused CRM I developed end-to-end for a Tokyo-based agency specializing in bilingual IT placements. English is the primary interface language, as is common in that niche of the Japanese recruitment industry. The architecture supports complete organizational isolation through per-tenant database schemas, integrates AI for smart data imports, and handles the full billing lifecycle through Stripe. The window-based workspace UI lets recruiters arrange their data views however they want, making it easy to manage candidates, clients, and job pipelines side by side.
                            </p>
                            <p className="portfolio-piece"><strong>What I delivered:</strong></p>
                            <ul className="feature-list">
                                <li>Multi-tenant PostgreSQL architecture with per-organization schema isolation for secure data separation</li>
                                <li>AI-powered database imports using AWS Bedrock (Claude) for intelligent column mapping from CSV, JSON, and SQL files</li>
                                <li>Stripe integration with per-seat billing, webhooks, multi-currency support, and invoice management</li>
                                <li>Role-based team management with invitation system, email verification, and granular permissions (Owner, Admin, Manager)</li>
                                <li>Custom window-based workspace UI with drag-and-drop, layering, and snap-to-grid positioning</li>
                                <li>Flexible database customization allowing teams to add/remove fields, organize tabs, and structure views without code changes</li>
                                <li>AWS infrastructure including S3 presigned uploads, SES email delivery, CloudFront CDN, and Secrets Manager</li>
                            </ul>
                            <p className="tech-stack"><strong>Built with:</strong> React 19, Node.js/Express 5, PostgreSQL, AWS (S3, SES, Bedrock, CloudFront, Secrets Manager), Stripe</p>
                        </div>
                    </a>
                </div>

                <div className="portfolio-card card">
                    <a href="https://codedibs.com" target="_blank" rel="noopener noreferrer">
                        <img src={CodeDibsScreenshot} className="img-thumbnail mt-2 portfolio-piece-img" alt="The thumbnail for CodeDibs." />
                        <div className="card-body">
                            <h5 className="card-title portfolio-piece">CodeDibs</h5>
                            <h6 className="card-subtitle mb-3 text-muted">Dynamic QR Code Platform</h6>
                            <p className="project-description">
                                I built this complete SaaS product from the ground up, handling everything from user authentication and Stripe payment processing to an admin dashboard with revenue analytics. The platform solves a real business problem: traditional QR codes can't be updated once printed. CodeDibs lets businesses change their QR code destinations anytime, making it ideal for marketing materials, packaging, and signage.
                            </p>
                            <p className="portfolio-piece"><strong>What I delivered:</strong></p>
                            <ul className="feature-list">
                                <li>Secure user accounts with email verification and password recovery</li>
                                <li>Stripe integration with reliable webhook handling for payments</li>
                                <li>Customizable QR codes (colors, logos, styles) with high-quality PNG export</li>
                                <li>Admin dashboard with user management, purchase history, and growth analytics</li>
                                <li>Scalable AWS infrastructure designed for production traffic</li>
                                <li>Multi-environment setup (development, staging, production) for safe deployments</li>
                            </ul>
                            <p className="tech-stack"><strong>Built with:</strong> React, Node.js, AWS (Lambda, DynamoDB, S3, CloudFront), Stripe</p>
                        </div>
                    </a>
                </div>

                <div className="portfolio-card card">
                    <a href="https://twindragonwoodbridge.ca/" target="_blank" rel="noopener noreferrer">
                        <img src={TwinDragonScreenshot} className="img-thumbnail mt-2 portfolio-piece-img" alt="The thumbnail for the Twin Dragon Woodbridge site." />
                        <div className="card-body">
                            <h5 className="card-title portfolio-piece">Twin Dragon Woodbridge</h5>
                            <h6 className="card-subtitle mb-3 text-muted">Gym Website, Admin System & Inventory Management</h6>
                            <p className="project-description">
                                I delivered a full digital solution for a martial arts gym in Woodbridge, Ontario. A professional marketing website, content management system, and multi-location inventory tracker for in-house sales. The public site showcases the gym's services and dynamic photo/video gallery, while the admin dashboard lets the client manage gallery content, log merchandise sales, and track inventory across multiple locations.
                            </p>
                            <p className="portfolio-piece"><strong>What I delivered:</strong></p>
                            <ul className="feature-list">
                                <li>Responsive marketing site with smooth scroll animations and mobile-friendly navigation</li>
                                <li>Dynamic gallery supporting both images and videos with lightbox viewing</li>
                                <li>Contact form with validation and email delivery to the business</li>
                                <li>Admin dashboard with drag-and-drop media management and reordering</li>
                                <li>Inventory management system tracking stock levels across multiple locations</li>
                                <li>Automatic image optimization and compression for fast page loads</li>
                                <li>Secure login system with rate limiting to prevent unauthorized access</li>
                                <li>AWS infrastructure designed for reliability and low ongoing costs</li>
                            </ul>
                            <p className="tech-stack"><strong>Built with:</strong> React, Vite, Tailwind CSS, AWS (Lambda, S3, DynamoDB, CloudFront)</p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}

export default WebDevPortfolioPage;