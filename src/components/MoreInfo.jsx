import Extras from './Extras';
import SkillsRequired from './SkillsRequired';

const MoreInfo = () => {
  return (
    <div className='border-b w-[1318px] h-[179.5px] pl-[100px] pt-[2rem] flex'>
      <SkillsRequired />
      <Extras />
    </div>
  );
};

export default MoreInfo;
