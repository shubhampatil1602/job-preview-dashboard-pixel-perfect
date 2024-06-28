import GridSection from './GridSection';
import Navbar from './Navbar';
import Section from './Section';

const Dashboard = () => {
  return (
    <div className='w-[1728px]'>
      <Navbar />
      <Section />
      <GridSection />
    </div>
  );
};

export default Dashboard;
