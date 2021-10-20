import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentacation from "../components/Home/Login/Firebase/Firebase.init";
initializeAuthentacation()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const auth = getAuth();
    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Please at least 6 charecter')
            return;
        }
        if (!/(?=.*[A-Z].*[A-z])/.test(password)) {
            setError("Password Must contasin 2 uppercase")
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {

                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch((error) => {
                setError(error.message)

            });

    }
    const handleEmailChange = (e) => {
        console.log(email, password);
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const signInGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .then(() => setIsLoading(false));
    }
    return {
        user,
        error,
        isLoading,
        signInGoogle,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        logOut
    }
}
export default useFirebase;