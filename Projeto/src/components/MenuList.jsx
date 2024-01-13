import { Menu } from 'antd';
import React from 'react';
import { HomeOutlined,  IdcardOutlined, AreaChartOutlined, PayCircleOutlined, SettingOutlined, UserAddOutlined} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

const MenuList = ({darkTheme}) => {
  const navigate = useNavigate();

  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} mode='inline' className='menu-bar'
      onClick={({key}) => {
        navigate(key);

        <Link to={navigate} />

        console.log(key);
      }}
    >
        <Menu.Item key="/home" icon={<HomeOutlined />}>Home</Menu.Item>
        <Menu.Item key="/cadastro"  icon={<IdcardOutlined />} >Cadastro</Menu.Item>

        <Menu.SubMenu key="pessoa" icon={<UserAddOutlined />}  title= "Pessoa">
            <Menu.Item key="/cadastro" >Cadastrar</Menu.Item>
            <Menu.Item key="listpessoa">Visualizar</Menu.Item>

                <Menu.SubMenu key="testeSub" title="Subcadastro">
                    <Menu.Item key="sub1">sub1</Menu.Item>
                    <Menu.Item key="sub2">sub2</Menu.Item>
                </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.Item key="teste" icon={<AreaChartOutlined />}>Teste</Menu.Item>
        <Menu.Item key="payment" icon={<PayCircleOutlined />}>Payment</Menu.Item>
        <Menu.Item key="setting" icon={<SettingOutlined />}>Setting</Menu.Item>
    </Menu>


  )
}

export default MenuList