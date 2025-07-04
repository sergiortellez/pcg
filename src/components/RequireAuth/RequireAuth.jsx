/*<---------------------------------------------------------------------------->
<!--	RequireAuth (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     
* Parameters:
    -
* Dependencies:
    -
* Returns/results:
    
<!------------------------------------------------->*/

//---------------------imports----------------------


import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext/AuthContext';

export default function RequireAuth({ children }) {
  //obtén el context desde el hook auxiliar
  const { user } = useAuth();
  //dime en qué ruta estoy
  const location = useLocation();

  // Si no hay user, redirige a “/” y guarda ruta previa
  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  //si existe el user regresa el contenido del componente
  return children;
}

/*<!--------------------------------------------------------------------------->
<!--	end RequireAuth(Component)	-->
<!--------------------------------------------------------------------------->*/

