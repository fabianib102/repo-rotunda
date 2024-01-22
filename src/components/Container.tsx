import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ZooComponent from './ZooComponent';
import UrlComponent from './UrlComponent';

const ContainerBox = () => {
    
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 3 }}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Zoo Exercise" value="1" />
                        <Tab label="URL Parser Exercise" value="2" />
                    </TabList>
                    </Box>
                    <TabPanel value="1">
                        <ZooComponent/>
                    </TabPanel>
                    <TabPanel value="2">
                        <UrlComponent/>
                    </TabPanel>
                </TabContext>
                </Box>
            </Box>
        </React.Fragment>
      );
  }
  
  export default ContainerBox;
  