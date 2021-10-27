import { useEffect, useState } from 'react';
import '../styles/dashboard.css';
import db from "../firebase/firebase";
import EditModal from './EditModal';

const Dashboard = (props) => {
  const uid = (props.match.params.uid);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [dob, setDob] = useState('');
  const [editModal, setEditModal] = useState(false)
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
        setName(info[0].name);
        setPhone(info[0].phone);
        setPosition(info[0].position);
        setDob(info[0].dob);
      }));
  }, [])
  return (
    <>
      <div className="card">
        <div className="img"></div>
        <div className="info">
          <h3 className="name">{name}</h3>
          <div className="details">
            <div className="info-item"><i className="icolor fas fa-birthday-cake fa-2x"></i><p className="data">{dob}</p></div>
            <div className="info-item"><i className="icolor fas fa-phone fa-2x"></i> <p className="data">{phone}</p></div>
            <div className="info-item"><i className="icolor fas fa-user fa-2x"></i><p className="data">{position}</p></div>
          </div>
          <div className="options">
            <i className="btn-d far fa-heart fa-2x"></i>
            <EditModal open={editModal}/>
            <i onClick={() => setEditModal(true) } className="btn-d fas fa-user-edit fa-2x"></i>
            <i className="btn-d fas fa-trash-alt fa-2x"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;