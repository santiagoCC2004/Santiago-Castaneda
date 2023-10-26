import { useAuth } from "./context/AuthContext"


function ProtectedRoute() {
  const {loading, isAuthenticathed} = useAuth();
  //console.log(loading, isAuthenticathed);
  if(loading) return <h1>Loading ...</h1>
  if(!loading && !isAuthenticathed) return <navigate to='/login' replace  />
  return (
    <div>
      <Outle />
    </div>
  )
}

export default ProtectedRoute
