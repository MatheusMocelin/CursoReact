import React from 'react'
import { Button, Layout, theme } from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import { useState } from 'react';

import Logo from './Logo';
import MenuList from './MenuList';
import ToggleThemeButton from './ToggleThemeButton';

import Sider from 'antd/es/layout/Sider';
import { Header } from 'antd/es/layout/layout';


const SideBar = () => {

    const [darkTheme, setDarkTheme] = useState(true)

  const [collapsed, setCollapsed] = useState(false)
  //const [enter, setEnter] = useState(false);

  
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  }

  const {
    token: {colorBgContainer},
} = theme.useToken();

  return (
    <>
  
     <Sider collapsed = {collapsed} collapsible trigger={null} className='sidebar' theme={darkTheme ? 'dark' : 'light'}>
              <Logo />
              <MenuList darkTheme={darkTheme}/>
              <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme}/>
            </Sider>
   
      <Header style={{padding: 0, background: colorBgContainer}}>
                <Button type='text' className="toggle" onClick={() => setCollapsed(!collapsed)} icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined /> }/>
              </Header>
   
               
            
    </>
           
          
            

  )
}

export default SideBar