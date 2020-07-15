import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import 
  {
    DesktopOutlined,
    ToolOutlined,
    UserOutlined,
    HomeOutlined,
    InstagramOutlined, 
    LinkedinOutlined, 
    GithubOutlined
} from '@ant-design/icons';


class Sidebar extends Component {
  state = {
    collapsed: true,
    theme: 'light',
  };

  render() {
    return (
      <div className="sidebar" style={{ width: 256, position: 'fixed'}}>
       
       
        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          theme={this.state.theme}
          inlineCollapsed={this.state.collapsed}
          style={{position: 'sticky'}}
        >
          <Menu.Item className="nav" icon={<HomeOutlined className="nav"/>}>
            <a href="#landing">
          Accueil
            </a> 
          </Menu.Item>
          <Menu.Item className="nav" icon={<ToolOutlined className="nav"/>}>
            <a href="#competences">
          Compétences
            </a> 
          </Menu.Item>
          <Menu.Item className="nav" icon={<DesktopOutlined className="nav"/>}>
            <a href="#projets">
          Projets
            </a> 
          </Menu.Item>
          <Menu.Item className="nav" icon={<UserOutlined className="nav"/>}>
            <a href="#about">
          About
            </a> 
          </Menu.Item>
          <Menu.Item className="nav" icon={<LinkedinOutlined className="nav"/>}>
            <a href="https://www.linkedin.com/in/julien-kerdaffret-4061a795/" target="_blank" rel="noopener noreferrer">
          Linkedin
            </a> 
          </Menu.Item>
          <Menu.Item className="nav" icon={<InstagramOutlined className="nav"/>}>
            <a href="https://www.instagram.com/julienk_pro/" target="_blank" rel="noopener noreferrer">
          Instagram
            </a> 
          </Menu.Item>
          <Menu.Item className="nav" icon={<GithubOutlined className="nav"/>}>
            <a href="https://github.com/jkerdaffret" target="_blank" rel="noopener noreferrer">
          Github
            </a> 
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Sidebar