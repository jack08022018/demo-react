import React from 'react';
import { useState } from 'react';
import 'antd/dist/antd.css';
import './Style.css';
import { Layout, Breadcrumb, PageHeader, Menu } from 'antd';
import { UserOutlined, LogoutOutlined, RightOutlined, HomeOutlined } from '@ant-design/icons';
import { 
  RoutingList,
  routes,
} from './RoutingList';
import SiderMenu from './SiderMenu';
import { useHistory } from 'react-router-dom';
import Login from '../login/LoginPage';
import { getUsernameAvatar } from './UserAvatar';

const { SubMenu } = Menu;
const { 
  Content,
  Footer
} = Layout;

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const handleOnCollapse = () => {
    setCollapsed(prevState => !prevState);
  };
  const history = useHistory();
  let isLogin = history.location.pathname === '/login';

  function itemRender(route, params, routes, paths) {
    if(history.location.pathname === route.path) {
      return (
        <>
          <HomeOutlined />
          <RightOutlined />
          {route.breadcrumbName}
        </>
      );
    }
  }
  const handleMenuClick = action => {
    // console.log(action.key)
    history.push(action.key);
  };

  if(isLogin) {
    return(
      <Login />
    )
  }
  return(
    <Layout style={{ minHeight: '100vh' }}>
      <SiderMenu collapsed={collapsed} handleOnCollapse={handleOnCollapse} />
      <Layout className="site-layout">
        <PageHeader className="header" ghost={false} title="Title" subTitle="Subtitle"
          extra={[
            <Menu mode="horizontal" className="menu-profile" key="profile" onClick={handleMenuClick}>
              <SubMenu title={getUsernameAvatar()} key="SubMenu" style={{ padding: 0 }}>
                <Menu.Item key="/profile">
                  <span>
                    <UserOutlined /> Profile
                  </span>
                </Menu.Item>
                <Menu.Item key="/login">
                  <span>
                    <LogoutOutlined /> Logout
                  </span>
                </Menu.Item>
              </SubMenu>
            </Menu>
          ]}
        />
        <Content style={{ margin: '0 8px' }}>
          <Breadcrumb style={{ margin: '4px 0' }} itemRender={itemRender} routes={routes} />
          <div className="site-layout-background" style={{ padding: 10, minHeight: 360 }}>
            <RoutingList />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}