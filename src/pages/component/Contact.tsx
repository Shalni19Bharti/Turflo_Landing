import Logo from '../../../public/turflo-logo.png';
import Facebook from '../../assets/icons/Facebook-B.png';
import Instagram from '../../assets/icons/Instagram-B.png';
import Linkdin from '../../assets/icons/Instagram-B.png';
import Twitter from '../../assets/icons/Twitter-B.png';

const Contact = () => {
  return (
    <div className="bg-[#18181B] text-white border-b border-[#FFFFFF]">
      <div className="flex justify-center items-center pt-[28px]">
        <img src={Logo} alt="Turflo Logo" className="h-auto w-auto" />
      </div>

      <footer className="pt-[28px] px-6">
        <div className="container mx-auto">
          {/* Mobile Layout (below 640px) */}
          <div className="max-w-[340px] mx-auto lg:hidden">
            <h6 className="text-[32px] text-center text-[#FF7018] font-semibold mb-4">Contact Us</h6>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  className="border border-[#9CA3AF] rounded-[10px] py-[15px] px-[27px] w-full text-[#9CA3AF] focus:outline-none focus:border-white"
                  placeholder="Full Name (Required)"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="border border-[#9CA3AF] rounded-[10px] py-[15px] px-[27px] w-full text-[#9CA3AF] focus:outline-none focus:border-white"
                  placeholder="Email Address (Required)"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  className="border border-[#9CA3AF] rounded-[10px] py-[15px] px-[27px] w-full text-[#9CA3AF] focus:outline-none focus:border-white"
                  placeholder="Phone Number"
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="border border-[#9CA3AF] rounded-[10px] py-[15px] px-[27px] w-full h-[110px] text-[#9CA3AF] focus:outline-none focus:border-white"
                  placeholder="Message / Inquiry Details (Required)"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#FF7018] text-[#FFFFFF] text-[18px] font-semibold py-3 px-6 rounded-[10px] hover:bg-[#e06a00] focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Mobile Footer Links (below 640px) */}
          <div className="flex flex-row sm:hidden pt-[30px] w-full">
            <div className="w-[calc(50%-6%)] px-[6%]">
              <h6 className="text-[20px] font-bold pb-[30px]">Quick Link</h6>
              <ul className="text-[16px] text-left">
                <li className="mb-[29px]"><a href="#" className="hover:text-white">Home</a></li>
                <li className="mb-[29px]"><a href="#" className="hover:text-white">About Us</a></li>
                <li className="mb-[29px]"><a href="#" className="hover:text-white">FAQ's</a></li>
                <li className="mb-[29px]"><a href="#" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div className="w-[calc(50%-6%)] px-[6%]">
              <h6 className="text-[20px] font-bold pb-[30px]">Other Link</h6>
              <ul className="text-[16px] text-left">
                <li className="mb-[29px]"><a href="#" className="hover:text-white">T&C</a></li>
                <li className="mb-[29px]"><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li className="mb-[29px]"><a href="#" className="hover:text-white">Testimonials</a></li>
              </ul>
            </div>
          </div>

          {/* Tablet Layout (640px - 1023px) */}
          <div className="hidden sm:flex lg:hidden flex-row justify-between gap-6 px-[8%]">
            <div className="w-1/3">
              <h6 className="text-[20px] font-bold pt-[30px] pb-[30px]">Quick Link</h6>
              <ul className="text-[16px] text-left">
                <li className="mb-[29px]"><a href="#" className="hover:text-white">Home</a></li>
                <li className="mb-[29px]"><a href="#" className="hover:text-white">About Us</a></li>
                <li className="mb-[29px]"><a href="#" className="hover:text-white">FAQ's</a></li>
                <li className="mb-[29px]"><a href="#" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div className="w-1/3">
              <h6 className="text-[20px] font-bold pt-[30px] pb-[30px]">Other Link</h6>
              <ul className="text-[16px] text-left">
                <li className="mb-[29px]"><a href="#" className="hover:text-white">T&C</a></li>
                <li className="mb-[29px]"><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li className="mb-[29px]"><a href="#" className="hover:text-white">Testimonials</a></li>
              </ul>
            </div>
            <div className="w-1/3">
              <h6 className="text-[16px] font-bold pt-[30px] pb-[19px]">Follow Us :</h6>
              <div className="flex items-center space-x-4">
                <img src={Twitter} alt="Twitter" className="h-6 w-6" />
                <img src={Facebook} alt="Facebook" className="h-6 w-6" />
                <img src={Instagram} alt="Instagram" className="h-6 w-6" />
                <img src={Linkdin} alt="Linkdin" className="h-6 w-6" />
              </div>
              <h6 className="text-[16px] font-bold text-[#FFFFFF] mt-[40px]">Mail : support@turflo.in , info@turflo.in</h6>
            </div>
          </div>

          {/* Desktop Layout (1024px and above) */}
          <div className="hidden lg:flex flex-row justify-between gap-6 px-[8%] pb-[43px]">
            <div className="w-1/3">
              <div>
                <h6 className="text-[20px] font-bold pt-[30px] pb-[30px]">Quick Link</h6>
                <ul className="text-[16px] text-left">
                  <li className="mb-[29px]"><a href="#" className="hover:text-white">Home</a></li>
                  <li className="mb-[29px]"><a href="#" className="hover:text-white">About Us</a></li>
                  <li className="mb-[29px]"><a href="#" className="hover:text-white">FAQ's</a></li>
                  <li className="mb-[29px]"><a href="#" className="hover:text-white">Contact Us</a></li>
                </ul>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-4">
                  <h6 className="text-[16px] font-bold">Follow Us :</h6>
                  <div className="flex items-center space-x-4">
                    <img src={Twitter} alt="Twitter" className="h-6 w-6" />
                    <img src={Facebook} alt="Facebook" className="h-6 w-6" />
                    <img src={Instagram} alt="Instagram" className="h-6 w-6" />
                    <img src={Linkdin} alt="Linkdin" className="h-6 w-6" />
                  </div>
                </div>
                <h6 className="text-[16px] font-bold text-[#FFFFFF] mt-[40px]">Mail : support@turflo.in , info@turflo.in</h6>
              </div>
            </div>
            <div className="w-1/3">
              <h6 className="text-[20px] font-bold pt-[30px] pb-[30px]">Other Link</h6>
              <ul className="text-[16px] text-left">
                <li className="mb-[29px]"><a href="#" className="hover:text-white">T&C</a></li>
                <li className="mb-[29px]"><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li className="mb-[29px]"><a href="#" className="hover:text-white">Testimonials</a></li>
              </ul>
            </div>
            <div className="w-1/3">
              <h6 className="text-[32px] text-center text-[#FF7018] font-semibold mb-4">Contact Us</h6>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    className="border border-[#9CA3AF] rounded-[10px] py-[15px] px-[27px] w-full text-[#9CA3AF] focus:outline-none focus:border-white"
                    placeholder="Full Name (Required)"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    className="border border-[#9CA3AF] rounded-[10px] py-[15px] px-[27px] w-full text-[#9CA3AF] focus:outline-none focus:border-white"
                    placeholder="Email Address (Required)"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    className="border border-[#9CA3AF] rounded-[10px] py-[15px] px-[27px] w-full text-[#9CA3AF] focus:outline-none focus:border-white"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="border border-[#9CA3AF] rounded-[10px] py-[15px] px-[27px] w-full h-[110px] text-[#9CA3AF] focus:outline-none focus:border-white"
                    placeholder="Message / Inquiry Details (Required)"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#FF7018] text-[#FFFFFF] text-[18px] font-semibold py-3 px-6 rounded-[10px] hover:bg-[#e06a00] focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Mobile Footer Bottom (below 640px) */}
          <div className="px-[6%] pb-[43px] sm:hidden">
            <div className='flex items-center space-x-4'>
              <h6 className="text-[16px] font-bold pt-[30px] pb-[19px] leading-6">Follow Us :</h6>
              <div className="flex items-center space-x-4 pt-[14px]">
                <img src={Twitter} alt="Twitter" className="h-6 w-6" />
                <img src={Facebook} alt="Facebook" className="h-6 w-6" />
                <img src={Instagram} alt="Instagram" className="h-6 w-6" />
                <img src={Linkdin} alt="Linkdin" className="h-6 w-6" />
              </div>
            </div>
            <h6 className="text-[16px] font-bold text-[#FFFFFF] mt-[24px]">Mail : support@turflo.in, info@turflo.in</h6>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;