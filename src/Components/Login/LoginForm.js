import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../Hooks/useForm';
import UserContext from '../../UserContext';
import Error from '../../Helper/Error';
import styles from './LoginForm.module.css';
import { ReactComponent as Imfit } from '../../Assets/imfitlogo.svg';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Imfit className={styles.logo} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          {...username}
          placeholder="Nome de usuário ou Email"
        />
        <Input
          type="password"
          name="password"
          {...password}
          placeholder="Senha"
        />
        {loading ? (
          <button disabled>Carregando...</button>
        ) : (
          <Button className={styles.button}>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Esqueceu a Senha?
      </Link>
      <div className={styles.cadastro}>
        <Link className={styles.cadastresse} to="/criar">
          Não tem uma conta? Cadastre-se
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
