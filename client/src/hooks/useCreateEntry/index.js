import { useState } from 'react';

const useCreateEntry = (entry, url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    code: null,
    message: ""
  });

  const createEntry = async () => {
    setIsLoading(true);
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      }
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, createEntry };
};

export default useCreateEntry;
