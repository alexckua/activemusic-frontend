import React, { Component, Fragment } from 'react';
import { Layout, Menu } from 'antd';

import 'antd/dist/antd.css';
import './App.css';
import Artist from './pages/Artist';

class App extends Component {
   render(){
    const { Header, Content, Footer } = Layout;

    return (
      <Fragment>

       <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ marginTop: 64 }}>

            <Artist />

          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2019 Created by Ant UED</Footer>
        </Layout>
      </Fragment>
    );
  }
}

export default App;
