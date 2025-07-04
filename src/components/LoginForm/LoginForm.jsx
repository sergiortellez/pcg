/*<---------------------------------------------------------------------------->
<!--	LoginForm (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     
* Parameters:
    -
* Dependencies:
    -
* Returns/results:
    
<!------------------------------------------------->*/

//---------------------imports----------------------

//React
import { useState } from 'react';

//context
import { useAuth } from '../../context/AuthContext/AuthContext';

//styles
import styles from './LoginForm.module.css'


export default function LoginForm({ onClose }) {

  //extrae el resultado del cambio de contexto, ponlo en login.
  const { login } = useAuth();
  //maneja los estados locales
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  //al enviar el formulario
  const handleSubmit = e => {
    e.preventDefault();
    //si el resultado no es exitoso arroja un err
    if (!login(username, password)) {
      setError('Incorrect credentials, access denied.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <fieldset className={styles.inputs}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </fieldset>

      {error && <small className={styles.errorText}>{error}</small>}

      <button type="submit">Login</button>
    </form>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end LoginForm(Component)	-->
<!--------------------------------------------------------------------------->*/

