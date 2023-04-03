import PortraitImage from "../img/eric-photo.jpg";
import './AboutPage.css';

function AboutPage() {
    return (
        <div className='container'>
            <div className='row my-5'>
                <img src={PortraitImage} className="portrait-image" alt="" />
            </div>

            <div className="row col-lg-12 text-center">
                <p className="mb-5">My name is Eric Korber, and I'm a passionate developer. Having a love for both game development and web development, I am eager to work in this industry. I have a wide ranging expertise in various programming languages, games engines and web frameworks. I'm a self-starter, always eager to learn, and constantly thinking about how to improve.</p>
            </div>

            <hr />

            <div className="row">
                <h2 className="col-lg-12 mt-5 text-center">Skills</h2>
            </div>

            <div className="row">
                <div className='col-lg-6'>
                    <h4 className="text-center my-4">Game Development</h4>
                    <ul className="list-group">
                        <li className="list-group-item">Unreal Engine 5</li>
                        <li className="list-group-item">C++</li>
                        <li className="list-group-item">Unity3D</li>
                        <li className="list-group-item">C#</li>
                        <li className="list-group-item">Python</li>
                    </ul>
                </div>
                <div className='col-lg-6 mb-5'>
                    <h4 className="text-center my-4">Web Development</h4>
                    <ul className="list-group">
                        <li className="list-group-item">HTML</li>
                        <li className="list-group-item">CSS</li>
                        <li className="list-group-item">Javascript</li>
                        <li className="list-group-item">React.js</li>
                        <li className="list-group-item">Amazon Web Services</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;