import AboutTheJob from './AboutTheJob';
import Atlassian from './Atlassian';
import JobPosition from './JobPosition';
import MoreInfo from './MoreInfo';
import SideBar from './SideBar';

const GridSection = () => {
  return (
    <div className='w-[1728px] flex'>
      {/* h-[1728px] */}
      <div className='w-[1318px]'>
        <JobPosition />
        <MoreInfo />
        <AboutTheJob />
        <Atlassian />
      </div>
      <SideBar />
    </div>
  );
};

export default GridSection;
