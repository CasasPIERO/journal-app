import { signInWithGoogle } from "../../firebase/providers";
import { AppDispatch } from "../store";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = (email: string, password: string) => async (dispatch: AppDispatch) => {
  dispatch(checkingCredentials());
}

export const startGoogleSignIn = () => async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout({ errorMessage: result.errorMessage ?? 'Error al autenticar con Google' }));
    dispatch(login(result));
}