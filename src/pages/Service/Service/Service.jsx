import { Helmet } from "react-helmet-async";
import CoverPageShare from "../../Shared/CoverPageShare/CoverPageShare";
import courseImg from '../../../assets/menu/banner3.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import useCourse from "../../../hooks/useHooks";
import CourseDetails from "../../../components/SectionTitle/CourseDetails/CourseDetails/CourseDetails";
import CourseDetailsTab from "../../../components/SectionTitle/CourseDetails/CourseDetailsTab/CourseDetailsTab";


const Service = () => {

    useEffect(() => {
        // Scroll to the top-left corner (0,0) when the HomePage component is mounted
        window.scrollTo(0, 0);
      }, []);


    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useCourse();
    
    
    const mba = menu.filter(item => item.category === 'mba');
    const degree = menu.filter(item => item.category === 'degree');
    const bba = menu.filter(item => item.category === 'bba');

    return (
        <div>
            <Helmet>
                <title>BBA HUB | Service </title>
            </Helmet>
            <CoverPageShare img={courseImg} title= "Services" ></CoverPageShare>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                     <TabList>
                        <Tab>BBA</Tab>
                        <Tab> MBA</Tab>
                        <Tab>DEGREE</Tab>
                       
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
                    
                    </Tabs>
        </div>
    );
};

export default Service;