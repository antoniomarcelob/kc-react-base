import { AuthProviderProps } from "react-oidc-context";

export const oidcConfig: AuthProviderProps = {
    authority: `http://localhost:${import.meta.env.VITE_KC_PORT}/realms/${import.meta.env.VITE_KC_REALM}`,
    client_id: import.meta.env.VITE_KC_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_APP_URL,

    onSigninCallback: (): void => {
            window.history.replaceState(
                {},
                document.title,
                window.location.pathname
            )
        }
};