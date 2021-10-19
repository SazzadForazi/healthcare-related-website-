import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const initializeAuthentacation = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthentacation;