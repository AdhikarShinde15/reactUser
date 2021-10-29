import Modal from 'react-modal';
import db from "../firebase/firebase";
import { auth } from "../firebase/firebase";
import { useHistory } from "react-router";
import '../styles/deletemodal.css';

const DeleteModal = (props) => {
    const history = useHistory();
    const deleteUserData = () => {
        const user = (auth.currentUser)
        db.ref(`users/${props.uid}/info/${props.infoId}`).remove();
        user.delete().then(() => {
            history.push('/');
        }).catch((e) => console.log(e));

    }
    return (
        <Modal
            isOpen={props.open}
            onRequestClose={() => props.setDeleteModal(false)}
            closeTimeoutMS={200}
            contentLabel="Delete User"
            appElement={document.getElementById('root')}
            className="modaldelete"
        >
            <div className="del-flex">
                <h1 className="editname">Delete User !!</h1>
                <p className="del-p">Are you sure delete user {props.name} ?</p>
                <div>
                <button className="edt-btn" onClick={() => props.setDeleteModal(false)}>No</button>
                <button className="edt-btn" onClick={deleteUserData}>Yes</button>
                </div>
            </div>
        </Modal>
    )
}

export default DeleteModal;