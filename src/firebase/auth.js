import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "./config";

export async function cadastrarEmailSenha(nome, sobrenome, email, senha) {
    const result = await createUserWithEmailAndPassword(auth, email, senha);
    await updateProfile(result.user, {
        displayName: `${nome} ${sobrenome}`
    });
    return result.user;
}

export async function loginGoogle(email, password) {
    const provider =  new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider)
    return result.user;
}

export async function login(email, senha) {
    const result = await signInWithEmailAndPassword(auth, email, senha);
    return result.user;
}

export async function logout() {
    try {
        await signOut(auth);
    } catch (error) {
        console.log(error.message);
    }
}