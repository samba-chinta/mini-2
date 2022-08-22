import { useState } from "react";

const useAuth = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const signup = async (url, options) => {
    try {
      const res = await fetch(url, { ...options });
      const json = await res.json();
      setResponse(json);
    } catch (error) {
      setError(error);
    }
  };

  return { response, error, signup};
};

export default useAuth;
