import { useAuth} from "../context/authContext";
import { Navigate} from "react-router-dom";
import '../Components/Welcome/Loading.css';
export function ProtectedRoute({children}){
  
    const {user, loading} = useAuth();
    if(loading )
    return(
        <div className='body-l'>
            <h1 className="h1">Loading...</h1>
        </div>
    );
  
    if(!user) return <Navigate to="/login" />;
    return <>{children}</>;
   

   
}