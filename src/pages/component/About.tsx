import HeroImg from '../../../public/turflo1.png';
import Phone from '../../../public/phone.png';
import PlayStore from '../../../src/assets/icons/Playstore.png';
import AppStore from '../../../src/assets/icons/App store.png';

interface AboutProps {
  id?: string;
}

const About = ({ id }: AboutProps) => {
  return (
    <section id={id}>
      <div className="relative w-full min-h-screen flex flex-col items-center md:flex-row md:items-center xl:flex-row xl:justify-center mt-[54px] md:mt-[72px] xl:mt-[53px] overflow-hidden">
        <div className="absolute inset-0 bg-[#000] opacity-50 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${HeroImg})` }}
        />

        <div className="container mx-auto flex flex-col items-center md:flex-row md:flex-wrap md:justify-center md:items-center xl:flex-nowrap xl:justify-center xl:items-center xl:max-w-7xl z-20 my-[54px] md:my-[72px] xl:my-[52px] xl:pb-[87px]">
          <div className="text-[#FFFFFF] mt-[54px] md:mt-0 xl:mt-0 text-center mx-auto md:text-right md:mr-[66px] md:flex-1 xl:mr-[75px]">
            <h1 className="text-[56px] font-semibold mb-[22px] leading-[95%] uppercase 
               md:text-[75px] 
               lg:text-[86px] 
               xl:text-[106px]">
              NO SQUAD? NO SWEAT.<br />
              WE'LL FIND YOU ONE.
            </h1>
            <p className="text-[14px] leading-[140%] mx-auto md:mx-0 
              md:text-[16px] 
              lg:text-[22px] 
              xl:text-[18px]">
              Hosting a match or just vibin' for a quick game?
              Turflo's the plug. No calls. No flaky DMs.
              Just show up and play.
            </p>
          </div>

          <div className="relative z-20 md:flex-shrink-0 md:m-[10px] lg:mt-[36px] xl:mt-[84px]">
            <img src={Phone} alt="Phone" className="w-[300px] md:w-[300px] lg:w-[350px] h-auto" />
          </div>

          <div className="flex flex-row gap-4 justify-center mx-auto pt-[20px] md:w-full md:justify-center md:mt-8 md:pb-8 xl:w-auto xl:flex-shrink-0 xl:ml-[36px] xl:mt-[52px] xl:pt-0 xl:pb-0">
            <div className="flex flex-row gap-4 justify-center xl:flex-col xl:gap-6">
              <a href="#" className="bg-white flex items-center gap-3 rounded-full border-2 border-[#0295B0] px-4 py-2">
                <div className="flex-shrink-0">
                  <img src={AppStore} alt="App Store" className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs">Download Now from</p>
                  <p className="text-sm text-[#1E293B] font-bold pl-2">APP STORE</p>
                </div>
              </a>

              <a href="#" className="bg-white flex items-center gap-3 rounded-full border-2 border-[#0295B0] px-4 py-2">
                <div className="flex-shrink-0">
                  <img src={PlayStore} alt="Play Store" className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs">Download Now from</p>
                  <p className="text-sm text-[#1E293B] font-bold pl-2">PLAY STORE</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;