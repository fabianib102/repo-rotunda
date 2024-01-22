import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Box, Button, Container, TextField } from '@mui/material';
import useUrlExtractor from '../hooks/useUrlExtractor';

const UrlComponent = () => {

    const { urlInstance, setUrlInstance, result, extractVariables } = useUrlExtractor('/:version/api/:collection/:id');

    return (
        <Card>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    We need some logic that extracts the variable parts of a url into a hash. The keys
                    of the extract hash will be the "names" of the variable parts of a url, and the
                    values of the hash will be the values. We will be supplied with:

                    1. A url format string, which describes the format of a url. A url format string
                    can contain constant parts and variable parts, in any order, where "parts"
                    of a url are separated with "/". All variable parts begin with a colon. Here is
                    an example of such a url format string:

                    <Stack sx={{ width: '25%', padding: '20px' }} spacing={2}>
                        <Alert icon={false} severity="info">'/:version/api/:collection/:id'</Alert>
                    </Stack>

                    2. A particular url instance that is guaranteed to have the format given by
                    the url format string. It may also contain url parameters. For example,
                    given the example url format string above, the url instance might be:

                    <Stack sx={{ width: '25%', padding: '20px' }} spacing={2}>
                        <Alert icon={false} severity="info">'/6/api/listings/3?sort=desc&limit=10'</Alert>
                    </Stack>

                    Given this example url format string and url instance, the hash we want that
                    maps all the variable parts of the url instance to their values would look like this:

                    <Stack sx={{ width: '25%', padding: '20px' }} spacing={2}>
                        <Alert icon={false} severity="info">Object</Alert>
                    </Stack>

                    Please implement a solution to this problem in JavaScript with attention to code
                    structure and readability. Feel free to use low-level libraries like Lodash.

                </Typography>
            </CardContent>
            <CardActions>
                <Container>
                    <h1>Solution</h1>
                    <Box>
                        <h1>URL Format: '/:version/api/:collection/:id'</h1>
                        
                        <Stack direction="row" spacing={2}>
                            <TextField 
                                type="text" 
                                id="urlInstance"
                                label="URL Instance:"
                                variant="outlined" 
                                placeholder='type the URL here' 
                                value={urlInstance} 
                                onChange={(e) => setUrlInstance(e.target.value)}/>

                            <Button variant="contained" onClick={extractVariables}>Extract Variables</Button>
                        </Stack>

                        {result && 
                            <>
                                <h2>Result:</h2>
                                <pre>{JSON.stringify(result, null, 2)}</pre>
                            </>
                        }
                    </Box>
                </Container>
            </CardActions>
        </Card>
    );
  }
  
  export default UrlComponent;