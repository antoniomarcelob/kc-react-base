import { useAuth } from "react-oidc-context";

export default function App() {

  const auth = useAuth()

  console.log("auth: ", auth.isAuthenticated)


  if(!auth.isAuthenticated){
    return(
      <button onClick={() => void auth.signinRedirect()}>Login</button>
    )
  }

  return (
    <h1>hellow, {auth.user?.profile.preferred_username}</h1>
  )
}