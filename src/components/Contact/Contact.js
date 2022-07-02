import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./Contact.css";

const Contact = () => {
    const form = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAIL_SERVICE_ID,
                process.env.REACT_APP_EMAIL_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAIL_PUBLIC_KEY
            )
            .then(
                (result) => {
                    Swal.fire({
                        icon: "success",
                        title: "Thank you for contacting me.",
                        showConfirmButton: false,
                        timer: 2500,
                    });
                    // console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <section className="contact" id="contact">
            <h1 className="heading">
                <span>contact</span> me
            </h1>

            <div className="row">
                <div className="content">
                    <h3 className="title">contact info</h3>

                    <div className="info">
                        <h3>
                            <i className="fas fa-envelope"></i>{" "}
                            <span style={{ textTransform: "lowercase" }}>
                                touhid4bd@gmail.com
                            </span>
                        </h3>
                        <h3>
                            <i className="fas fa-phone"></i> +8801765472894
                        </h3>
                        <h3>
                            <i className="fas fa-phone"></i> +8801681941159
                        </h3>
                        <h3>
                            <i className="fas fa-map-marker-alt"></i> Vatara, Dahaka,
                            Bangladesh
                        </h3>
                    </div>
                </div>

                <form ref={form} onSubmit={handleSubmit}>
                    <input
                        required
                        type="text"
                        placeholder="name"
                        name="name"
                        className="box"
                    />
                    <input
                        required
                        type="email"
                        placeholder="email"
                        name="email"
                        className="box"
                    />
                    <textarea
                        required
                        name="message"
                        id=""
                        cols="30"
                        rows="10"
                        className="box message"
                        placeholder="message"
                    ></textarea>
                    <button type="submit" className="btn">
                        Submit <i className="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
