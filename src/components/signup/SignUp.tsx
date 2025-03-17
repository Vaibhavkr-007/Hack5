'use client'

import { Button, Form, Input, message } from 'antd'
import Card from 'antd/es/card/Card'
import Link from 'next/link'
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface SignUpFormValues {
    fullname: string
    email: string
    password: string
}

const SignUp: React.FC = () => {
    const router = useRouter()

    const signup = async (values: SignUpFormValues) => {
        try {
            await axios.post('/api/signup', values, { headers: { 'Content-Type': 'application/json' } })
            router.push('/login')
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                message.error(err.response?.data?.message || err.message)
            } else {
                message.error('An unexpected error occurred')
            }
        }
    }

    return (
        <div className='flex bg-rose-100 h-screen justify-center items-center'>
            <Card hoverable className='w-6/12 shadow-lg'>
                <h1 className='text-zinc-500 text-xl mb-4'>Register Now</h1>
                <Form layout='vertical' onFinish={signup}>
                    <Form.Item<SignUpFormValues>
                        label="Full Name"
                        name="fullname"
                        rules={[{ required: true, message: "Full name is required" }]}
                    >
                        <Input size='large' placeholder='John Doe' />
                    </Form.Item>

                    <Form.Item<SignUpFormValues>
                        label="Email"
                        name="email"
                        rules={[{ required: true, type: "email", message: "Valid email is required" }]}
                    >
                        <Input size='large' placeholder='example@email.com' />
                    </Form.Item>

                    <Form.Item<SignUpFormValues>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: "Password is required" }]}
                    >
                        <Input size='large' type='password' placeholder='*********' />
                    </Form.Item>

                    <Form.Item>
                        <Button size='large' htmlType='submit' type='primary'>Sign Up</Button>
                    </Form.Item>
                </Form>
                <div className='flex items-center gap-3'>
                    <label>Already have an account? </label>
                    <Link href="/login" className='text-blue-600 font-medium'>Login</Link>
                </div>
            </Card>
        </div>
    )
}

export default SignUp
