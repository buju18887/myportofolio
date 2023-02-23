const Section2 = () => {
  return (
    <>
    <section>
        <div>
            <h3 className="text-3xl py-1 dark:text-teal-500 font-bold">Expertise</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
            My expertise lies in creating responsive, mobile-friendly designs that work seamlessly across different devices and browsers. I specialize in using modern web technologies such as HTML5, CSS3, TailwindCSS, JavaScript, and frameworks like React to develop dynamic and interactive user interfaces.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
            When working on a project, I prioritize communication and collaboration with my clients to ensure that their needs are met and that the end product exceeds their expectations. I'm passionate about staying up-to-date with the latest web development trends and best practices, and I'm always looking for new challenges and opportunities to learn and grow.
            </p>
        </div>
        <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white transform hover:scale-105 transition ease-out duration-300 w-1/3">
                <div className='flex justify-center'>
                <img src="/design.png" alt="design" width={100} height={100} />
                </div>
                <h3 className="text-lg pt-8 pb-2 font-bold">Beautiful Designs</h3>
                <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
                </p>
                
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white transform hover:scale-105 transition ease-out duration-300 w-1/3">
                <div className='flex justify-center'>
                <img src="/code.png" alt="design" width={100} height={100} />
                </div>
                <h3 className="text-lg pt-8 pb-2 font-bold">Code your dream project</h3>
                <p className="py-2">
                Do you have a project idea? Let's make it happen.
                </p>
                
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white transform hover:scale-105 transition ease-out duration-300 w-1/3">
                <div className='flex justify-center'>
                <img src="/consulting.png" alt="design" width={100} height={100} />
                </div>
                <h3 className="text-lg pt-8 pb-2 font-bold">Consulting</h3>
                <p className="py-2">
                Having problems with your current project? I can give you tips and tricks on how to make is a better project
                </p>
        
            </div>
        </div>
    </section>
    </>
  )
}

export default Section2