import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <div className="max-w-md relative  border rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700" role="alert">
  <div className="flex p-4">
    
    <div className="ms-4 me-5">
      <h3 className="text-zinc-950 font-sans text-2xl dark:text-white">
        <span className="font-semibold">Hi,</span>
        <br />
        <span className="bg-clip-text uppercase text-transparent bg-gradient-to-r from-pink-500 from-10% via-red-500 via-30% to-yellow-500 to-90%">
    I'm Ajithkumar
  </span>
        <br />A web developer
      </h3>
      <div className="mt-1 text-xl text-gray-800 dark:text-gray-400">
        Nice to meet you!
      </div>
      
    </div>
  </div>
</div>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Still a fresher <br /> and willing to contribute and improve my skills.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Built multiple projects to gain knowledge over the years. <br /> Here are some of my projects..
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' classNameName='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Here are my contact details. <br/> Feel free to approach.
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo