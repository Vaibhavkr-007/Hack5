'use client'

import { Button, Form, Input, message } from 'antd'
import Card from 'antd/es/card/Card'
import Link from 'next/link'
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface LoginFormValues {
    email: string
    password: string
}

const Login: React.FC = () => {
    const router = useRouter()

    const login = async (values: LoginFormValues) => {
        try {
            await axios.post('/api/login', values, { headers: { 'Content-Type': 'application/json' } })
            await router.push('/dashboard')
            window.location.href = '/dashboard'
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
                <h1 className='text-zinc-500 text-xl mb-4'>Sign In</h1>
                <Form layout='vertical' onFinish={login}>
                    <Form.Item<LoginFormValues>
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: "Email is required" }]}
                    >
                        <Input size='large' type="email" placeholder='example@email.com' />
                    </Form.Item>

                    <Form.Item<LoginFormValues>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: "Password is required" }]}
                    >
                        <Input size='large' type='password' placeholder='*********' />
                    </Form.Item>

                    <Form.Item>
                        <Button size='large' htmlType='submit' type='primary'>Sign in</Button>
                    </Form.Item>
                </Form>
                <div className='flex items-center gap-3'>
                    <label>Don't have an account?</label>
                    <Link href="/signup" className='text-blue-600 font-medium'>Register Now</Link>
                </div>
            </Card>
        </div>
    )
}

export default Login
