import Register from "../../componenets/Register"
import { useAuth } from "../../hooks/authContext"


const RegisterScreen = () => {
    const auth = useAuth()
    return <Register onSubmit={auth.register} />
}

export default RegisterScreen