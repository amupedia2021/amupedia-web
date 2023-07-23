import { useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import pdf from '@images/home/pdf.svg';
import chap_yt from '@images/home/yt.svg';
import quiz from '@images/home/test_and_quiz.svg';
import assign from '@images/home/assignment.svg';
import Tilt from 'react-vanilla-tilt';
import styles from '@styles/Home.module.css';
import Header from 'components/common/Header/Header';
import Link from 'next/link';
import Footer from 'components/common/Footer';
import { Store } from 'utils/Store/Store';
import Preloader from 'components/common/Preloader';
import axios from 'node_modules/axios/index';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TestimonialCard from 'components/Testimonial/Testimonial';

export default function Home() {
  const { dispatch } = useContext(Store);

  const emptyForm = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  };

  const headerImg = '/images/home/homeback.svg';

  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('/api/submitForm', form);
      const data = await res.data;
      console.log(data);
      dispatch({
        type: {
          task: 'setAlert',
          alert: { type: 'noti', message: 'Form Submitted Successfully' }
        }
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    setForm(emptyForm);
  };

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Header image={headerImg} text='Amupedia' />
      <main>
        <section id={styles.content}>
          {/* <!-- Our Mission Container --> */}
          <div data-aos="zoom-in" className={styles.mission}>
            <h2>Our Mission</h2>
            <p>
              We are the students of AMU, intending to provide you all the
              quality stuff related to B.Tech, B.Com, B.E, and various other
              courses, the pdfs related to experiments, viva, and quizzes, the
              mid and end semester examinations as well as the assignments. We
              are providing all this content for free.
            </p>
          </div>

          {/* Our Services Section  */}

          <div data-aos="fade-up"  classname={styles.ourserv} id={styles.ourserv}>
            <h2>Our Services</h2>
            <div id={styles.ourserimgs}>
             <a href="https://www.amupedia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpdf.28512047.svg&w=256&q=75">
             <Image src="https://www.amupedia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpdf.28512047.svg&w=256&q=75" />
             </a>
             <Tilt options={{ max: 60, glare: true }} className={styles.tlt}>
              <div>
                <Image src={pdf}  />
                <p>PDFs OF ALL SUBJECTS</p> 
              </div>           
               </Tilt>
              <a href="https://www.amupedia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyt.ff6fd1c8.svg&w=256&q=75">
              <Image src="https://www.amupedia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyt.ff6fd1c8.svg&w=256&q=75" />
              </a>
              <Tilt options={{ max: 60, glare: true }} className={styles.tlt}>
              <div>
                <Image src={chap_yt}  />
                <p>CHAPTER EXPLANATION BY YOUTUBE VIDEO</p>
              </div>
              </Tilt>
              <a href="https://www.amupedia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftest_and_quiz.33e8767e.svg&w=256&q=75">
              <Image src="https://www.amupedia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftest_and_quiz.33e8767e.svg&w=256&q=75" />
              </a>
               <Tilt options={{ max: 60, glare: true }} className={styles.tlt}>
              <div>
                <Image src={quiz} />
                <p>SOLUTION OF TEST AND QUIZZES</p>
              </div>
              </Tilt>
              <a href="https://www.amupedia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fassignment.09926406.svg&w=256&q=75">
              <Image src="https://www.amupedia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fassignment.09926406.svg&w=256&q=75" />
              </a>
              <Tilt options={{ max: 60, glare: true }} className={styles.tlt}>
              <div>
                <Image src={assign}  />
                <p>ASSIGNMENTS GIVEN</p>
              </div>
              </Tilt>
            </div>
          </div>


          {/* <!-- grab your notes section  --> */}
          <div data-aos="fade-up" className={styles.courses} id='courses'>
            <h2 className={styles.grabh2}>Grab Your Notes Here</h2>
            <div className={styles.grabnotes}>
              <Link passHref href='/courses/btech'>
                <Tilt options={{ max: 60, glare: true }} className={styles.tlt}>
                  <div className={styles.grab1}>
                    <p>B.Tech</p>
                  </div>
                </Tilt>
              </Link>
              <Link passHref href='/'>
                <Tilt options={{ max: 60, glare: true }} className={styles.tlt}>
                  <div className={styles.grab2}>
                    <p>B.E</p>
                  </div>
                </Tilt>
              </Link>
              <Link passHref href='/'>
                <Tilt options={{ max: 60, glare: true }} className={styles.tlt}>
                  <div className={styles.grab3}>
                    <p>B.Com</p>
                  </div>
                </Tilt>
              </Link>
              <Link passHref href='/'>
                <Tilt options={{ max: 60, glare: true }} className={styles.tlt}>
                  <div className={styles.grab4}>
                    <p>B.Sc</p>
                  </div>
                </Tilt>
              </Link>
            </div>
          </div>

          {/* <!-- Recent Updates section  --> */}
          {/* <!-- same css as grabnotes section  --> */}
          <div data-aos="fade-up">
          <h2 className={styles.grabh2}>Recent Updates</h2>
          <div className={styles.grabnotes}>
            <Link passHref href='/'>
              <Tilt className={styles.tlt}>
                <div className={styles.rec1}>
                  <p>App</p>
                </div>
              </Tilt>
            </Link>
            <Link passHref href='/'>
              <Tilt className={styles.tlt}>
                <div className={styles.rec2}>
                  <p>Blogs</p>
                </div>
              </Tilt>
            </Link>
            <Link passHref href='/'>
              <Tilt className={styles.tlt}>
                <div className={styles.rec3}>
                  <p>Competitive Exams</p>
                </div>
              </Tilt>
            </Link>
            </div>
          </div>

          {/* <!-- Contact Form  --> */}
          <div data-aos="zoom-in" id='contacts'>
            <h2 className={styles.grabh2}>Get In Touch With Us</h2>
            <form onSubmit={onSubmit}>
              <div className={styles.cntfrm}>
                <input
                  value={form.first_name}
                  onChange={onChange}
                  required
                  type='text'
                  name='first_name'
                  placeholder='First Name'
                  className={styles.details}
                  pattern='[a-zA-Z]+'
                  title='Please enter Alphabets'
                />
                <input
                  value={form.last_name}
                  onChange={onChange}
                  required
                  name='last_name'
                  type='text'
                  placeholder='Last Name'
                  className={styles.details}
                  pattern='[a-zA-Z]+'
                  title='Please enter Alphabets'
                />
                <input
                  value={form.email}
                  onChange={onChange}
                  required
                  pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                  name='email'
                  type='email'
                  placeholder='Email'
                  className={styles.details}
                />
                <input
                  value={form.phone}
                  onChange={onChange}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Filter out non-numeric characters
                  }}
                  name='phone'
                  placeholder='Phone'
                  className={styles.details}
                />
                <input
                  value={form.address}
                  onChange={onChange}
                  required
                  name='address'
                  type='text'
                  placeholder='Address'
                  className={styles.address}
                />
                <input
                  value={form.message}
                  onChange={onChange}
                  required
                  name='message'
                  type='text'
                  placeholder='Type your message here'
                  className={styles.msg}
                />
              </div>
              <button type='submit' id={styles.sub}>
                {loading ? <Preloader /> : <p>Submit</p>}
              </button>
            </form>
          </div>
        </section>
      </main>
      <TestimonialCard />
      <Footer />
    </>
  );
}
