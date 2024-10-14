// import { useState } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import useTopBooks from '../../hook/useTopBooks';

// const TabsDetails = () => {
//     const [topBooks, isLoading] = useTopBooks()
//     console.log(topBooks);
//     const [tabIndex, setTabIndex] = useState(0);
//     return (
//         <div className='mt-10 mx-auto '>
//             <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
//                 <TabList>
//                     <Tab>Description</Tab>
//                     <Tab>Additional Information</Tab>
//                     <Tab>Reviews(2)</Tab>
//                 </TabList>
//                 <TabPanel>
//                     {
//                         topBooks.map(book => (book.description,

//                             book.long_description

//                         ))
//                     }
//                 </TabPanel>
//                 <TabPanel>

//                 </TabPanel>
//             </Tabs>
//         </div>
//     );
// };

// export default TabsDetails;