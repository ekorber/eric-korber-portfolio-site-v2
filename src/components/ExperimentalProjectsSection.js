import HalfPageShowcasePiece from "./HalfPageShowcasePiece";

function ExperimentalProjectsSection() {
    return (
        <div className="row">
            <h2 className="text-center my-5">EXPERIMENTAL SNIPPETS</h2>
            <p className="text-center my-4">These are small one-off scenes, used to experiment with a certain system, or sometimes an interesting visual aesthetic. They are not finished products, and thus have some placeholder art, and do not always have audio playing in the video.</p>

            <HalfPageShowcasePiece
                title="3D HORROR PLATFORMING"
                url="https://www.youtube.com/embed/zfZ3p7PtYSY"
                videoMetaTitle="III - Down The Hatch"
            />
            <HalfPageShowcasePiece
                title="JRPG BATTLE TRANSITIONS"
                url="https://www.youtube.com/embed/swGjDkpFM-Q"
                videoMetaTitle="Smooth Battle Transitions, Characters Walk Around Freely"
            />
            <HalfPageShowcasePiece
                title="PSYCHEDELIC FOREST AESTHETIC"
                url="https://www.youtube.com/embed/Bv5NOOfKulw"
                videoMetaTitle="Mushroom Forest - Various Visual Improvements Made"
            />
            <HalfPageShowcasePiece
                title="DREAMY HEARTBREAK AESTHETIC"
                url="https://www.youtube.com/embed/2P5IHi3sv2E"
                videoMetaTitle="Dreamy Love/Sadness Aesthetic"
            />
        </div>
    );
}

export default ExperimentalProjectsSection;