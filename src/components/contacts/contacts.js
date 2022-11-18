import React, {Component} from "react";
import {alert, FirebaseService} from "../../services";
import Preloader from "../preloader";

import "./contacts.css";

const ContactsBlock = () => {
    return (
        <ul>
            <li className="col fa-phone"><p>+380-99-053-19-57</p></li>
            <li className="col fa-phone"><p>+380-68-408-26-04</p></li>
            <li className="col fa-envelope">
                <a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    ohanchak@gmail.com
                </a>
            </li>
            <li className="col fa-facebook">
                <a
                    href="https://www.facebook.com/Oleksandr.Hanchak"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    Facebook
                </a>
            </li>
            <li className="col fa-linkedin">
                <a
                    href="https://www.linkedin.com/in/oleksandr-hanchak-85b469141/"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    LinkedIn
                </a>
            </li>
            <li className="col fa-telegram">
                <a
                    href="https://telegram.im/@Lex_uzh?lang=ru"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    Telegram
                </a>
            </li>
            <li className="col fa-skype">
                <a
                    href="live:ohanchak"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    Skype [live:ohanchak]
                </a>
            </li>
            <li className="col fa-git">
                <a
                    href="https://github.com/AlexHanchak?tab=repositories"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    GitHub
                </a>
            </li>
        </ul>
    );
};


export default class Contacts extends Component {
    state = {
        preloader: false,
        name: "",
        email: "",
        subject: "",
        message: "",
    };

    fs = new FirebaseService();

    getInput = (name) => document.getElementsByName(name)[0].value;

    handleSubmit = (event) => {
        event.preventDefault();

        const newMessage = {
            senderName: this.getInput("name"),
            senderEmail: this.getInput("email"),
            message: this.getInput("message"),
            subject: this.getInput("subject"),
        };

        this.setState({preloader: true});

        /**
         * Отправка и обработка запроса на добавление сообщения
         * @param newMessage {Object}
         */
        this.fs
            .addMessage(newMessage)
            .then(
                () => {
                    alert("Your message has been sent successfully!", "success");
                },
                () => {
                    alert("Error connecting to database!");
                }
            )
            .finally(() => {
                this.setState({preloader: false});
            });
    };

    render() {
        const form = (
            <div className="container contacts">
                <div className="row">
                    <div className="col">
                        <h4>Contact with us or send comment with a wishes</h4>
                        <form
                            className="col"
                            method="post"
                            id="table"
                            onSubmit={this.handleSubmit}
                        >
                            <input
                                aria-describedby="nameField"
                                name="name"
                                id="name"
                                type="text"
                                className="row mt-2 form-control"
                                placeholder="Your name (*)"
                                value={this.name}
                                required
                            />
                            <input
                                aria-describedby="emailField"
                                id="email"
                                name="email"
                                type="email"
                                className="row mt-2 form-control"
                                placeholder="Your E-mail (*)"
                                value={this.email}
                                // onChange={this.onInputChange}
                                required
                            />
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                className="row mt-2 form-control"
                                placeholder="Subject"
                                value={this.subject}
                                required
                            />
                            <textarea
                                id="Textarea"
                                name="message"
                                rows="3"
                                defaultValue=""
                                className="row mt-2 form-control"
                                placeholder="Your Message: "
                                value={this.message}
                                required
                            />
                            <button className="row mt-2 btn btn-dark" type="submit">
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="col">
                        <ContactsBlock/>
                    </div>
                </div>
            </div>
        );
        const rPreForm = this.state.preloader ? [<Preloader/>, form] : form;
        return <div>{rPreForm}</div>;
    }
}
