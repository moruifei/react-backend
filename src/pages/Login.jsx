import React, { PureComponent } from 'react';
import { Button, Form, Card, Row, Col, Input, Icon } from 'antd';
import '@/style/login.less';
import logo from '@/assets/images/logo.svg';
import Particles from 'react-particles-js';
import particlesJson from '@/assets/particles.json';

const FormItem = Form.Item;
const { Meta } = Card;
class Login extends PureComponent {
    state = {
        btnLoading: false
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { validateFields } = this.props.form;
        validateFields((err, values) => {
            if (!err) {
                console.log(values);
            }
        })
    }
    componentDidMount() { }
    render() {
        const { btnLoading } = this.state;
        const { getFieldDecorator } = this.props.form;
        const FormInput = <Form onSubmit={this.handleSubmit}>
            <FormItem>
                {getFieldDecorator('username', {
                    rules: [
                        {
                            required: true,
                            message: '请输入用户名'
                        }
                    ]
                })(<Input prefix={<Icon type="user" />} placeholder="用户名" />)}
            </FormItem>
            <FormItem>
                {getFieldDecorator('password', {
                    rules: [
                        {
                            required: true,
                            message: '请输入密码'
                        }
                    ]
                })(<Input prefix={<Icon type="lock" />} placeholder="密码" />)}
            </FormItem>
            <FormItem>
                <Button htmlType="submit" loading={btnLoading} type="primary">登录</Button>
            </FormItem>
        </Form>
        return (
            <div className="login-wrapper">
                <Particles
                    params={particlesJson}
                    style={{ position: 'absolute',bottom:'0' }}
                />
                <Row type="flex" justify="center" align="middle">
                    <Col>
                        <Card
                            hoverable
                            bordered={false}
                            style={{ width: 300 }}
                            cover={<div style={{ padding: '10px' }}><img alt="" src={logo} />{FormInput}</div>}
                        >
                            <Meta title="React Backend System" description="Wonderful Experence!" />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Form.create()(Login);