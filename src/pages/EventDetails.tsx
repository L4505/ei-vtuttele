import { Box, Button, Flex, Heading, Text, Spinner } from "@chakra-ui/react"
import { Link, useParams } from "react-router-dom"
import Header from "../components/header";
import useAxiosGet from "../lib/useAxiosGet";

// yksityiskohtainen tapahtumanäkymä
const EventDetails = () => {
    const { id } = useParams();
    const { data, loading } = useAxiosGet('https://jsonplaceholder.typicode.com/posts/' + id);
    
    return (
        <Flex direction="column">
        <Box p="6">
            <Box>
                { loading && <Spinner /> }
                { data && (
                <Box>
                <Heading size="lg">{ data.title }</Heading>
                    
                <Text fontSize={'lg'}>{ data.body }</Text>
                </Box>
        )}

            </Box>
            <Link to="/">
            <Button width="full" mt="6" fontSize={'lg'}>Takaisin</Button>
            </Link>
        </Box>
        </Flex>
    )
}
export default EventDetails