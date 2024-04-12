import { useAuth } from "react-oidc-context";

export default function App() {

  const auth = useAuth()

  if(!auth.isAuthenticated){
    return(
      <button onClick={() => void auth.signinRedirect()}>Login</button>
    )
  }

  return (
    <>
      <h1>hellow, {auth.user?.profile.given_name}</h1>
      <button onClick={() => void auth.signoutRedirect({post_logout_redirect_uri: import.meta.env.VITE_APP_URL})}>Logout</button>
    </>
  )
}