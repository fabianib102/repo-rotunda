import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Box, Container } from '@mui/material';
import { Lion } from '../interfaces/Lion';
import { Tiger } from '../interfaces/Tiger';

const ZooComponent = () => {

    const lion = new Lion();
    const tiger = new Tiger();

    const lionSpeech = lion.speak("I'm a lion");
    const tigerSpeech = tiger.speak("Lions suck");

    return (
        <Card>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    We are building a zoo inside a computer. Each animal species in our zoo has lots
                    of different, particular, behaviors, but all animals talk to each other in a similar
                    way. Specifically, they all implement a speak method, the output of which is the
                    arbitrary input string interspersed with an "animal sound" that is particular to that
                    type of animal. For example, the lion's speak function behaves like so:
                    <Stack sx={{ width: '25%', padding: '20px' }} spacing={2}>
                        <Alert icon={false} severity="info">{'>'} lion.speak( "I'm a lion" );</Alert>
                        <Alert icon={false} severity="info">{'<'} "I'm roar a roar lion roar"</Alert>
                    </Stack>
                    The tiger's speak function behaves similarly but with a different sound:
                    <Stack sx={{ width: '25%', padding: '20px' }} spacing={2}>
                        <Alert icon={false} severity="info">{'>'} tiger.speak( "Lions suck" );</Alert>
                        <Alert icon={false} severity="info">{'<'} "Lions grrr suck grrr"</Alert>
                    </Stack>
                </Typography>
            </CardContent>
            <CardActions>
                <Container>
                    <h1>Solution</h1>
                    <Box>
                        <p>Lion says: {lionSpeech}</p>
                        <p>Tiger says: {tigerSpeech}</p>
                    </Box>
                </Container>
            </CardActions>
        </Card>
    );
}

export default ZooComponent;
