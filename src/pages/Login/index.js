import {LoginForm} from "components"
import { AuthContext } from "context"
import { useContext } from "react"


export function Login () {
    const {user} = useContext(AuthContext)
    return(
        <div>
            <h2>Login</h2>
            <code>{JSON.stringify(user)}</code>
            <LoginForm/>
        </div>
    )
}