import { useState, useEffect } from "react";
import axios from "axios";

/* const useAxiosGet = (url: string) => {
    const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
         setPosts(response.data);
          // console.log(posts);
      })
  }, [url]);  
  return [posts]
  }; */

  const useAxiosGet = (url: string) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data: response } = await axios.get(url);
          setData(response);
        } catch (error) {
          console.error(error)
        }
        setLoading(false);
      };
  
      fetchData();
      
    }, [url]);
    return {
      data,
      loading,
    };
  };
  
export default useAxiosGet