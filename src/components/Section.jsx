const Section = () => {
  return (
    <div className='mt-[6.875rem] h-[66.5px] w-[1728px] border-b-2 pl-[100px] flex gap-[4.5813rem]'>
      <div className=''>
        <SubSection
          text='Job preview'
          classNames={
            'font-semibold text-xl tracking-wide text-[#dc4a2d] pt-[1.2rem] pb-[0.9rem]'
          }
        />
        <hr className='border-b-2 border-b-[#dc4a2d] w-[4.1rem] mx-auto' />
      </div>
      <SubSection
        text='Applicants'
        classNames={'font-normal text-xl tracking-[0.04em] text-[#888888] py-5'}
      />
      <SubSection
        text='Match'
        classNames={'font-normal text-xl tracking-wide text-[#888888] py-5'}
      />
      <SubSection
        text='Messages'
        classNames={'font-normal text-xl tracking-wide text-[#888888] py-5'}
      />
    </div>
  );
};

export default Section;

const SubSection = ({ text, classNames }) => {
  return <h2 className={`${classNames}`}>{text}</h2>;
};
