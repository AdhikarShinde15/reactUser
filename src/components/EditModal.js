import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import db from "../firebase/firebase";
import '../styles/editmodal.css';

const EditModal = (props) => {
    const [name, setName] = useState(props.name);
    const [phone, setPhone] = useState(props.phone);
    const [position, setPosition] = useState(props.position);
    const [dob, setDob] = useState(props.dob);
    const history = useHistory();
    useEffect(() => {
        setName(props.name);
        setPhone(props.phone);
        setPosition(props.position)
        setDob(props.dob);
    }, [props.name,props.phone,props.position,props.dob])
   
    const saveChanges = (e) => {
        e.preventDefault();
       const updates = {
            name,
            phone,
            dob,
           position
       }
       
       db.ref(`users/${props.uid}/info/${props.infoId}`).update(updates).then(() => {
        history.push(`/dashboard/${props.uid}`);
        props.setEditModal(false)
       }).catch((e) => console.log("erroe", e));
    }

    return (
        <Modal
            isOpen={props.open}
            onRequestClose={() => props.setEditModal(false)}
            closeTimeoutMS={200}
            contentLabel="Edit User"
            appElement={document.getElementById('root')}
            className="modal"
            >
            <h1 className="editname">Edit User {name}</h1>
            <form onSubmit={saveChanges}>
            <label className="label"><span className="aster">* </span> &nbsp; Name:</label>
            <input className="editlabel" value={name} onChange={(e) => setName(e.target.value)}/>
            <label className="label"><span className="aster">* </span> &nbsp;DOB:</label>
            <input className="editlabel" value={dob} onChange={(e) =>  setDob(e.target.value)}/>
            <label className="label"><span className="aster">* </span> &nbsp;Phone:</label>
            <input className="editlabel" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <label className="label"><span className="aster">* </span>&nbsp;Position:</label>
            <input className="editlabel" value={position} onChange={(e) => setPosition(e.target.value)}/>
             <div className="edit-btns">
             <button className="edt-btn" onClick={() => props.setEditModal(false)}>Close</button>
             <button className="edt-btn bg">Save</button>
             </div>
            </form>
        </Modal>
    )
}

export default EditModal;