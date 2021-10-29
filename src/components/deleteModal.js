import Modal from 'react-modal';
import db from "../firebase/firebase";
import { auth } from "../firebase/firebase";
import { useHistory } from "react-router";
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
            appElement={document.getElementById('root')} >
            <h1>Delete</h1>
            <p>Confirm Delete</p>
            <button onClick={() => props.setDeleteModal(false)}>No</button>
            <button onClick={deleteUserData}>Yes</button>
        </Modal>
    )
}

export default DeleteModal;