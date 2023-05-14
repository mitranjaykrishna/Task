import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
    // sendPasswordResetEmail
} from 'firebase/auth'
import {auth} from '../firebase'


const userAuthContext=createContext();

export function UserAuthContext({children}){
    
        const[user ,setUser]=useState("");

        function signUp(email,password){
            return createUserWithEmailAndPassword(auth,email,password);
        }

        function logIn(email,password){
            console.log("Email ",email);
            return signInWithEmailAndPassword(auth,email,password);
        }

        function logOut(){
            return signOut(auth);
        }

        //google
        function googleSignIn(){
            const googleAuthProvider=new GoogleAuthProvider();
            return signInWithPopup(auth,googleAuthProvider)
        }

        function facebookSignIn(){
            const facebookAuthProvider=new FacebookAuthProvider();
            return signInWithPopup(auth,facebookAuthProvider)
        }

        // function reset(){
        //     const
        // }

        useEffect(()=>{
            const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser);
            });
            return ()=>{unsubscribe()};
        },[])


        return <userAuthContext.Provider value={{user,signUp,logIn,logOut,googleSignIn,facebookSignIn}}>{children}</userAuthContext.Provider>
    
}

export function useUserAuth(){
    return useContext(userAuthContext);
}
