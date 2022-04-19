import React, { useState } from 'react';
import { Menu, Avatar, Affix } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const NavContainer = (props) => {
  const [theme, setTheme] = useState('dark');
  const [current, setCurrent] = useState(1);

  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };

  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <>
      {/* <Switch
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br /> */}
      <Affix offsetTop={0}>
        <Menu
          theme={'dark'}
          onClick={handleClick}
          // style={{ width: 256, height: '100vh', position: 'sticky' }}
          style={{ width: '20vw', height: '100vh', position: 'sticky' }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[current]}
          mode="inline">
          <Avatar icon={<UserOutlined />} />
          <SubMenu key="sub1" icon={<MailOutlined />} title="Inventory">
            <Menu.Item key="1">Consumables</Menu.Item>
            <Menu.Item key="2">Reagents</Menu.Item>
            <Menu.Item key="3">Cell Lines</Menu.Item>
            <Menu.Item key="4">Equipment</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Order">
            <Menu.Item key="5">VWR</Menu.Item>
            <Menu.Item key="6">ThermoFisher</Menu.Item>
            {/* <SubMenu key="sub3" title="Submenu"> */}
            <Menu.Item key="7">Barker Hall</Menu.Item>
            {/* <Menu.Item key="8">Option 8</Menu.Item> */}
            {/* </SubMenu> */}
          </SubMenu>
          <SubMenu
            key="sub4"
            icon={<SettingOutlined />}
            title="Navigation Three">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </Affix>
    </>
  );
};

export default NavContainer;
