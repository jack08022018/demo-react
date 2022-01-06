import React from 'react';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
// import './Style.css';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function SiderMenu({ handleOnCollapse, collapsed }) {
  const history = useHistory();
  let pathname = history.location.pathname;

  const handleSiderMenuClick = action => {
    history.push(action.key);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={handleOnCollapse} >
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={[pathname]} mode="inline" onClick={handleSiderMenuClick} >
        <Menu.Item key="/home" icon={<PieChartOutlined />}>Home</Menu.Item>
        <Menu.Item key="/about" icon={<DesktopOutlined />}>About</Menu.Item>
        <SubMenu key="/user" icon={<UserOutlined />} title="User">
          <Menu.Item key="/user/Tom" icon={<TeamOutlined />}>Tom</Menu.Item>
          <Menu.Item key="/user/Bill" icon={<FileOutlined />}>Bill</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}
