import HorizontalTextImageCombo from "./HorizontalTextImageCombo";
import BirthdayCardImage from "../img/ue5-bday-card.webp";

function SideProjectsSection() {
    return (
        <div className="row">
            <h2 class="text-center mb-5 mt-4">SIDE PROJECTS</h2>

            <h4 class="text-center mb-5">Comic-themed Birthday Card, made in Unreal Engine 5</h4>
            
            <HorizontalTextImageCombo
                text="This is a birthday card I made for my friend. I modelled the pixel-esque characters, along with the arcade machine, in Blender. I setup the scene in Unreal Engine 5, created the VFX and animated poses, used Megascans for some of the materials and props, as well as MetaHuman to quickly create the hi-poly female character. I imported screenshots of the scene into Krita, to layout in a comic book format."
                imageSRC={BirthdayCardImage}
                imageAltText="A comic book themed birthday card."
            />
        </div>
    );
}

export default SideProjectsSection;