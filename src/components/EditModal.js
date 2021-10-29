import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import db from "../firebase/firebase";

const EditModal = (props) => {
    const [name, setName] = useState(props.name);
    const [phone, setPhone] = useState(props.phone);
    const [position, setPosition] = useState(props.position);
    const [dob, setDob] = useState(props.dob);

    useEffect(() => {
        setName(props.name);
        setPhone(props.phone);
        setPosition(props.position)
        setDob(props.dob);
    }, [props.name,props.phone,props.position,props.dob])
   
    const saveChanges = () => {
       const updates = {
            name,
            phone,
            dob,
           position
       }
       
       db.ref(`users/${props.uid}/info/${props.infoId}`).update(updates).then(() => {
           console.log('updated');
       }).catch((e) => console.log("erroe", e));
    }

    return (
        <Modal
            isOpen={props.open}
            onRequestClose={() => props.setEditModal(false)}
            closeTimeoutMS={200}
            contentLabel="Edit User"
            appElement={document.getElementById('root')} >
            <h1>Edit User {name}</h1>
            <form onSubmit={saveChanges}>
            <label><span>*</span>Name:</label>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <label><span>*</span>DOB:</label>
            <input value={dob} onChange={(e) =>  setDob(e.target.value)}/>
            <label><span>*</span>Phone:</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <label><span>*</span>Position:</label>
            <input value={position} onChange={(e) => setPosition(e.target.value)}/>
            <button onClick={() => props.setEditModal(false)}>close</button>
            <button>Save</button>
            </form>
        </Modal>
    )
}

export default EditModal;