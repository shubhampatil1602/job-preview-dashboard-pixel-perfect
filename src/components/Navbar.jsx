const Navbar = () => {
  return (
    <>
      <div className='w-[92rem] h-[6.875rem] bg-white border-b flex pl-10 pr-6 items-center fixed top-0'>
        <div className='w-[104rem] h-[3.8125rem] flex justify-between'>
          <div className='bg-[#E7E7E7] h-[3.8125rem] w-[6.25rem] flex justify-center items-center'>
            <span className='text-[#DC4A2D] text-xl bg-[#E7E7E7] -tracking-normal font-medium'>
              Logo
            </span>
          </div>

          <div className='w-[33.625rem] h-[4.625rem] border rounded-full flex justify-between p-2 relative bottom-1.5'>
            <button className='rounded-full border-2 border-[#fcb4a5] bg-[#dc4a2d] text-white flex justify-center items-center gap-1.5 py-3 px-4'>
              <img src='/jobs.png' alt='jobs' className='w-6 h-6' />
              <span className='text-xl tracking-[1px]'>Jobs</span>
            </button>

            <button className='flex justify-center items-center py-3 '>
              <img
                src='/message.png'
                alt='messages'
                className='w-[24px] h-[24px]'
              />
              <span className='text-red-600 text-3xl relative bottom-2.5 right-2.5'>
                •
              </span>
              <span className='text-[#B0B0B0] text-xl'>Messages</span>
            </button>

            <button className='flex justify-center items-center gap-2 py-3 px-4 pr-4'>
              <img src='/payments.png' alt='payments' className='w-6 h-6' />
              <span className='text-[#B0B0B0] text-xl tracking-wide'>
                Payments
              </span>
            </button>
          </div>

          <div className=' h-[3.75rem] flex justify-center items-center '>
            <img
              src='/ghanta.png'
              alt='bell'
              className='w-8 h-[32px] mt-[3px] object-contain'
            />
            <span className='text-red-600 text-3xl relative bottom-3.5 right-4'>
              •
            </span>
            <div className='flex justify-center items-center gap-2'>
              <img src='/atlassian2.png' alt='atlassian' className='w-8 h-8' />
              <img
                src='/down.png'
                alt='down'
                className='h-2 w-3 object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

const Middle = () => {
  return (
    <div className='border rounded-3xl p-2 w-[33.625rem] h-[1.0625rem]'></div>
  );
};
