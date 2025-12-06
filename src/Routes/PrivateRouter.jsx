import { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return <div className='flex justify-center'><div>
        <span className="loading loading-ring loading-xs"></span>
<span className="loading loading-ring loading-sm"></span>
<span className="loading loading-ring loading-md"></span>
<span className="loading loading-ring loading-lg"></span>
<span className="loading loading-ring loading-xl"></span>
        
        
    </div></div>
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/"></Navigate>;
  }

  return children;
};

export default PrivateRoute;