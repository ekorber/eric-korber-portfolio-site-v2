import HalfPageShowcasePiece from "./HalfPageShowcasePiece";

function MainProjectsSection() {
    const linkStyling = {
        color: '#4287f5',
        textDecoration: 'underline'
    }

    return (
        <div className="row">

            <h2 className="text-center mt-5">MAIN PROJECTS</h2>

            {/* Steam Game Embedding */}
            <div className="col-lg-12 mt-5 mb-4">
                <h4 className="text-center mt-2 mb-4">Published Game On Steam</h4>

                <iframe src="https://store.steampowered.com/widget/2667000/" frameborder="0" width="100%" height="190" className="mb-2"></iframe>

                <p>Built in the Godot Engine, Redrum Hotel is a first-person horror adventure made with game mechanics inspired by the indie classic Slenderman game. Blender was used for 3D modelling and animation, with both bone and Blendshape animation techniques used.</p>
            </div>

            <HalfPageShowcasePiece
                title="A Doom-inspired FPS in Unreal Engine 5"
                url="https://www.youtube.com/embed/Q1dYVwZQlZI"
                videoMetaTitle="Rekill - Demo Footage"
                description="This is a first-person shooter demo made in Unreal Engine 5, with a style inspired by the legendary Doom series. It features multiple weapons, some of which deal extra damage to certain enemies, a levelling system with upgrades, varied enemy types with melee and ranged attacks, weak points on certain enemies, and multiple maps to play on. I used Blender to model and animate all the weapons and monsters, and Quixel Mixer to texture them."
                additionalText={<strong>Download for free on <a href="https://erickorber.itch.io/rekill" target="_blank" rel="noreferrer" style={linkStyling}>Itch.io</a>.</strong>}
            />

            <HalfPageShowcasePiece
                title="Third Person Action, made in Unity"
                url="https://www.youtube.com/embed/XBOdHimLgac"
                videoMetaTitle="Ready For Hell - Demo Footage"
                description="This is a short boss battle demo made in Unity. I used Blender to model and animate the boss, as well as the various dessert-related props. It was themed to be a creepier version of the famous poem Inferno, by Dante Alighieri."
            />
            
        </div>
    );
}

export default MainProjectsSection;