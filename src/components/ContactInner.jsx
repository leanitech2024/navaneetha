import ContactForm from '@/app/contact/_components/ContactForm';
import { testimonials } from '@/constants';

const ContactInner = () => {
  return (
    <>
      <section className='contact py-120'>
        <div className='container'>
          <div className='section-heading text-center'>
            <div className='flex-align d-inline-flex gap-8 mb-16'>
              <span className='text-main-600 text-2xl d-flex'>
                <i className='ph-bold ph-book' />
              </span>
              <h5 className='text-main-600 mb-0'>Get In Touch</h5>
            </div>
            <h2 className='mb-24'>Let us help you</h2>
            <p className=''>
              Our platform is built on the principles of innovation, quality,
              and inclusivity, aiming to provide a seamless learning
            </p>
          </div>
          <div className='row gy-4'>
            <div className='col-xl-4 col-md-6'>
              <div className='contact-item bg-main-25 border border-neutral-30 rounded-12 px-32 py-40 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600'>
                <span className='contact-item__icon w-60 h-60 text-32 flex-center rounded-circle bg-main-600 text-white flex-shrink-0'>
                  <i className='ph ph-map-pin-line' />
                </span>
                <div className='flex-grow-1'>
                  <h4 className='mb-12'>Main Office</h4>
                  <p className='text-neutral-500'>
                    #72, West of Chord Road, 2nd stage, Mahalakhsmipura,
                    Bangalore-560086
                  </p>
                  <a
                    href='#'
                    className='text-main-600 fw-semibold text-decoration-underline mt-16'>
                    Find Location
                  </a>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-md-6'>
              <div className='contact-item bg-main-25 border border-neutral-30 rounded-12 px-32 py-40 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600'>
                <span className='contact-item__icon w-60 h-60 text-32 flex-center rounded-circle bg-main-600 text-white flex-shrink-0'>
                  <i className='ph ph-envelope-open' />
                </span>
                <div className='flex-grow-1'>
                  <h4 className='mb-12'>Email Address</h4>
                  <p className='text-neutral-500'>
                    <a href='mailto:navaneethaeducationtrust@gmail.com'>
                      navaneethaeducationtrust@gmail.com
                    </a>
                  </p>
                  <p className='text-neutral-500'>&nbsp;</p>
                  <a
                    href='mailto:infoexample@gmail.com'
                    className='text-main-600 fw-semibold text-decoration-underline mt-16'>
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-md-6'>
              <div className='contact-item bg-main-25 border border-neutral-30 rounded-12 px-32 py-40 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600'>
                <span className='contact-item__icon w-60 h-60 text-32 flex-center rounded-circle bg-main-600 text-white flex-shrink-0'>
                  <i className='ph ph-phone-call' />
                </span>
                <div className='flex-grow-1'>
                  <h4 className='mb-12'>Phone Number</h4>
                  <p className='text-neutral-500'>
                    <a href='tel:+919980030616'>+91 9980030616</a>
                  </p>
                  <p className='text-neutral-500'>
                    <a href='tel:+919844066230'>+91 9844066230</a>
                  </p>
                  <p className='text-neutral-500'>&nbsp;</p>
                  <a
                    href='tel:(406)555-0120'
                    className='text-main-600 fw-semibold text-decoration-underline mt-16'>
                    Contact Us Today!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='contact-form-section py-240 bg-main-25 position-relative z-1'>
        <img
          src='assets/images/bg/wave-bg.png'
          alt=''
          className='position-absolute top-0 start-0 w-100 h-100 z-n1 d-lg-block d-none'
        />
        <div className='container'>
          <div className='row gy-5 align-items-center'>
            <div className='col-xl-7 col-lg-6 pe-lg-5'>
              <div className='mb-40 md-xl-5'>
                <div className='flex-align d-inline-flex gap-8 mb-16'>
                  <span className='text-main-600 text-2xl d-flex'>
                    <i className='ph-bold ph-book' />
                  </span>
                  <h5 className='text-main-600 mb-0'>Contact Us</h5>
                </div>
                <h2 className='mb-24'>
                  Have questions? don't hesitate to contact us
                </h2>
                <p className='text-neutral-500 text-line-3 max-w-636'>
                  We are passionate about transforming lives through education.
                  Founded with a vision to make learning accessible to all, we
                  believe in the power of knowledge to unlock opportunities and
                  shape the future.
                </p>
              </div>
              <div className='flex-align gap-40 flex-wrap'>
                <div className='enrolled-students mt-12 d-block'>
                  {testimonials.slice(2, 8).map((testimonial) => (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className='w-48 h-48 rounded-circle object-fit-cover transition-2'
                      key={testimonial.id}
                    />
                  ))}
                </div>
                <div className=''>
                  <ul className='flex-align gap-4 mb-10'>
                    <li className='text-warning-600 text-2xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-2xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-2xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-2xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-2xl d-flex'>
                      <i className='ph-fill ph-star-half' />
                    </li>
                  </ul>
                  <span className='text-neutral-700 fw-medium'>
                    {' '}
                    2.5k+ reviews (4.95 of 5)
                  </span>
                </div>
              </div>
            </div>

            {/* form */}
            <div className='col-xl-5 col-lg-6'>
              <div className='p-24 bg-white rounded-12 box-shadow-md'>
                <div className='border border-neutral-30 rounded-8 bg-main-25 p-24'>
                  {/* <form action='#' id='commentForm'>
                    <h4 className='mb-0'>Get In Touch</h4>
                    <span className='d-block border border-neutral-30 my-24 border-dashed' />
                    <div className='mb-24'>
                      <label
                        htmlFor='name'
                        className='text-neutral-700 text-lg fw-medium mb-12'>
                        Name{' '}
                      </label>
                      <input
                        type='text'
                        className='common-input rounded-pill border-transparent focus-border-main-600'
                        id='name'
                        placeholder='Enter Name...'
                        style={{ maxWidth: '100% !important' }}
                      />
                    </div>
                    <div className='mb-24'>
                      <label
                        htmlFor='email'
                        className='text-neutral-700 text-lg fw-medium mb-12'>
                        Email{' '}
                      </label>
                      <input
                        type='email'
                        className='common-input rounded-pill border-transparent focus-border-main-600'
                        id='email'
                        placeholder='Enter Email...'
                        style={{ maxWidth: '100% !important' }}
                      />
                    </div>
                    <div className='mb-24'>
                      <label
                        htmlFor='phone'
                        className='text-neutral-700 text-lg fw-medium mb-12'>
                        Phone{' '}
                      </label>
                      <input
                        type='tel'
                        className='common-input rounded-pill border-transparent focus-border-main-600'
                        id='phone'
                        placeholder='Enter Your Number...'
                        style={{ maxWidth: '100% !important' }}
                      />
                    </div>
                    <div className='mb-24'>
                      <label
                        htmlFor='desc'
                        className='text-neutral-700 text-lg fw-medium mb-12'>
                        Message
                      </label>
                      <textarea
                        id='desc'
                        className='common-input rounded-24 border-transparent focus-border-main-600 h-110'
                        placeholder='Enter Your Message...'
                        defaultValue={''}
                        style={{ maxWidth: '100% !important' }}
                      />
                    </div>
                    <div className='mb-0'>
                      <button
                        type='submit'
                        className='btn btn-main rounded-pill flex-center gap-8 mt-40'>
                        Send Message
                        <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                      </button>
                    </div>
                  </form> */}
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInner;
