import React from "react";

const Sns = () => {
    return (
        <div className="snsIcons">
            <div className="inner">
                <a
                    href="test.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github Page"
                    className="github"
                >
                    <ion-icon name="logo-github"></ion-icon>
                </a>

                <a
                    href="test.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Linkedin Profile Page"
                    className="linkedin"
                >
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>

                <a
                    href="test.html"
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
