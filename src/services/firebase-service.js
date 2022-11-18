import React, {Component} from 'react'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import * as PropTypes from 'prop-types';


// Initialize Firebase
const _conf = {

    databaseURL: "https://hn42com.firebaseio.com",
    apiKey: "AIzaSyDYKeC7TSGBh6718AHNl0-d0phwf8iprMI",
    authDomain: "hn42com.firebaseapp.com",
    projectId: "hn42com",
    storageBucket: "hn42com.appspot.com",
    messagingSenderId: "15320506505",
    appId: "1:15320506505:web:d8819a7d42c4ad5386e658",
    measurementId: "G-XQF0CRX2ZM"
};

class FirebaseApp extends Component {

    static propTypes = {
        app: PropTypes.func.isRequired
    };

    constructor(props) {

        super(props);

        firebase.initializeApp(_conf);
    }

    componentDidMount() {

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    auth: true
                });
            } else {
                this.setState({
                    auth: false
                });
            }
        });
    }

    render() {

        const App = this.props.app;

        return <App auth={ this.state.auth }/>;
    }

    state = {
        auth: false
    };

}

class FirebaseService {

    _app = firebase.app();
    _db = this._app.firestore();


    _messages = this._db.collection('messages');

    /**
     * Добавление сообщения от пользователя в базу данных
     * @param message
     * @returns {Promise<firebase.firestore.DocumentReference>}
     */
    addMessage = async message => {
        return await this._messages.add(message)
            .then(() => {
                console.log(message);
            })
            .catch((reason) => {
                alert(reason);
            });
    };

}

export {
    FirebaseService,
    FirebaseApp
};