import { useNavigate } from "react-router-dom";
import { USERS } from "../../constants/users";

const Users = () => {
    const navigate = useNavigate();

    
    /*
    // MODO CON LLAVES '{}' HAY QUE PONER 'return' DENTRO DE .map
    return USERS.map(user => {
        return (
            <div key={user.userId}>
                <h2>{user.name}</h2>  
            </div>
        )
    })
    */

    // modo moderno con '()' en vez de '{}' sin 'return' dentro de .map
    return USERS.map(user => (
            <div key={user.userId}>
                <h2>{user.name}</h2> 
                <button onClick={ ()=> navigate(`/user-details/${user.userId}`)}>
                    Ver detalles
                </button> 
            </div>
    ))
}

export default Users;