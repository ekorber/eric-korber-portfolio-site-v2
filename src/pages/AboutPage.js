import PortraitImage from "../img/eric-photo.jpg";
import './AboutPage.css';

function AboutPage() {
    return (
        <div className='container'>
            <div className='row my-5'>
                <img src={PortraitImage} className="portrait-image" alt="" />
            </div>

            <div className="row col-lg-12 text-center">
                <p className="mb-5">My name is Eric Korber. I'm a passionate developer with a background in both game and web development. I have a wide ranging expertise in various programming languages, games engines and web technologies. I have a published game on Steam, and run a small business teaching game development to kids.</p>
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
                        <li className="list-group-item">Unity</li>
                        <li className="list-group-item">Godot</li>
                        <li className="list-group-item">C++</li>
                        <li className="list-group-item">C#</li>
                        <li className="list-group-item">Python</li>
                        <li className="list-group-item">Blender (3D Modelling & Animation)</li>
                        <li className="list-group-item">Steam Publishing</li>
                    </ul>
                </div>
                <div className='col-lg-6 mb-5'>
                    <h4 className="text-center my-4">Web Development</h4>
                    <ul className="list-group">
                        <li className="list-group-item">HTML, CSS & JavaScript</li>
                        <li className="list-group-item">Bootstrap</li>
                        <li className="list-group-item">Tailwind</li>
                        <li className="list-group-item">React.js</li>
                        <li className="list-group-item">Next.js</li>
                        <li className="list-group-item">Express.js</li>
                        <li className="list-group-item">Amazon Web Services</li>
                        <li className="list-group-item">Wordpress</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;