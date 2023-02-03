import facebook from "../assets/Facebook Icon.svg";
import instagram from "../assets/Instagram Icon.svg";
import linkedin from "../assets/Linkedin Icon.svg";
import github from "../assets/GitHub Icon.svg";

export default function Footer() {
    return (
        <footer>
            <a
                href="https://www.facebook.com/daniel.valadez.73/"
                target="blank"
                className="facebook-link"
            >
                <img
                    src={facebook}
                    alt="An image linking to Daniel's Facebook"
                />
            </a>
            <a href="https://www.instagram.com/daniel_valadez_/" target="blank">
                <img
                    src={instagram}
                    alt="An image linking to Daniel's Instagram."
                />
            </a>
            <a
                href="https://www.linkedin.com/in/daniel-valadez-9a3556182/"
                target="blank"
            >
                <img
                    src={linkedin}
                    alt="An image linking to Daniel's LinkedIn profile."
                />
            </a>
            <a
                href="https://github.com/Daniel-Valadez?tab=repositories"
                target="blank"
            >
                <img
                    src={github}
                    alt="An image linking to Daniel's GitHub account."
                />
            </a>
        </footer>
    );
}
