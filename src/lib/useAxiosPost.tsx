import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosPost = (url: string, payload: {}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      (async () => {
        try {
          const response = await axios.post(
            url,
            payload
          );
          setData(response.data);
        } catch (error: any) {
          setError(error.message);
        } finally {
          setLoaded(true);
        }
      })();
    }, []);
    return { data, error, loaded };
  };
export default useAxiosPost