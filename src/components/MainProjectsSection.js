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

                <iframe src="https://store.steampowered.com/widget/2667000/" frameBorder="0" width="100%" height="190" className="mb-2"></iframe>

                <p>Built in Godot Engine, Redrum Hotel is a first-person horror adventure inspired by the indie classic <i>Slenderman</i>. I handled all 3D modelling and animation in Blender, using both skeletal and blend shape animation techniques.</p>
            </div>

            <HalfPageShowcasePiece
                title="Doom-inspired FPS in Unreal Engine 5"
                url="https://www.youtube.com/embed/Q1dYVwZQlZI"
                videoMetaTitle="Rekill - Demo Footage"
                description="A first-person shooter demo made in Unreal Engine 5, inspired by the classic Doom series. Features multiple weapons with enemy-specific damage bonuses, a levelling system with upgrades, varied enemy types with weak points, and multiple playable maps. All weapons and monsters were modelled and animated in Blender, with textures created in Quixel Mixer."
                additionalText={<strong>Download for free on <a href="https://erickorber.itch.io/rekill" target="_blank" rel="noreferrer" style={linkStyling}>Itch.io</a>.</strong>}
            />

            <HalfPageShowcasePiece
                title="Third Person Action, made in Unity"
                url="https://www.youtube.com/embed/XBOdHimLgac"
                videoMetaTitle="Ready For Hell - Demo Footage"
                description="A short boss battle demo made in Unity, themed as a creepier take on Dante's Inferno. I modelled and animated the boss in Blender, along with the environment props."
            />
            
        </div>
    );
}

export default MainProjectsSection;