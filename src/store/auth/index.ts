export * from './authSlice';
export * from './thunks';

export interface authState {
    status: 'checking' | 'authenticated' | 'not-authenticated',
    uid: string | null,
    email: string | null,
    displayName: string | null,
    photoURL: string | null,
    errorMessage: string | null,
}

export type logoutPayload = {
    errorMessage: string
}

export type loginPayload = {
    uid: string,
    email: string,
    displayName: string,
    photoURL: string
}