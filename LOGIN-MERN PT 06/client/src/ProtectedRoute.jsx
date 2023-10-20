import { useAuth } from "./context/AuthContext"


function ProtectedRoute() {
  const {user, isAuthenticathed} = useAuth();
  console.log(user, isAuthenticathed);
  if(!isAuthenticathed) return <navigate to='/login' replace  />
  return (
    <div>
      <Outle />
    </div>
  )
}

export default ProtectedRoute
