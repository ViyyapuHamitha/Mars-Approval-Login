import './App.css';
import { Button, Checkbox, Form, Input, message } from 'antd';
import NavBar from './components/NavBar';
import "./App.css"

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 18,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 12,
    },
  },
};
const App = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    message.success('Login success!');
  };
  const onFinishFailed = () => {
    message.error('Login failed! Please try again');
  };
  return (
    <div>
      <NavBar />
      <br></br>
      <div class="container d-flex justify-content-center">
      <Form
      {...formItemLayout}
      form={form}
      name="login"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{
        maxWidth:600,
      }}
      scrollToFirstError
    >

    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item {...tailFormItemLayout}>
      <Button type="primary" htmlType="submit">
        Login
      </Button>
    </Form.Item>
</Form>
</div>
</div>
);
}

export default App;
