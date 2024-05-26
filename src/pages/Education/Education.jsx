import React from 'react';

const Education = () => {
  return (
    <div className="flex flex-col text-left pt-10 bg-black h-full m-auto w-[100%] ">
      <h1 className="text-[3.8rem] text-white font-bold relative ml-5">
        <span className="text-[4.2rem] text-orange-500">E</span>XPERIENCE
        <div className="absolute bottom-0 left-0 pl-10 w-[180%] sm:w-[55%] h-1 bg-orange-500  transform -translate-x-[50%]"></div>
      </h1>

      <div className="text-white mt-4 pt-4 sm:p-4  ">
        {/*INK REVENUE */}
        <div className="h-[600px] w-[100%] p-[1rem] pr-4 sm::h-[500px] sm:w-[700px] sm:ml-20 sm:pl-20 sm:pt-20 sm:border sm:border-b sm:shadow-md sm:border-orange-500  ">
          <div className="flex justify-between ">
            <h1 className="text-[1.4rem]">
              <span className="text-[1.6rem] text-orange-500">I</span>NK{' '}
              <span className="text-[1.6rem] text-orange-500">R</span>EVENUE{' '}
              <span className="text-[1.4rem] text-orange-500">
                (FULL STACK DEVELOPER)
              </span>
            </h1>
            <p className="text-[1.3rem] mr-8">2021-2022</p>
          </div>
          <div className="h-[300px] w-[94%] sm:h-[450px] sm:w-[550px] mt-5">
            <div>
              <p className="tracking-wide leading-relaxed font-roboto mb-2">
                <span className="text-[1.2rem]">1).</span> Spearheaded dynamic
                user interface (UI) development using{' '}
                <span className="text-[1.4rem] text-orange-500">React.js</span>,
                resulting in a 20% improvement in user engagement.
              </p>
            </div>

            <div>
              <p className="tracking-wide leading-relaxed font-roboto text-[1.2rem] mb-2">
                <span className="text-[1.2rem]">2).</span> Developed visually
                appealing and responsive web applications using{' '}
                <span className="text-[1.4rem] text-orange-500">HTML5</span>,{' '}
                <span className="text-[1.4rem] text-orange-500">CSS3</span>, and{' '}
                <span className="text-[1.4rem] text-orange-500">
                  JavaScript
                </span>
                , ensuring optimal performance across devices.
              </p>
            </div>

            <div>
              <p className="tracking-wide leading-relaxed font-roboto mb-2">
                <span className="text-[1.2rem]">3).</span>Enhanced data
                manipulation capabilities by 30% through implementation of{' '}
                <span className="text-[1.4rem] text-orange-500">
                  RESTful APIs
                </span>
                .
              </p>
            </div>

            <div>
              <p className="tracking-wide leading-relaxed font-roboto mb-2">
                <span className="text-[1.2rem]">4).</span> Bridged the
                frontend-backend gap, collaborating with developers to deliver
                seamless application functionality. Leveraged strong
                problem-solving skills to efficiently identify and resolve
                technical challenges.
              </p>
            </div>
          </div>
        </div>
        {/*WordPressSolutionss */}
        <div className="h-[700px] w-[100%] p-[1rem] mt-[1rem] sm:ml-[40rem] sm:p-[1rem] pr-4 mr-[600px] sm:w-[700px] sm:pl-20 sm:pt-20 sm:border sm:border-b sm:shadow-md sm:border-orange-500 ">
          <div className="flex justify-between  ">
            <h1 className="text-[1.4rem]">
              <span className="text-[1.6rem] text-orange-500">W</span>ORDPRESS{' '}
              <span className="text-[1.6rem] text-orange-500">S</span>OLUTIONSS{' '}
              <span className="text-[1.4rem] text-orange-500">
                (FULL STACK DEVELOPER)
              </span>
            </h1>
            <p className="text-[1.3rem] mr-8">2022-2024</p>
          </div>
          <div className="h-[400px] w-[94%] sm:h-[450px] sm:w-[550px] mt-5">
            <div className="mb-4 pb-2">
              <p className="tracking-wide leading-relaxed font-roboto">
                <span className="text-[1.2rem]">1).</span> Successfully
                completed numerous freelance projects for reputable clients
                including{' '}
                <span className="text-[1.4rem] text-orange-500">
                  WordPress Solution
                </span>
                ,{' '}
                <span className="text-[1.4rem] text-orange-500">
                  Guranank Roadlines
                </span>
                , and various other companies.
              </p>
            </div>

            <div className="mb-4 pb-2">
              <p className="tracking-wide leading-relaxed font-roboto">
                <span className="text-[1.2rem]">2).</span>Utilized advanced{' '}
                <span className="text-[1.4rem] text-orange-500">React</span>{' '}
                techniques to optimize website performance, resulting in a 40%
                reduction in load times and enhancing overall user experience.
              </p>
            </div>

            <div className="mb-4  pb-2">
              <p className="tracking-wide leading-relaxed font-roboto">
                <span className="text-[1.2rem]">3).</span>Proactively refactored
                codebase to enhance maintainability and scalability.,and
                provided expert technical guidance throughout the development
                lifecycle.
              </p>
            </div>
            <div className="mb-8 ">
              <p className="tracking-wide leading-relaxed font-roboto">
                <span className="text-[1.2rem]">4).</span> Proactively
                refactored codebase to enhance maintainability and scalability.
                Collaborated closely with clients to comprehensively understand
                their needs, achieving a{' '}
                <span className="text-[1.4rem] text-orange-500">
                  95% Satisfaction Rate
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
