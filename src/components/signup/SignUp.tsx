'use client'

import { Button, Form, Input, message } from 'antd'
import Card from 'antd/es/card/Card'
import Link from 'next/link'
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { UserOutlined, LockOutlined, IdcardOutlined } from '@ant-design/icons'

interface SignUpFormValues {
    fullname: string
    email: string
    password: string
}

const SignUp: React.FC = () => {
    const router = useRouter()
    const [form] = Form.useForm()

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
        <div className='min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4'>
            <Card 
                hoverable 
                className='w-full max-w-md shadow-xl rounded-2xl border-none backdrop-blur-lg bg-white/90'
                styles={{ body: { padding: '40px' } }}
            >
                <div className='text-center mb-8'>
                    <h1 className='text-3xl font-bold text-gray-800 mb-2'>Create Account</h1>
                    <p className='text-gray-500'>Get started with your free account</p>
                </div>

                <Form form={form} layout='vertical' onFinish={signup}>
                    <Form.Item<SignUpFormValues>
                        label="Full Name"
                        name="fullname"
                        rules={[{ required: true, message: "Please enter your full name" }]}
                        className='mb-6'
                    >
                        <Input 
                            size='large'
                            placeholder='John Doe'
                            prefix={<IdcardOutlined className='text-gray-300' />}
                            className='rounded-lg py-2 hover:border-blue-300 focus:border-blue-500'
                        />
                    </Form.Item>

                    <Form.Item<SignUpFormValues>
                        label="Email"
                        name="email"
                        rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}
                        className='mb-6'
                    >
                        <Input 
                            size='large'
                            placeholder='your.email@example.com'
                            prefix={<UserOutlined className='text-gray-300' />}
                            className='rounded-lg py-2 hover:border-blue-300 focus:border-blue-500'
                        />
                    </Form.Item>

                    <Form.Item<SignUpFormValues>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: "Please enter your password" }]}
                        className='mb-8'
                    >
                        <Input.Password
                            size='large'
                            placeholder='••••••••'
                            prefix={<LockOutlined className='text-gray-300' />}
                            className='rounded-lg py-2 hover:border-blue-300 focus:border-blue-500'
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button 
                            size='large'
                            type='primary'
                            htmlType='submit'
                            block
                            className='h-12 rounded-lg font-semibold text-base bg-blue-600 hover:bg-blue-700 transition-all'
                        >
                            Create Account
                        </Button>
                    </Form.Item>
                </Form>

                <div className='text-center mt-6 text-gray-600'>
                    Already have an account?{' '}
                    <Link 
                        href="/login" 
                        className='text-blue-600 font-semibold hover:text-blue-700 transition-colors'
                    >
                        Login Now
                    </Link>
                </div>
            </Card>
        </div>
    )
}

export default SignUp