import Modal from 'react-modal';

const EditModal = (props) => {
    console.log(props.open)
    return (
        <Modal
        isOpen={props.open}
        onRequestClose={() => true}
        closeTimeoutMS={200}
        contentLabel="Edit User"
        appElement={document.getElementById('root')} >
            <h1>Edit Me</h1>
        </Modal>
    )
}

export default EditModal;