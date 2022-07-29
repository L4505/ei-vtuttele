import { Flex, FormControl, FormLabel, Input, Text, Heading, Box, Textarea, Button } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

function CreateEventForm(this: any) {

    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ id, setId ] = useState('');
    const [ time, setTime ] = useState('');
    const [ enddate, setEnddate ] = useState('');

    // todo preventDefault()!!!
      const handleSubmit = async() => {
        // store the states in the form data
        
        const loginFormData = new FormData();
        loginFormData.append("title", title)
        loginFormData.append("body", body)
        loginFormData.append("id", id)        
       /*  loginFormData.append("time", time)
        loginFormData.append("enddate", enddate) */

        try {
          // make axios post request
          const response = await axios({
            method: "post",
            url: "https://jsonplaceholder.typicode.com",
            data: loginFormData,
            headers: { "Content-Type": "multipart/form-data" },
          });
          console.log(response.data)
        } catch(error) {
          console.log(error)
        }
      }
    
   /*    const handleChange = (event: any) => {
        setformValue({
          ...formValue,
          [event.target.name]: event.target.value
        });
      } */
    
    return (
        <>
        <Flex direction="column" align="center">
            <Box mt="6" shadow="md" p="6" pt="0" borderRadius="lg">
            <Heading size="lg" mb="6">Ehdota uutta tapahtumaa</Heading>
            <form onSubmit={handleSubmit}>
            <FormControl fontSize={'lg'}>
                <FormLabel >Tapahtuman nimi</FormLabel>
                <Input name="title" size="lg" variant="filled" placeholder="esim. kuhasoutu" 
                    onChange={event => setTitle(event.currentTarget.value)} />
                <FormLabel>Kuvaus</FormLabel>
                <Textarea name="body" size="lg"  variant="filled" placeholder="esim. pakko päästä vesille" 
                    onChange={event => setBody(event.currentTarget.value)} />
                <FormLabel>Alkamisajankohta</FormLabel>
                <Input name="id" size="lg" variant="filled" placeholder="pv.kk.vvvv" 
                    onChange={event => setId(event.currentTarget.value)} />
               {/*  <FormLabel>Kellonaika</FormLabel>
                <Input name="time" size="lg" variant="filled" placeholder="tt.mm"  
                    onChange={event => setTime(event.currentTarget.value)} />
                <FormLabel>Päättyy</FormLabel>
                <Input name="enddate" size="lg" variant="filled" placeholder="pv/kk/vvvv" 
                    onChange={event => setEnddate(event.currentTarget.value)} /> */}
                <Button size="lg" width="full" mt="12" bg="salmon">Tyhjennä</Button>
                <Button size="lg" width="full" mt="3" bg="teal" type="submit">Lisää</Button>
            </FormControl>
            </form>
            </Box>
        </Flex>
        </>
    )
}
export default CreateEventForm