import React from "react";

const Sns = () => {
    return (
        <div className="snsIcons">
            <div className="inner">
                <a
                    href="https://github.com/1shining1"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github Page(Opens in a new tab)"
                    className="github"
                >
                    <ion-icon name="logo-github"></ion-icon>
                </a>

                <a
                    href="https://www.linkedin.com/in/shining-yun/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Linkedin Profile Page(Opens in a new tab)"
                    className="linkedin"
                >
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>

                <a
                    href="mailto:shining2327@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Email to Cheonga"
                    className="email"
                >
                    <ion-icon name="mail"></ion-icon>
                </a>
            </div>
        </div>
    );
};

export default Sns;
