import Turfloweb1 from '../../../public/Turflo Web1.png';
import Turfloweb2 from '../../../public/Turflo Web2.png';
import Turfloweb3 from '../../../public/Turflo Web3.png';
import Vector from '../../assets/icons/Vector.png';
import Game from '../../assets/icons/Game.png';
import Group from '../../assets/icons/Group.png';


const Detail = () => {
    return (
        <div className="relative flex flex-col w-full">
            <div className="sm:hidden bg-[#FF7018] px-5 py-[20px] w-full">
                <h2 className="font-normal text-center text-[60px] text-white leading-[100%] mb-4 font-weight: 400">
                    HOW DOES IT WORK?
                </h2>
                <p className="font-normal text-center text-[14px] text-white leading-[140%]">
                    Getting you off the couch and taking you out for an adventure. Find <span className="font-semibold text-[#1E293B]">matches</span> happening right now near you.
                </p>
            </div>

            <div className="hidden sm:block absolute top-[56px] left-1/2 transform -translate-x-1/2 -translate-y-0 text-center z-10 w-full px-4">
                <h2 className="font-normal text-center text-[55px] md:text-[76px] xl:text-[96px] text-white leading-[100%] mb-4">
                    HOW DOES IT WORK?
                </h2>
                <p className="font-normal text-center text-[14px] md:text-[16px] xl:text-[20px] text-white mx-auto">
                    Getting you off the couch and taking you out for an adventure. Find <span className="font-semibold text-[#FF7018]">matches</span> happening right now near you.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row w-full">
                <div className="relative w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
                    <div className="h-[373px] sm:h-full">
                        <img
                            src={Turfloweb1}
                            alt="Turflo Web 1"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2">
                        <div className="bg-[#FF7018] rounded-full w-[90px] h-[90px] flex items-center justify-center">
                            <img src={Vector} />
                        </div>
                    </div>
                    <div className="absolute bottom-15 left-0 w-full text-center py-6">
                        <p className="font-medium text-2xl text-white">Join a Game</p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-[67px] bg-[#FF7018] items-center justify-center sm:block hidden">
                        <p className="font-normal text-[36px] lg:text-[40px] xl:text-[45px] text-center text-white">PLAY EASY!</p>
                    </div>
                </div>

                <div className="relative w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
                    <div className="h-[373px] sm:h-full">
                        <img
                            src={Turfloweb2}
                            alt="Turflo Web 2"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2">
                        <div className="bg-[#FF7018] rounded-full w-[90px] h-[90px] flex items-center justify-center">
                            <img src={Game} />
                        </div>
                    </div>
                    <div className="absolute bottom-15 left-0 w-full text-center py-6">
                        <p className="font-medium text-2xl text-white">Host a Game</p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-[67px] bg-[#FF7018] items-center justify-center sm:block hidden">
                        <p className="font-normal text-[36px] lg:text-[40px] xl:text-[45px] text-center text-white">PLAY OFTEN!</p>
                    </div>
                </div>

                <div className="relative w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
                    <div className="h-[373px] sm:h-full">
                        <img
                            src={Turfloweb3}
                            alt="Turflo Web 3"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2">
                        <div className="bg-[#FF7018] rounded-full w-[90px] h-[90px] flex items-center justify-center">
                            <img src={Group} />
                        </div>
                    </div>
                    <div className="absolute bottom-15 left-0 w-full text-center py-6">
                        <p className="font-medium text-2xl text-white">Host a Tournament</p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-[67px] bg-[#FF7018] items-center justify-center sm:block hidden">
                        <p className="font-normal text-[36px] lg:text-[40px] xl:text-[45px] text-center text-[#1E293B]">PLAY TURFLO!</p>
                    </div>
                </div>
            </div>

            <div className="sm:hidden bg-[#FF7018] h-[67px] flex items-center justify-center">
                <p className="font-normal text-[36px] text-center text-white">PLAY EASY!</p>
            </div>
            <div className="sm:hidden bg-[#FF7018] h-[67px] flex items-center justify-center">
                <p className="font-normal text-[36px] text-center text-white">PLAY OFTEN!</p>
            </div>
            <div className="sm:hidden bg-[#FF7018] h-[67px] flex items-center justify-center">
                <p className="font-normal text-[36px] text-center text-[#1E293B]">PLAY TURFLO!</p>
            </div>
        </div>
    );
};

export default Detail;