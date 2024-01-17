import './NovoCadastro.css'

import { useState } from 'react';
import { Layout } from 'antd';
import SideBar from '../../components/SideBar';
import MaskedInput from '../../components/MaskedInput'


const NovoCadastro = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  
  const initialValues = {
    cpf: '',
    cnpj: '',
    tel: ''
  };
  const [values, setValues] = useState(initialValues);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const register = {
      name,
      cpf: values.cpf,
      email,
      telefone: values.tel
    }

    console.log(register)
  }

  return (
    <>
  <Layout>
   <SideBar />
    <div id='register'>
      <h2>Preencha as Informações</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome Completo:</span>
          <input type="text" placeholder='Informe Seu Nome Completo' onChange={(e) => setName(e.target.value)} value={name}/>
        </label>
        <label>
          <span>CPF:</span>
          <MaskedInput
              name="cpf"
              mask="999.999.999-99"
              placeholder="Digite seu CPF"
              value={values.cpf}
              onChange={handleChange}
          />
        </label>
        <label>
          <span>E-mail</span>
          <input type="text" placeholder='Informe seu E-mail' onChange={(e) => setEmail(e.target.value)} value={email}/>
        </label>
        <label>
          <span>Telefone</span>
          <MaskedInput
              name="tel"
              mask="(99)99999-9999"
              placeholder="Digite Seu Telefone"
              value={values.tel}
              onChange={handleChange}
          />
        </label>
        <label>
          <span>Perfil</span>
         <select>
            <option key="1" >Admin</option>
            <option key="2" >Usuário</option>
         </select>
        </label>
        <label>
          <span>Senha</span>
          <input type='password' placeholder='' />
        </label>
        <label>
          <span>Confirmação da Senha</span>
          <input type='password' placeholder='' />
        </label>
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
    </Layout>
    </>
  )
}

export default NovoCadastro