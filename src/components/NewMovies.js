import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const NewMovies = () => {
    const navigate = useNavigate()
    const onFinish = (values) => {
        fetch('http://localhost:4000/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        }).then((res) => {
            navigate('/Movies')
        });
    };

    return (
        <>

            <Form
                name="basic"
                labelCol={{
                    span: 5
                }}
                wrapperCol={{
                    span: 8
                }}

                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Movie Name"
                    name="movieName"
                    rules={[{ required: true, message: 'Please Enter your Movie Name' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Date of Release"
                    name="release_date"
                    rules={[{ required: true, message: 'Please Select Release Date' }]}
                >
                    <Input type='date' />
                </Form.Item>

                <Form.Item
                    label="Check if Movie is Hit"
                    name="hit"
                    valuePropName="checked"
                    
                >
                    <Checkbox></Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
export default NewMovies;