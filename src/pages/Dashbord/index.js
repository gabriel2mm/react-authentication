import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/authContext'
import { Layout, Menu, Row, Col } from 'antd'
import TableComponent from '../../components/Datatable/index'
import columns from './columns'
import api from '../../services/api'
import './style.css'

function Dashboard() {
  const { logout } = useContext(AuthContext)
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getUsers() {
      try {
        const response = await api.get('/users');
        if (response && response.data) {
          setData(response.data);
          setError(null)
        }
      } catch (e) {
        setError("Você não possui permissão para visualizar este conteúdo")
      }
    }
    getUsers();
  }, []);

  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <Header>
        <Row>
          <Col className="logo">
            <h1>Gerenciamento OS</h1>
          </Col>
          <Col>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">Usuários</Menu.Item>
              <Menu.Item key="2" onClick={logout}>Logout</Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
      <Content className="container">
        {error !== null ? (<span>{error}</span>) : (<TableComponent datasource={data} columns={columns} uniqueKey="email" />)}
      </Content>
      <Footer className="footer">
        Todos os direitos reservados
      </Footer>
    </Layout>
  )
}

export default Dashboard;