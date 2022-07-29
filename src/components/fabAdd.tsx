import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import { AddIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const FabAdd = () => {
    return (
        <Link to="/new-event">
        <Fab
              mainButtonStyles={{
                backgroundColor: 'teal',
              }}
              style={{
                bottom: 0,
                right: 0,
              }}
              icon={<AddIcon />}
              event="hover"
              key={-1}
              alwaysShowTitle={false}
              
              onClick={() =>{console.log('oujee')}}
              
              //text="Lisää tapahtuma"
            />
            </Link>
        
    );
};
export default FabAdd