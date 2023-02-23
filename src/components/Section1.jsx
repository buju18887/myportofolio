import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Section1 = (props) => {
  let isTrue = true;

  const onClick = () => {
    props.modeSet(isTrue ? (isTrue = false) : (isTrue = true));
  };

  return (
    <>
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
          <h1 className="text-xl font-extrabold text-teal-300">BUJUCODES</h1>
          <ul className="flex items-center">
            <li className="transform hover:scale-110 transition ease-out duration-300">
              <BsFillMoonStarsFill
                className="cursor-pointer text-2xl"
                onClick={onClick}
              />
            </li>
            <li className="transform hover:scale-110 transition ease-out duration-300">
              <a
                href="https://docs.google.com/document/d/1g8gy6595r3UDFJjEB_U95H3gRUrlVxr8TAv1cd4M0Ek/edit"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 "
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl text-teal-600 py-2 font-bold md:text-6xl dark:text-teal-400">
            Luqman Sserunjogi
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
            Frontend Developer
          </h3>
          <p className="text-base py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-xl mx-auto">
          Welcome to my portfolio website! I'm a frontend developer with experience in building high-quality websites and web applications that are both functional and visually appealing. Contact me and let's get to work!
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <a
            href="mailto:luqmantazmid123@gmail.com"
            className="transform hover:scale-125 transition ease-out duration-300"
          >
            <AiFillGoogleCircle />
          </a>
          <a
            href="https://linkedin.com/in/luqman-sserunjogi-b15b75266"
            className="transform hover:scale-125 transition ease-out duration-300"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/buju18887"
            className="transform hover:scale-125 transition ease-out duration-300"
          >
            <AiFillGithub />
          </a>
        </div>
        <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96">
          <img
            src="/buju12.png"
            alt="Me"
            className="object-cover w-full h-full"
          />
        </div>
      </section>
    </>
  );
};

export default Section1;
