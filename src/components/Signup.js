import { auth } from "../firebase/firebase";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import db from "../firebase/firebase";
import '../styles/signup.css';
const Signup = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [dob, setDob] = useState('')
    const [position, setPosition] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        const userData = {
            name: name,
            phone: phone,
            dob: dob,
            position: position
        }
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
             db.ref(`users/${user.uid}/data`).push(userData)
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="body">
            <section className="bg-img">
                <i className="far fa-star fa-3x"></i>
            </section>

            <section className="login-form">
                <section className="welcome">
                    <h1 className="tag"><span className="one">We are</span> <span className="two"> NUVA</span></h1>
                    <h4>Welcome back!Log in to your <br /> account to view todays <br /> clients: </h4>
                </section>
                <section className="form-fill">
                    <form id="newuser" action="" className="form-fields">
                        <div className="flex-inputs">
                            <i className="fas fa-user-ninja fa-3x"></i>
                            <span className="inputs">
                                <label Htmlfor="Name">Name: </label><br />
                                <input value={name} onChange={(e) => setName(e.target.value)} id="for-name" type="text" />

                            </span>
                        </div>
                        <div className="flex-inputs">
                            <i className="far fa-envelope fa-3x"></i>
                            <span className="inputs">
                                <label for="Email" placeholder="example@gmail.com">Email: </label><br />
                                <input ref={emailRef} id="for-email" type="text" />
                                <p></p>
                            </span>
                        </div>
                        <div className="flex-inputs">
                            <i className="fas fa-mobile-alt fa-3x"></i>
                            <span className="inputs">
                                <label for="Number">Phone No.: </label><br />
                                <input value={phone} onChange={(e) => setPhone(e.target.value)} id="for-phone" type="text" />
                            </span>
                        </div>
                        <div className="flex-inputs">
                            <i className="fas fa-birthday-cake fa-3x"></i>
                            <span className="inputs">
                                <label for="Date">DOB: </label><br />
                                <input value={dob} onChange={(e) => setDob(e.target.value)} id="for-dob" type="date" />
                                <p className="dob-msg"></p>
                            </span>
                        </div>
                        <div className="flex-inputs">
                            <i className="fas fa-user fa-3x"></i>
                            <span className="inputs">
                                <label for="Email">Position: </label><br />
                                <select value={position} onSelect={(e) => setPosition(e.target.value)} name="position" id="position" placeholder="Select">
                                    <option value="adminstrator">Adminstrator</option>
                                    <option value="user">User</option>
                                    <option value="employee">Employee</option>
                                </select>
                            </span>
                        </div>
                        <div className="flex-inputs">
                            <i className="far fa-check-circle fa-3x"></i>
                            <span className="inputs">
                                <label for="password">Password: </label><br />
                                <input ref={passwordRef} id="for-pass" type="password" />
                                <p className="pass-msg"></p>
                            </span>
                        </div>
                        <span className="btn-flex">
                            <button className="btn" onClick={signUp}>Signup Up</button>
                            <span>Already Have an Account <Link to="/">Login Here</Link></span>
                        </span>
                    </form>
                </section>
            </section>
        </div>
    );

}

export default Signup;