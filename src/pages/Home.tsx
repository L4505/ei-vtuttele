import axios from "axios"
import { useState, useEffect } from "react"
import { Box, Flex, Heading, propNames, Spacer, Spinner, Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import useAxiosGet from "../lib/useAxiosGet"

const eventApi = 'https://62e1fb0ce8ad6b66d85170e2.mockapi.io/api/mock/Event';
const userApi = 'https://62e1fb0ce8ad6b66d85170e2.mockapi.io/api/mock/Event/1/Users';

const Home = () => {
    
  //const [posts, setPosts] = useState<any[]>([]);
  //  const [creator, setCreator] = useState([]);
    
    /* useEffect(() => {
      axios
        .get(eventApi)
        .then(response => {
           setPosts(response.data);
        })

    }, []);  */
    const { data, loading } = useAxiosGet('https://jsonplaceholder.typicode.com/posts');
    const {username, setUsername} = useState([]);
   
    const getUsers= () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsername(response.data)
            return console.log('ok')
        })
        
    }

    return (    
    <Box p="6">
    {loading && <Spinner />}
    {!loading && (
        
      <Flex direction="column">
      { data.map((entry: any) => {
        
        return (        
          <Box key={entry.id} mb="6">
                <Link key={entry.id} to={`/details/${entry.id}`}>     
                    <Heading size="lg">{entry.title}</Heading>
                </Link>
                
                <Heading size="sm">{
                  
                }</Heading>
                {/* <p>{entry.desc}</p> */}
          </Box>
        )
      })}
    </Flex>
    )}
    </Box>
    )
}
export default Home