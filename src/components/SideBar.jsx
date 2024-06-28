const SideBar = () => {
  return (
    <div className='bg-[#fcfcfc] border-x border-b shadow-sm shadow-[#cdcccc] w-full pl-[25px] py-[34px]'>
      <div className='flex gap-[0.9rem]'>
        <Button
          title={'Delete job'}
          icon={'trash-03.png'}
          divClass={'bg-[#fef4f2] text-[#dc4a2d] border-[#dc4a2d] gap-1.5'}
        />
        <Button
          title={'Edit job'}
          icon={'edit-02.png'}
          divClass={'bg-[#dc4a2d] text-white border-[#fac0b4] gap-x-[0.90rem]'}
        />
      </div>
      <div className='flex flex-col mt-[3px] pt-[35px] gap-[16px] items-center h-[291px] w-[360px]'>
        <Tab icon={'applicants.png'} text={'Applicants'} num={400} />
        <hr className='border-[0.5px] w-11/12' />
        <Tab icon={'matches.png'} text={'Matches'} num={100} />
        <hr className='border-[0.5px] w-11/12' />
        <Tab icon={'messages.png'} text={'Messages'} num={147} />
        <hr className='border-[0.5px] w-11/12' />
        <Tab icon={'views.png'} text={'Views'} num={800} />
      </div>
    </div>
  );
};

export default SideBar;

const Tab = ({ icon, text, num }) => {
  return (
    <div className='flex justify-between items-center w-[336px] h-[42px] p-2'>
      <span className='flex items-center justify-center gap-3'>
        <img src={icon} className='h-5 w-5' alt='icon' />
        <p className='text-[#4f4f4f] tracking-normal font-normal'>{text}</p>
      </span>
      <h3 className='text-lg font-bold pr-[5px] tracking-[0.025em]'>{num}</h3>
    </div>
  );
};

const Button = ({ divClass, title, icon }) => {
  return (
    <div
      className={`${divClass} flex justify-center items-center  border rounded-lg w-[172px] h-[46px]`}
    >
      <img src={icon} alt='icon' />
      <p className=''>{title}</p>
    </div>
  );
};
