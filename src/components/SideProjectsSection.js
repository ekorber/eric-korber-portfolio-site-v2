import HorizontalTextImageCombo from "./HorizontalTextImageCombo";
import BirthdayCardImage from "../img/ue5-bday-card.webp";

function SideProjectsSection() {
    return (
        <div className="row">
            <h2 className="text-center my-5">SIDE PROJECTS</h2>

            <h4 className="text-center mb-5">Comic-themed Birthday Card, made in Unreal Engine 5</h4>
            
            <HorizontalTextImageCombo
                text="A birthday card I made for a friend. I modelled the pixel-style characters and arcade machine in Blender, set up the scene in Unreal Engine 5 with custom VFX and animated poses, and used Megascans for materials and MetaHuman for the female character. Final compositing was done in Krita to achieve the comic book layout."
                imageSRC={BirthdayCardImage}
                imageAltText="A comic book themed birthday card."
            />
        </div>
    );
}

export default SideProjectsSection;