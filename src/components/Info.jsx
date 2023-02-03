import profile from "../assets/profile-picture.jfif";
import email from "../assets/Mail.png";

export default function Info() {
    return (
        <div>
            <img
                src={profile}
                alt="Daniel Valadez, an Oregon State graduate with a degree in Computer Science."
                className="profile-picture"
            />
            <h1 className="fullname">Daniel Valadez</h1>
            <h4 className="job-title">Frontend Developer</h4>
            <h5 className="website-link">
                <a
                    href="https://github.com/Daniel-Valadez?tab=repositories"
                    target="blank"
                >
                    Take me to Daniel's Github
                </a>
            </h5>
            <button>
                <a href="mailto:danielvaladez2017@gmail.com">
                    <img src={email} />
                    <span>Email</span>
                </a>
            </button>
        </div>
    );
}
