import React from "react";
import MaterialIcon from "react-google-material-icons";

const Contact = () => {
    return (
        <div id="contact" className="content">
            {/* <h1 className="content-title">Contact</h1> */}

            <div className="inner">
                <div className="text-wrap">
                    <p className="top-txt">Get In Touch</p>
                    <p className="content-txt">
                        "I'd love to hear from you! Whether you have a question
                        or just want to say hi, don't hesitate to get in touch."
                    </p>
                </div>
                <ul>
                    <li>
                        <p>Send me an email</p>
                        <a href="mailto:shining2327@gmail.com">
                            shining2327@gmail.com
                            <MaterialIcon icon="south_east" />
                        </a>
                    </li>
                    <li>
                        <p>Connect on LinkedIn</p>
                        <a
                            href="https://www.linkedin.com/in/shining-yun/"
                            target="blank"
                            title="Opens in a new tab"
                        >
                            linkedin.com/in/shining-yun
                            <MaterialIcon icon="south_east" />
                        </a>
                    </li>
                    <li>
                        <p>Connect on Github</p>
                        <a
                            href="https://github.com/1shining1"
                            target="blank"
                            title="Opens in a new tab"
                        >
                            github.com/1shining1
                            <MaterialIcon icon="south_east" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;
