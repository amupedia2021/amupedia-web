// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// register Swiper custom elements
register();

const TestimonialCard = () => {
  return (
    <>
      <h2 className="Home_grabh2__5Q9Va">Testimonials</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000 }} // Set autoplay with a delay of 5 seconds
        loop={true} // Enable continuous loop
      >
        <SwiperSlide>
        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                    <p className="leading-relaxed text-lg">I can't thank this teaching website enough. The courses are well-structured, making it easy to grasp complex concepts. My coding skills have improved significantly. Highly recommended!</p>
                                    <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-8 mb-6"></span>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Matthew Wright</h2>
                                    <p className="text-gray-500">Backend Engineer</p>
                                </div>
                            </div>
                        </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                    <p className="leading-relaxed text-lg">This teaching website is a game-changer. The courses provide practical insights and real-world scenarios, enabling me to excel in my role. I highly recommend it to fellow developers</p>
                                    <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-8 mb-6"></span>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Jonathan Lee</h2>
                                    <p className="text-gray-500">Senior DevOps Engineer</p>
                                </div>
                            </div>
                        </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                    <p className="leading-relaxed text-lg">I'm impressed! This teaching website has concise and effective courses. My coding abilities have improved significantly. I highly recommend it for developers at any level.</p>
                                    <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-8 mb-6"></span>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Michael Carter</h2>
                                    <p className="text-gray-500">Product Engineer</p>
                                </div>
                            </div>
                        </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                    <p className="leading-relaxed text-lg">The teaching resources on this website are invaluable. The instructors explain complex concepts brilliantly, and the practical exercises have honed my skills. I'm grateful for this platform!</p>
                                    <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-8 mb-6"></span>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Sophia Martinez</h2>
                                    <p className="text-gray-500">Front-end Developer</p>
                                </div>
                            </div>
                        </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
};


export default TestimonialCard;