import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../../Helper/Error';
import useForm from '../Hooks/useForm';
import { USER_POST } from '../../api';
import { UserContext } from '../../UserContext';
import useFetch from '../Hooks/useFetch';
import styles from './LoginCreate.module.css';

const LoginCreate = () => {
  const email = useForm('email');
  const username = useForm();
  const password = useForm();
  /* Para fazer login automatico */
  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      usuario: username.value,
      email: email.value,
      senha: password.value,
    });
    /* para poder usar loading, error e data */
    const { response } = await request(url, options);
    /*const response = await fetch(url, options);*/
    if (response.ok) userLogin(username.value, password.value);
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input placeholder="Email" type="text" name="email" {...email} />
        <Input
          placeholder="Nome de Usuário"
          type="text"
          name="username"
          {...username}
        />
        <Input
          placeholder="Senha"
          type="password"
          name="password"
          {...password}
        />
        <section className={styles.paragrafo}>
          <div>
            <p>
              As pessoas que usam nosso serviço podem ter enviado suas
              informações de contato para o ProFitness, <span>Saiba mais</span>.
            </p>
          </div>
          <div>
            <p>
              Ao se cadastrar, você concorda com nossos
              <span>
                {' '}
                Termos, Política de Privacidade e Política de Cookies
              </span>
              .
            </p>
          </div>
        </section>
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
