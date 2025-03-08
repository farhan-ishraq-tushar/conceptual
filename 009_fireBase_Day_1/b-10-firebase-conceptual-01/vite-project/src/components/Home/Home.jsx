import React, { useContext } from "react";
import { authContext } from "../MainLayout/MainLayout";
const Home = () => {

  // Step 3: Accessing the context
  const contextValue = useContext(authContext);
  console.log(contextValue) 
  // Output: is {name: 'jakariya'}

//   console.log(contextValue);
  const { handleGoogleLogin, handleGithubLogin, handleTwitterLogin,handleLogout } = contextValue;

  return (
    <div>
      <button onClick={handleGoogleLogin}>Google login</button>
            <button onClick={handleGithubLogin}>Github login</button>
            <button onClick={handleTwitterLogin}>twitter login</button>
            <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default Home;
