import { useEffect, useState } from 'react';
import '../styles/dashboard.css';
import db, { auth } from "../firebase/firebase";
import EditModal from './EditModal';
import DeleteModal from './deleteModal';
import { useHistory } from 'react-router';

const Dashboard = (props) => {
  const history = useHistory();
  const uid = (props.match.params.uid);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [dob, setDob] = useState('');
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [infoId, setId] = useState('');
  const [like, setLike] = useState('');
  useEffect(() => {
    db.ref(`users/${uid}/info`)
      .on('value', ((snapshot) => {
        const info = [];
        snapshot.forEach(child => {
          info.push({
            id: child.key,
            ...child.val()
          });
        });
        if (info[0]) {
          setId(info[0].id);
          setName(info[0].name);
          setPhone(info[0].phone);
          setPosition(info[0].position);
          setDob(info[0].dob);
        }
      }));
  });
  const likeSwitch = () => {
    if(like)
    setLike('')
    else
    setLike("like")

  }
  return (
    <>
      <div className="card">
        <div className="img"></div>
        <div className="info">
          <div className="logout-flex"><h3 className="name">{name}</h3> <button onClick={() =>  {
              auth.signOut();
              history.push("/")
            }} className="logout">Logout</button></div>
          <div className="details">
            <div className="info-item"><i className="icolor fas fa-birthday-cake fa-2x"></i><p className="data">{dob}</p></div>
            <div className="info-item"><i className="icolor fas fa-phone fa-2x"></i> <p className="data">{phone}</p></div>
            <div className="info-item"><i className="icolor fas fa-user fa-2x"></i><p className="data">{position}</p></div>
          </div>
          <div className="options">
            <i onClick={likeSwitch} className={` ${like} btn-d far fa-heart fa-2x`}></i>
            <EditModal
              open={editModal}
              setEditModal={setEditModal}
              name={name}
              setName={setName}
              phone={phone}
              setPhone={setPhone}
              dob={dob}
              setDob={setDob}
              position={position}
              setPosition={setPosition}
              uid={uid}
              infoId={infoId}
            />
            <i onClick={() => { setEditModal(true) }} className="btn-d fas fa-user-edit fa-2x"></i>
            <DeleteModal
              open={deleteModal}
              setDeleteModal={setDeleteModal}
              name={name}
              uid={uid}
              infoId={infoId}
            />
            <i onClick={() => setDeleteModal(true)} className="btn-d fas fa-trash-alt fa-2x"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;