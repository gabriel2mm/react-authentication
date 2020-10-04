import React, {useState, useContext}from 'react'
import { Layout, Form, Input, Button, Row, Col , Alert} from 'antd';
import AuthContext from '../../context/authContext';
import './style.css'

function SignIn() {
  const [loginError , setLoginError] = useState(null);
  const {signed, signIn, error} = useContext(AuthContext);

  console.log(signed);

  function onFinish(values){
    signIn(values);
    setLoginError(true);
  }

  function onFinishFailed(errorInfo){
    setLoginError("Não foi possível realizar login, tente novamente!")
  };

  const { Header, Content, Footer } = Layout;
  return (
    
    <Layout className="layout">
      <Header className="header-login">
        <h1 style={{ color: "#FFF" }}>Gerenciamento OS</h1>
      </Header>
      <Content>
      <div className="error-login">{error === null && loginError === null ? (null) : (<Alert message={error || loginError} type="error" />)}</div>  
        <Row>
          <Col className="col-login" span={24}>
            <Form
              className="form-login"
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Preencha este campo',
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
                    message: 'Preencha este campo',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-login">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Content>
      <Footer className="footer-login">Todos os direitos reservados</Footer>
    </Layout>
  )
}

export default SignIn;