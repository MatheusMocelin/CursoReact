import './Home.css';
import { Button, Layout, theme } from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import { useState } from 'react';

import { Auth } from '../../hooks/Auth';

import Logo from '../../components/Logo';
import MenuList from '../../components/MenuList';
import ToggleThemeButton from '../../components/ToggleThemeButton';

import Sider from 'antd/es/layout/Sider';
import { Header } from 'antd/es/layout/layout';
import NovoCadastro from '../Cadastro/NovoCadastro';
import Rotas from '../../components/Rotas';

//page


const Home = () => {

const [darkTheme, setDarkTheme] = useState(true)

  const [collapsed, setCollapsed] = useState(false)
  //const [enter, setEnter] = useState(false);

  
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  }

  const {
    token: {colorBgContainer},
} = theme.useToken();


return(
<Layout> 
            <Sider collapsed = {collapsed} collapsible trigger={null} className='sidebar' theme={darkTheme ? 'dark' : 'light'}>
              <Logo />
              <MenuList darkTheme={darkTheme}/>
              <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme}/>
            </Sider>
            <Layout>
              <Header style={{padding: 0, background: colorBgContainer}}>
                <Button type='text' className="toggle" onClick={() => setCollapsed(!collapsed)} icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined /> }/>
              </Header>
            </Layout>
</Layout>  
)
}

export default Home;