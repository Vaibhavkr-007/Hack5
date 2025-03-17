import SignUp from '@/components/signup/SignUp'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "SignUp"
}

const SignUpRoute: React.FC = () => {
    return <SignUp />
}

export default SignUpRoute