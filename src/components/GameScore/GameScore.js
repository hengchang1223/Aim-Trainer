import React, { useState } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import GetRecords from '../GetRecords/GetRecords';
import firebase from '../../firebase';
import '../../App.css';


const GameScore = (props) => {
    /*
    name: to be filled in with user name
    submitted: if submitted, remove the submit panel
    */
    const [name, setName] = useState('');
    const [submitted, setSubmited] = useState(false);
    const records = GetRecords(props.sourceName);

    const onSubmit = e => {
        e.preventDefault();
        // connect to firebase cloud storage
        if (name !== '') {
            firebase
                .firestore()
                .collection(props.sourceName)
                .add({
                    name,
                    record: props.gameScore
                }).then(() => {
                    setName('');
                    setSubmited(true);
                })
        }
    };

    return (
        <HashRouter basename="/">
            <div className="outerContainer">
                <div className="container">
                    <h1>Your Game Score</h1>
                    <h2>Score: {props.gameScore}</h2>
                    {(!submitted) ? 
                        <div>
                            {(props.gameScore > records.map(rec => rec.record)[records.length-1] || records.length < 10) ?
                            <div className="playerSubmit">
                                <h3>Type your name to save new record:</h3>
                                <form onSubmit={onSubmit}>
                                    <div className="playerName">
                                        <input type="text" value={name} onChange={e => setName(e.currentTarget.value)} />
                                    </div>
                                <button type="submit">Submit</button>
                                </form>
                            </div> :
                            <h2>Keep up the good work! You will get there!</h2>
                            }
                        </div> :
                        <h2>You have submitted!</h2>
                    }
                

                    <Link style={{ position: 'relative', marginTop: '30%'}} className="gameSetting" to={'/'+props.sourceName}>
                        <h2>Return</h2>
                    </Link>
                </div>
            </div>
        </HashRouter>
    )
}

export default GameScore;
