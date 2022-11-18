import React, {Component} from "react";
import {alert, FirebaseService} from "../../services";
import Preloader from "../preloader";

import "./contacts.css";

const ContactsBlock = () => {
    return (
        <ul>
            <li>
                choose game
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
                        <h4>Choose and start</h4>
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
                                placeholder="Intra 1"
                                value={this.name}
                                required
                            />
                            <input
                                aria-describedby="emailField"
                                id="email"
                                name="email"
                                type="email"
                                className="row mt-2 form-control"
                                placeholder="Intra 2"
                                value={this.email}
                                // onChange={this.onInputChange}
                                required
                            />
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                className="row mt-2 form-control"
                                placeholder="Game"
                                value={this.subject}
                                required
                            />
                            
                            <button className="row mt-2 btn btn-dark" type="submit">
                                Next Level
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
