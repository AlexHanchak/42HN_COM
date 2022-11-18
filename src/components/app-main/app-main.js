import React from "react";
import "./app-main.css";
import "../contacts"

const MainBlock = () => (
    <div className="row" id="app-main">
        <div>
            <h4>Aleksandr Hanchak</h4>
            <h5>Full-Stack Web-developer</h5>
            <div className="row">
                <div className="col">
                    <ul>
                        <li>
                            <a
                                rel="noreferrer noopener"
                                target="_blank"
                                href="http://htmlbook.ru/html5"
                            >
                                Html5
                            </a>
                        </li>
                        <li>
                            <a
                                rel="noreferrer noopener"
                                target="_blank"
                                href="http://htmlbook.ru/css3"
                            >
                                Css3
                            </a>
                        </li>
                        <li>
                            <a
                                rel="noreferrer noopener"
                                target="_blank"
                                href="https://javascript.info"
                            >
                                JavaScript
                            </a>
                        </li>
                        <li>
                            <a
                                rel="noreferrer noopener"
                                target="_blank"
                                href="https://vuejs.org/"
                            >
                                Vue
                            </a>
                        </li>
                        <li>
                            <a
                                rel="noreferrer noopener"
                                target="_blank"
                                href="https://reactjs.org"
                            >
                                React
                            </a>
                        </li>

                        <li>
                            <a
                                rel="noreferrer noopener"
                                target="_blank"
                                href="https://redux.js.org"
                            >
                                Redux
                            </a>
                        </li>
                    </ul>
                </div>
                
                <div className="col">
                    <ul>
                        <li>
                            <a
                                rel="noreferrer noopener"
                                target="_blank"
                                href="https://www.python.org"
                            >
                                Python
                            </a>
                        </li>
                        <li>
                            <a
                                rel="noreferrer noopener"
                                target="_blank"
                                href="https://www.djangoproject.com"
                            >
                                Django
                            </a>
                        </li>
                        <li>
                            <a
                                rel="noreferrer noopener"
                                target="_blank"
                                href="https://flask.palletsprojects.com/en/1.1.x/"
                            >
                                Flask
                            </a>
                        </li>
                        <li>
                            <a
                                rel="noreferrer noopener"
                                target="_blank"
                                href="https://firebase.google.com"
                            >
                                Firebase
                            </a>
                        </li>
                        <li>
                            <a
                                rel="noreferrer noopener"
                                target="_blank"
                                href="https://www.mongodb.com"
                            >
                                MongoDB
                            </a>
                        </li>
                        <li>
                            <a
                                rel="noreferrer noopener"
                                target="_blank"
                                href="https://www.mysql.com"
                            >
                                MySQL
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);
export default MainBlock;
