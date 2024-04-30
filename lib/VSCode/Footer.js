import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
      <div className="mt-10 lg:ml-80 h-max pb-10 lg:px-20  lg:py-16 flex background-400 flex-col items-center justify-between lg:flex-row footer">
        <div className=" h-1/2 px-8 py-10 lg:py-0 lg:px-0 lg:h-full flex flex-col justify-between lg:w-2/3">
          <h3 className="font-300 text-100 text-lg leading-loose lg:leading-normal">
            SFU Computing Science Student Society
          </h3>
          <h3 className="font-200 text-white text-lg text-opacity-30 mt-4">
            All rights reserved 2024 ©
          </h3>
          <h3 className="font-200 text-white text-lg text-opacity-30 mt-0">
            Developed and designed by students in 2024.
          </h3>
        </div>
        <div className=" h-1/2 w-full text-right lg:h-full px-8 lg:w-1/2 flex flex-row justify-start  lg:ml-8 gap-20 lg:justify-end lg:gap-20">
          <div className="flex flex-col gap-1">
            <h2 className="text-left lg:text-right text-white font-200 text-opacity-50 mb-3">
              Connect
            </h2>
            <a href="https://www.linkedin.com/company/sfucsss/" target="_blank">
              <h2 className="text-left lg:text-right text-white font-300 text-opacity-90">
                linkedin ↗
              </h2>
            </a>
            <a href="https://github.com/CSSS" target="_blank">
              <h2 className="text-left lg:text-right text-white font-300 text-opacity-90">
                github ↗
              </h2>
            </a>
            <a href="https://discord.gg/RHwyqZg7" target="_blank">
              <h2 className="text-left lg:text-right text-white font-300 text-opacity-90">
                discord ↗
              </h2>
            </a>
            <a href="https://www.instagram.com/sfu_csss/" target="_blank">
              <h2 className="text-left lg:text-right text-white font-300 text-opacity-90">
                instagram ↗
              </h2>
            </a>
            <a href="https://twitter.com/sfucsss?lang=en" target="_blank">
              <h2 className="text-left lg:text-right text-white font-300 text-opacity-90">
                twitter ↗
              </h2>
            </a>
          </div>
        </div>
      </div>
      <div className="lg:ml-72 lg:pl-4 background-400 pb-8">
        <p className="px-8 lg:px-0 lg:ml-24 mr-6 lg:mr-32 text-gray-500 text-opacity-40">
          Disclaimer: “Simon Fraser University”are registered trademarks of
          Simon Fraser University. This website is a student run website and is
          maintained, hosted, and operated independently of Simon Fraser
          University. The activities on this website are not supervised or
          endorsed by SFU and information contained on this website does not
          necessarily reflect the opinions or official positions of Simon Fraser
          University.
        </p>
      </div>
    </>
  );
};
