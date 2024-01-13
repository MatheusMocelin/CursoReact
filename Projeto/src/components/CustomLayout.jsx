import React from 'react'
import SideBar from './SideBar'
import { useState } from 'react';
import { Layout, Button, theme } from 'antd'
import { Header } from 'antd/es/layout/layout';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';

const CustomLayout = ({children}) => {
  const [darkTheme, setDarkTheme] = useState(true)
  const [collapsed, setCollapsed] = useState(false)

  const {
    token: {colorBgContainer},
} = theme.useToken();

  return (
 <Layout>
      <SideBar />
      <Layout>{children}</Layout>
</Layout>
   
    
   
  
)}

export default CustomLayout