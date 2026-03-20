import CodeDibsScreenshot from "../img/codedibs.webp";
import TwinDragonScreenshot from "../img/twindragon.webp";
import SmithsvilleRetreatScreenshot from "../img/smithsville-retreat.webp";
import "../components/WebDevProjectCard.css";

function WebDevPortfolioPage() {

    return (
        <>
            <h2 className="text-center my-5">RECENT PROJECTS</h2>
           
            <div className="card-list mb-5">
                <div className="portfolio-card card">
                    <a href="https://smithsvilleretreat.ca/" target="_blank" rel="noopener noreferrer">
                        <img src={SmithsvilleRetreatScreenshot} className="img-thumbnail mt-2 portfolio-piece-img" alt="The thumbnail for the Smithsville Retreat site." />
                        <div className="card-body">
                            <h5 className="card-title portfolio-piece">Smithsville Retreat</h5>
                            <h6 className="card-subtitle mb-3 text-muted">Countryside Retreat Booking Platform</h6>
                            <p className="project-description">
                                A full-stack booking platform I built for a rural countryside retreat property. Guests can browse accommodations, check availability with blocked-date awareness, and complete reservations with Stripe payment processing. The admin dashboard gives the property owner full control over bookings, accommodations, pricing, and date availability — with automated email notifications keeping everyone in the loop throughout the booking lifecycle.
                            </p>
                            <p className="portfolio-piece"><strong>What I delivered:</strong></p>
                            <ul className="feature-list">
                                <li>Date-based reservation system with blocked-date awareness, overnight vs. day visit toggling, and real-time price calculation</li>
                                <li>Stripe payment integration with admin-generated payment links, webhook handling, and automatic booking status updates</li>
                                <li>Admin dashboard with booking management, accommodation editing, image galleries with drag-and-drop reordering, and blocked date controls</li>
                                <li>Automated email notifications via AWS SES for booking confirmations, payment receipts, and cancellations</li>
                                <li>Supabase backend with PostgreSQL, Row-Level Security policies, Edge Functions, and role-based auth</li>
                                <li>Multi-environment deployment pipeline to AWS S3 + CloudFront for staging and production</li>
                            </ul>
                            <p className="tech-stack"><strong>Built with:</strong> React 19, TypeScript, Vite, Tailwind CSS 4, Supabase (PostgreSQL, Auth, Edge Functions), Stripe, AWS (S3, SES, CloudFront)</p>
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