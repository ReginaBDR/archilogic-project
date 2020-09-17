import React, {Component} from 'react'
import { NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  
  const { Sider } = Layout;

  export default class Navbar extends Component {
    state = {
      collapsed: false,
    };
  
    onCollapse = (collapsed: any) => {
      console.log(collapsed);
      this.setState({ collapsed });
    };
  
    render() {
      return (
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{height:'100vh', flex:1}}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{paddingTop:'40px'}}>
              <Menu.Item key="1" icon={<PieChartOutlined />}>
              <NavLink to="/">Floor Plan Engine</NavLink>
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
              <NavLink to="/Three">3D Embed</NavLink>
              </Menu.Item>
              <Menu.Item key="3" icon={<UserOutlined />}>
              <NavLink to="/Space">Space Api</NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
    );
  }
}  