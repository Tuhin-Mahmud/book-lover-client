import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabsDetails = () => {

    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className='mt-10 mx-auto text-center '>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Description</Tab>
                    <Tab>Additional Information</Tab>
                    <Tab>Reviews(2)</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default TabsDetails;