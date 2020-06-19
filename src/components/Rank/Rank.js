import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import GetRecords from '../GetRecords/GetRecords';
import '../../App.css';

const Rank = (props) => {

    const records = GetRecords(props.sourceName);

    return (
        <HashRouter basename="/">
            <div className="outerContainer">
                <div className="container">
                    <h1>Top 10 Records</h1>
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Record</th>
                            </tr>
                            {records.map((record) =>
                            <tr key={record.id}>
                                <td>{record.name}</td>
                                <td>{record.record}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                    

                    <Link className="gameSetting" to={'/'+props.sourceName}>
                        <h2>Return</h2>
                    </Link>
                </div>
            </div>
        </HashRouter>
    )
}

export default Rank;
