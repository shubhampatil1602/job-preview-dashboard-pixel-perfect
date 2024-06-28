const JobPosition = () => {
  return (
    <div className='border-b w-[1318px] h-[166.5px] pl-[100px] pt-[34px] flex flex-col gap-4'>
      <div className='flex gap-x-3'>
        <h1 className='font-semibold text-[35px] tracking-[0.030em] text-[#3d3d3d] '>
          Senior Product Designer
        </h1>

        <div className='flex items-center'>
          <p className='w-[400px] flex items-center'>
            <span className='mr-3 mb-2.5'>
              <span className='mr-2 text-2xl text-[#D1D1D1]'>·</span>{' '}
              <span className='font-sans font-light text-sm tracking-[-0.020em] text-[#888888]'>
                posted 2 days ago
              </span>
            </span>
            <span className='text-[12px] px-[5px] py-[0.2px] bg-green-50 text-green-700 border border-green-300 rounded-2xl flex gap-1'>
              <img
                src='/Dot.png'
                className='object-contain mr-[0.20rem]'
                alt='dot'
              />
              <span className='font-sans tracking-[-0.020em]'>Open</span>
            </span>
          </p>
        </div>
      </div>
      <div className='flex gap-3 text-[18px] mt-[0.22rem] ml-[0.19rem]'>
        <h3 className='text-[#5D5D5D] flex gap-2 justify-center items-center text-[20px]'>
          <span>
            <img src='/Icon.png' alt='icon' className='h-[22px] mr-1' />
          </span>
          <span className='tracking-[0.02em] font-normal'>Delaware, USA</span>
        </h3>
        <span className='ml-1 text-2xl text-[#D1D1D1]'>·</span>{' '}
        <h3 className='text-[#5D5D5D] px-1 flex gap-3 justify-center items-center'>
          <img src='/coins-stacked-03.png' alt='db' className='h-[25px]' />
          <span className='tracking-[0.04em] font-normal'>$300k-$400k</span>
        </h3>
      </div>
    </div>
  );
};

export default JobPosition;
