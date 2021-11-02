import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { useRef } from "react";
import { useHistory } from "react-router";
import '../styles/signup.css'
const Login = () => {
    const history = useHistory();
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
           if(user){
            history.push(`./dashboard/${user.uid}`);
           }
        }).catch(error => {
            alert(error.message)
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
                    <h4>Welcome back! Log in to your <br /> account to view todays <br /> clients:</h4>
                </section>
                <section className="form-fill">
                    <form id="userlogin" action="" className="form-fields">
                        <div className="flex-inputs">
                            <i className="far fa-envelope fa-3x"></i>
                            <span className="inputs">
                                <label htmlFor="Email" placeholder="example@gmail.com">Email:</label><br />
                                <input ref={emailRef} id="for-email" type="text" />
                                <p></p>
                            </span>
                        </div>
                        <div className="flex-inputs">
                            <i className="far fa-check-circle fa-3x"></i>
                            <span className="inputs">
                                <label htmlFor="password">Password:</label><br />
                                <input ref={passwordRef} id="for-pass" type="password" />
                                <p className="pass-msg"></p>
                            </span>
                        </div>
                        <span className="btn-flex">
                            <button className="btn" onClick={login}>Log in</button>
                            <span>Do Not Have an Account <Link to="/signup">Signin Here</Link></span>
                        </span>
                    </form>
                </section>
            </section>
        </div>
    );
}

export default Login;