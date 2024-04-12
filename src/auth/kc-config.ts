import { AuthProviderProps } from "react-oidc-context";

export const oidcConfig: AuthProviderProps = {
    authority: "http://localhost:8080/realms/my-realm",
    client_id: "front-teste",
    redirect_uri: "http://localhost:5173",
    
    onSigninCallback: (): void => {
            window.history.replaceState(
                {},
                document.title,
                window.location.pathname
            )
        }
};