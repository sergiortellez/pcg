/*<---------------------------------------------------------------------------->
<!--	AuthContext (Component)	-->
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
import { createContext, useContext, useState, useEffect } from 'react';
//React Router
import { useNavigate } from 'react-router-dom';


//Create a context
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Al montar
  useEffect(() => {
    //consulta el local Storage y si encuentras algo que se llame pcg user guárdalo en stored
    const stored = localStorage.getItem('pcg-user');
    //si stored existe transfórmalo en algo legible y ponlo en context user. 
    if (stored) setUser(JSON.parse(stored));
  }, []);

  // Función de login
  function login(username, password) {
    // Revisa que las Credenciales fake sean exáctamente... 
    if (username === 'POWELL25' && password === 'WELCOMETOTHECLUB') {
      //crea un objeto con el username.
      const u = { username };
      //asígnalo a user en context. 
      setUser(u);
      //además escribe el usuario en local storage con la llave 'pcg-user'
      localStorage.setItem('pcg-user', JSON.stringify(u));
      //lleva al usuario a  a /ethos
      navigate('/ethos', { replace: true });
      //return success
      return true;
    }
    //return failure 
    return false;
  }

  // Función de logout
  function logout() {
    //elimina el user del context
    setUser(null);
    //también de local storage
    localStorage.removeItem('pcg-user');
    //regrésalo a la pantalla login
    navigate('/', { replace: true });
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook auxiliar
export function useAuth() {
  return useContext(AuthContext);
}

/*<!--------------------------------------------------------------------------->
<!--	end AuthContext(Component)	-->
<!--------------------------------------------------------------------------->*/

