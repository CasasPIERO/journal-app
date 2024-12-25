import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { fireBaseAuth } from "./config";

type GoogleSignInResponse = {
    ok: boolean,
    displayName?: string | null,
    email?: string | null,
    photoURL?: string | null,
    uid?: string,
    errorMessage?: string
}

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async (): Promise<GoogleSignInResponse> => {
    try {
        const result = await signInWithPopup(fireBaseAuth, provider);
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
        

    }catch (error: any) {

        //const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage
        }
        
    }
}