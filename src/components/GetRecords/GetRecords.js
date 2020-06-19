import { useState, useEffect } from 'react';
import firebase from '../../firebase';

const GetRecords = (collection) => {
    const [records, setRecords] = useState([]);
    
    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection(collection)
            .orderBy('record', 'desc')
            .limit(10)
            .onSnapshot((snapshot) => {
                const newRecord = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setRecords(newRecord);
            })
        return () => unsubscribe()
    }, [])

    return records
}

export default GetRecords;