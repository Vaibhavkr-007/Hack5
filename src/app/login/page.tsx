import Login from '@/components/login/Login'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Login"
}

const LoginRoute: React.FC = () => {
    return <Login />
}

export default LoginRoute
