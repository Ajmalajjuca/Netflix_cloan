// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtXKLOnwP8srqZa_nhAqzEaMWwUSoCXpc",
    authDomain: "netflix-clone-c2e6d.firebaseapp.com",
    projectId: "netflix-clone-c2e6d",
    storageBucket: "netflix-clone-c2e6d.firebasestorage.app",
    messagingSenderId: "795811722681",
    appId: "1:795811722681:web:6928fa1ca6d5f3ab31b268"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "Local",
            email,
        })
    } catch (e) {
        console.log(e);
        toast.error(e.code.split('/')[1].split('-').join(" "));

    }
}

const signin = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (e) {
        console.log(e);
        toast.error(e.code.split('/')[1].split('-').join(" "));
        
    }
}

const logOut =  ()=>{
     signOut(auth)
}

export {
    signin,
    signup,
    logOut,
    auth,
    db,
}