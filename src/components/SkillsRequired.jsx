const SkillsRequired = () => {
  return (
    <div className='text-xs text-[#6e6d6d] flex flex-col gap-[0.700rem]'>
      <h1 className='text-[13px] font-medium tracking-wide'>Skills Required</h1>
      <div className='flex gap-1 w-[70px] border border-[#cfcece] pl-1.5 py-[0.150rem] rounded-lg'>
        <img src='/figma.png' alt='figma' className='object-contain w-4' />
        <span className='text-gray-800'>Figma</span>
      </div>
      <div className='flex gap-1 border-[#cfcece] w-[129px] border px-1 py-[0.150rem] rounded-lg'>
        <img src='/Ai.png' alt='Ai' className='object-contain w-4' />
        <span className='text-gray-800'>Adobe Illustrator</span>
      </div>
      <div className='flex gap-1 border-[#cfcece] w-[89px] border px-1 py-[0.150rem] rounded-lg'>
        <img src='/Xd.png' alt='Xd' className='object-contain w-4' />
        <span className='text-gray-800'>Adobe XD</span>
      </div>
    </div>
  );
};

export default SkillsRequired;
