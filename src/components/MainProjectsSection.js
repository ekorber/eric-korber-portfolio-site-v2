import HalfPageShowcasePiece from "./HalfPageShowcasePiece";

function MainProjectsSection() {
    return (
        <div className="row">

            <h2 class="text-center mt-5">MAIN PROJECTS</h2>

            <HalfPageShowcasePiece
                title="Rekill - Demo Footage"
                url="https://www.youtube.com/embed/Q1dYVwZQlZI"
                videoMetaTitle="Rekill - Demo Footage"
                description="This is a first-person shooter demo made in Unreal Engine 5, with a style inspired by the legendary Doom series. It features multiple weapons, some of which deal extra damage to certain enemies, a levelling system with upgrades, varied enemy types with melee and ranged attacks, weak points on certain enemies, and multiple maps to play on. I used Blender to model and animate all the weapons and monsters, and Quixel Mixer to texture them."
                additionalText={<strong>Download for free on <a href="https://erickorber.itch.io/rekill" target="_blank" rel="noreferrer">Itch.io</a>.</strong>}
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