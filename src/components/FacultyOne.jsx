import { courses } from '@/constants';
import Link from 'next/link';

const FacultyOne = () => {
  return (
    <section className='faculty py-120 bg-main-25'>
      <div className='container'>
        {/* Section Heading */}
        <div className='section-heading text-center'>
          <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
            <span className='text-main-600 text-2xl d-flex'>
              <i className='ph-bold ph-book-open' />
            </span>
            <h5 className='text-main-600 mb-0'>Our Premium Courses</h5>
          </div>
          <h2 className='mb-24 wow bounceIn'>
            Comprehensive Education & Admission Support
          </h2>
          <p className='wow bounceInUp'>
            From IT training to abroad university admissions and medical seat
            guidance, we cover it all.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className='row gy-4'>
          {courses.slice(0, 6).map((course) => (
            <div
              key={course.id}
              className='col-lg-4 col-md-6'
              data-aos='fade-up'
              data-aos-duration={course.duration}>
              <div className='scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md d-flex flex-column'>
                <div className='course-item__thumb rounded-12 overflow-hidden position-relative'>
                  <Link href={course.link} className='w-100 h-100'>
                    <img
                      src={course.image}
                      alt={course.title}
                      className='scale-hover-item__img rounded-12 contain-img transition-2'
                    />
                  </Link>
                </div>

                <div className='pt-32 pb-24 px-16 position-relative flex-grow-1 d-flex flex-column'>
                  <span
                    className={`text-up py-12 px-24 rounded-8 ${course.tagClass} text-white fw-medium w-fit-content mb-16`}>
                    {course.tag}
                  </span>

                  <div className='flex-between gap-8 flex-wrap mb-16'>
                    {course.isLinkCategory ? (
                      <Link
                        href='/course'
                        className='py-8 px-20 rounded-8 flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white'>
                        <span className='text-xl d-flex'>
                          <i className='ph-bold ph-squares-four' />
                        </span>
                        {course.category}
                      </Link>
                    ) : (
                      <span className='text-xl fw-bold text-main-600'>
                        {course.category}
                      </span>
                    )}
                  </div>

                  <h4 className='mb-0 text-main-600'>
                    <Link href={course.link}>{course.title}</Link>
                  </h4>

                  <ul
                    className='check-list mt-auto d-grid'
                    style={{ gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    {course.features.map((feature, index) => (
                      <li
                        key={index}
                        className='d-flex align-items-start gap-12 mb-0'>
                        <span className='flex-shrink-0 text-main-600 text-xl d-flex mt-4'>
                          <i className='ph-bold ph-check-circle' />
                        </span>
                        <span className='text-neutral-500 text-md'>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className='flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                    <Link
                      href={course.link}
                      className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'>
                      Enquire Now
                      <i className='ph ph-arrow-right' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className='text-center mt-40'>
          <Link
            href='/courses'
            className='btn btn-outline-main rounded-pill py-9'>
            See more
            <i className='ph-bold ph-arrow-up-right ms-1' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FacultyOne;
