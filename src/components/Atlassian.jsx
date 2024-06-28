const Atlassian = () => {
  return (
    <div className='pl-[100px] pt-[2.64em] mb-10 w-[1318px]'>
      <div className='flex items-center gap-3'>
        <img src='atlassian.png' alt='atlassian' />
        <p className='text-[#4f4f4f] text-xl tracking-[0.045em]'>Atlassian</p>
      </div>
      <div className='mt-7 flex gap-[6.6875rem]'>
        <div className='flex flex-col gap-[1.4375rem]'>
          <CompanyDetails
            title='Company size'
            description='1k - 2k Employees'
            classNames={'text-[#3d3d3d] text-base tracking-[-0.3px] font-sans'}
          />
          <CompanyDetails
            title='Sector'
            description='Information Technology, Infrastructure'
            classNames={'text-[#3d3d3d] text-base tracking-[0.013em]'}
          />
          <CompanyDetails
            title='Founded In'
            description='2019'
            classNames={
              'text-[#3d3d3d] text-base tracking-[-0.1px] text-[15px]'
            }
          />
        </div>
        <div className='flex flex-col gap-[1.4375rem]'>
          <CompanyDetails
            title='Type'
            description='Private'
            classNames={'text-[#3d3d3d] text-base tracking-[0.013em]'}
          />
          <CompanyDetails
            title='Funding'
            description='Bootstrapped'
            classNames={'text-[#3d3d3d] text-base tracking-[0.013em]'}
          />
          <CompanyDetails
            title='Founded By'
            description='Scott Farquhar, Mike Cannon-Brookes'
            classNames={'text-[#3d3d3d] text-base tracking-[0.013em]'}
          />
        </div>
      </div>
    </div>
  );
};

export default Atlassian;

const CompanyDetails = ({ title, description, classNames }) => {
  return (
    <div className='flex flex-col gap-[0.320rem]'>
      <h3 className='text-[#6e6d6d] text-sm'>{title}</h3>
      <p className={`${classNames}`}>{description}</p>
    </div>
  );
};
