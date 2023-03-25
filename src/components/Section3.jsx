const Section3 = () => {
  return (
    <>
      <section>
        <div>
          <h3 className="text-3xl py-1 dark:text-teal-500 font-bold">
            Projects
          </h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
            My portfolio showcases some of the personal projects I've worked on,
            the project highlights my skills in UI/UX design, front-end
            development, and problem-solving.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
            If you're interested in working with me on your next project, don't
            hesitate to get in touch! I'm always open to new opportunities and
            I'd be happy to discuss how I can help you achieve your goals. Thank
            you for visiting my portfolio website, and I hope you enjoy
            exploring my work!
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1">
            <div className="transform hover:scale-110 transition ease-out duration-300 cursor-pointer">
              <a href="https://yummy-recipes123.onrender.com">
                <img
                  src="/screenshot.png"
                  alt="web1"
                  className="rounded-lg object-cover"
                />
              </a>
            </div>
          </div>
          <div className="basis-1/3 flex-1">
            <div className="transform hover:scale-110 transition ease-out duration-300 cursor-pointer">
              <a href="https://bujutunes.onrender.com/">
                <img
                  src="/screenshot2.jpg"
                  alt="web1"
                  className="rounded-lg object-cover"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="text-sm text-teal-600 py-5 flex gap-5 justify-center">
          <p>Email: <a href="mailto:luqmantazmid123@gmail.com">luqmantazmid123@gmail.com</a> </p>
          <p>Call: <a href="tel:+256773598861">+256773598861</a> </p>
        </div>
      </footer>
    </>
  );
};

export default Section3;
