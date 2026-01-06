import { useState } from "react"
import ResetPassword from "./components/ResetPassword"
import LoginForm from "./components/LoginForm"


const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const handleLogin = () => {
    return setIsLogin(!isLogin)
  } 


  return (
    <div>
      {isLogin ? <LoginForm  /> : <ResetPassword />}
      <button onClick={handleLogin}>Chang Status</button>
    </div>
  )
}

export default AuthPage