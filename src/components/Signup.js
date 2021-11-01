import { auth } from "../firebase/firebase";
import { Link } from "react-router-dom";
import { useState } from "react";
import db from "../firebase/firebase";
import { useHistory } from "react-router";
import '../styles/signup.css';
const Signup = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPass, setErrorPass] = useState(false);
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [dob, setDob] = useState('')
    const [position, setPosition] = useState('');
    
    const validateEmail = (emailI) => {
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(emailI.match(validRegex)){
            setErrorEmail(false);
            setEmail(emailI);
        }
        else
        setErrorEmail("please enter a valid email");
    }
    const validatePass = (passI) => {
        const  passRex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if(passRex.test(passI)) {
            setErrorPass(false);
            setPassword(passI)
        }else {
            setErrorPass("password must be min 8 letter password, with at least a symbol, upper and lower case letters and a number");
        }
    }
    const signUp = (e) => {
        e.preventDefault();
        const userData = {
            name: name,
            phone: phone,
            dob: dob,
            position: position
        }
        
        auth.createUserWithEmailAndPassword(
            email,
            password
        ).then(user => {
             db.ref(`users/${user.uid}/info`).push(userData);
             history.push('/');
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
                    <form autoComplete="off" id="newuser" action="" className="form-fields">
                        <div className="flex-inputs">
                            <i className="fas fa-user-ninja fa-3x"></i>
                            <span className="inputs">
                                <label htmlFor="Name">Name: </label><br />
                                <input value={name} onChange={(e) => setName(e.target.value)} id="for-name" type="text" />

                            </span>
                        </div>
                        <div className="flex-inputs">
                            <i className="far fa-envelope fa-3x"></i>
                            <span className="inputs">
                                <label htmlFor="Email" placeholder="example@gmail.com">Email: </label><br />
                                <input  onChange={(e) => validateEmail(e.target.value)} id="for-email" type="text" />
                                {errorEmail && <p>{errorEmail}</p>}
                            </span>
                        </div>
                        <div className="flex-inputs">
                            <i className="fas fa-mobile-alt fa-3x"></i>
                            <span className="inputs">
                                <label htmlFor="Number">Phone No.: </label><br />
                                <input value={phone} onChange={(e) => setPhone(e.target.value)} id="for-phone" type="text" />
                            </span>
                        </div>
                        <div className="flex-inputs">
                            <i className="fas fa-birthday-cake fa-3x"></i>
                            <span className="inputs">
                                <label htmlFor="Date">DOB: </label><br />
                                <input value={dob} onChange={(e) => setDob(e.target.value)} id="for-dob" type="date" />
                                <p className="dob-msg"></p>
                            </span>
                        </div>
                        <div className="flex-inputs">
                            <i className="fas fa-user fa-3x"></i>
                            <span className="inputs">
                                <label htmlFor="Email">Position: </label><br />
                                <select value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Select">
                                    <option >Select</option>
                                    <option value="adminstrator">Adminstrator</option>
                                    <option value="user">User</option>
                                    <option value="employee">Employee</option>
                                </select>
                            </span>
                        </div>
                        <div className="flex-inputs">
                            <i className="far fa-check-circle fa-3x"></i>
                            <span className="inputs">
                                <label htmlFor="password">Password: </label><br />
                                <input onChange={(e) => validatePass(e.target.value)} type="password" />
                                {errorPass && <p className="pass-msg">{errorPass}</p>}
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