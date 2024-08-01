import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        // reset error
        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('password should be minimum 6 character or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('password should be minimum 1 uppercase character');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfully');
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }
    return (
        <div className="">
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl mb-8">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input className="mb-4 w-3/4 py-2 px-4 border" type="email" placeholder="Email Address" name="email" id="" required />
                    <div className="relative">
                        <input className="mb-4 w-3/4 py-2 px-4 border" type={showPassword ? "text" : "password"} placeholder="Password" name="password" id="" required />
                        <span className="absolute" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <IoEyeOff></IoEyeOff> : <IoEye></IoEye>}</span>
                    </div>
                    <input className="btn btn-secondary mb-4 w-3/4 py-2 px-4" type="submit" value="Register" />
                </form>
                {
                    registerError && <p className="text-red-800">{registerError}</p>
                }
                {
                    success && <p className="text-green-700">{success}</p>
                }
            </div>
        </div>
    );
};

export default Register;