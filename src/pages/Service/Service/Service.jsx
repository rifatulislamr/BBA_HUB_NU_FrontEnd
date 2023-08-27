import { Helmet } from "react-helmet-async";
import CoverPageShare from "../../Shared/CoverPageShare/CoverPageShare";
import courseImg from '../../../assets/menu/banner3.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import useCourse from "../../../hooks/useHooks";
import CourseDetailsTab from "../../../components/SectionTitle/CourseDetails/CourseDetailsTab/CourseDetailsTab";


const Service = () => {

    useEffect(() => {
        // Scroll to the top-left corner (0,0) when the HomePage component is mounted
        window.scrollTo(0, 0);
      }, []);


    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useCourse();
    
    
    const bba = menu.filter(item => item.category === 'bba');
    const mba = menu.filter(item => item.category === 'mba');
    const degree = menu.filter(item => item.category === 'degree');
    const fourthYear = menu.filter(item => item.category === 'mba');
    

    return (
        <div>
            <Helmet>
                <title>BBA HUB | Service </title>
            </Helmet>
            <CoverPageShare img={courseImg} title= "Services" ></CoverPageShare>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                     <TabList className="text-center mt-4 mb-4 space-x-5 text-amber-50 font-bold rounded-lg">
                        <Tab>First Year</Tab>
                        <Tab> Second Year</Tab>
                        <Tab>Third Year</Tab>
                        <Tab>Fourth Year</Tab>
                       
                    </TabList>
                        <TabPanel>
                            <CourseDetailsTab items={bba}></CourseDetailsTab>
                        </TabPanel>
                        <TabPanel> 
                        <CourseDetailsTab items={mba}></CourseDetailsTab>
                        </TabPanel>
                        <TabPanel>
                        <CourseDetailsTab items={degree}></CourseDetailsTab>
                        </TabPanel>
                        <TabPanel>
                        <CourseDetailsTab items={fourthYear}></CourseDetailsTab>
                        </TabPanel>
                    
                    </Tabs>
        </div>
    );
};

export default Service;