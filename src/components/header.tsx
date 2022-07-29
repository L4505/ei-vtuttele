import {   
    Flex, 
    Heading, 
    Box, 
    Button, 
    Spacer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Portal
  } from '@chakra-ui/react'
  import { HamburgerIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
  
function Header() {

    return (
        <Flex borderBottom="4px solid teal">
          <Box p="6" color="gray.900" bg="white">
            <Link to="/">
              <Heading size="2xl" letterSpacing="tighter">Ei v*tuttele</Heading>
            </Link>  
          </Box>
          <Spacer />
          <Box p="6">
            <Menu isLazy>
              <MenuButton
              bg="teal"
                p="2"
                as={IconButton}
                aria-label='Menu'
                icon={<HamburgerIcon color="white"/>}
                variant='solid'
                size="lg"
              />
              <Portal>
                <MenuList>
                  {/* MenuItems are not rendered unless Menu is open */}
                  <MenuItem>Omat tiedot</MenuItem>
                  <MenuItem>Kirjaudu ulos</MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
    )
}

export default Header