import Breadcrumb from '@/components/Breadcrumb';
// import ServiceDetails from '@/components/ServiceDetails';
import { courses } from '@/constants';
import Animation from '@/helper/Animation';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function CoursePage({ params, searchParams }) {
  const slug = await params.slug;

  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return notFound();
  }

  return (
    <main className={'overflow-hidden'}>
      {/* <HeaderOne /> */}
      <Breadcrumb title={course.title} />
      <CourseDetails
        title={course.title}
        description={course.description}
        image={course.image}
        features={course.features}
      />
      {/* <FooterOne /> */}
      <Animation />
    </main>
  );
}

function CourseDetails({ title, description, image, features, children }) {
  return (
    <section className='course-details py-120'>
      <div className='container'>
        <div className='row gy-4'>
          <div className='col-xl-8'>
            {/* Details Content Start */}
            <div className='course-details__content border border-neutral-30 rounded-12 bg-main-25 p-12'>
              <div className='position-relative text-center'>
                {image && (
                  <Image
                    src={image}
                    alt={title}
                    className='rounded-8 cover-img'
                    width={800}
                    height={400}
                  />
                )}
              </div>

              <div className='p-20'>
                <h2 className='mt-24 mb-24'>{title}</h2>
                <div className='text-neutral-700 text-lg'>{description}</div>

                {features && features.length > 0 && (
                  <>
                    <span className='d-block border-bottom border-main-100 my-32' />
                    <h4 className='mb-24'>Key Highlights & Benefits</h4>
                    <ul className='list-dotted d-flex flex-column gap-16'>
                      {features.map((feature, index) => (
                        <li key={index} className='flex-align gap-12'>
                          <span className='text-main-600 d-flex text-xl'>
                            <i className='ph-bold ph-check-circle' />
                          </span>
                          <span className='text-neutral-700 text-lg'>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {children}

                <span className='d-block border-bottom border-main-100 my-32' />

                {/* Common Service Section - Local Guardian & Support */}
                <div className='bg-white rounded-12 p-24 border border-neutral-30'>
                  <h4 className='mb-16 text-main-600'>
                    Comprehensive Student Support
                  </h4>
                  <p className='text-neutral-700 mb-24'>
                    Our commitment goes beyond admission. We act as a{' '}
                    <strong>Local Guardian</strong> for students, ensuring their
                    safety, comfort, and academic success.
                  </p>

                  <div className='row gy-24'>
                    <div className='col-md-6'>
                      <div className='flex-align gap-16'>
                        <span className='w-48 h-48 rounded-circle bg-main-50 text-main-600 flex-center text-2xl'>
                          <i className='ph-bold ph-file-text' />
                        </span>
                        <div>
                          <h6 className='mb-4 text-md'>
                            Documentation Assistance
                          </h6>
                          <p className='text-sm text-neutral-500'>
                            Complete counseling & document support (KEA & MCC).
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='flex-align gap-16'>
                        <span className='w-48 h-48 rounded-circle bg-main-50 text-main-600 flex-center text-2xl'>
                          <i className='ph-bold ph-users-three' />
                        </span>
                        <div>
                          <h6 className='mb-4 text-md'>27+ Years Experience</h6>
                          <p className='text-sm text-neutral-500'>
                            Providing end-to-end guidance & reporting.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='flex-align gap-16'>
                        <span className='w-48 h-48 rounded-circle bg-main-50 text-main-600 flex-center text-2xl'>
                          <i className='ph-bold ph-house-line' />
                        </span>
                        <div>
                          <h6 className='mb-4 text-md'>
                            Accommodation Support
                          </h6>
                          <p className='text-sm text-neutral-500'>
                            Assistance with Hostels, PGs, and Service
                            Apartments.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='flex-align gap-16'>
                        <span className='w-48 h-48 rounded-circle bg-main-50 text-main-600 flex-center text-2xl'>
                          <i className='ph-bold ph-handshake' />
                        </span>
                        <div>
                          <h6 className='mb-4 text-md'>Loan Facility</h6>
                          <p className='text-sm text-neutral-500'>
                            Support for tuition fee loans for needy students.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='flex-align gap-16'>
                        <span className='w-48 h-48 rounded-circle bg-main-50 text-main-600 flex-center text-2xl'>
                          <i className='ph-bold ph-student' />
                        </span>
                        <div>
                          <h6 className='mb-4 text-md'>Academic Support</h6>
                          <p className='text-sm text-neutral-500'>
                            Tuition and tutorials arranged if required.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='flex-align gap-16'>
                        <span className='w-48 h-48 rounded-circle bg-main-50 text-main-600 flex-center text-2xl'>
                          <i className='ph-bold ph-first-aid' />
                        </span>
                        <div>
                          <h6 className='mb-4 text-md'>Emergency Care</h6>
                          <p className='text-sm text-neutral-500'>
                            Immediate support for any health issues/emergencies.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mt-24 p-16 bg-main-25 rounded-8 border border-main-100'>
                    <p className='text-neutral-700 text-sm'>
                      <strong className='text-main-600'>Note:</strong> We
                      provide <strong>travel services</strong> in and out of
                      Bangalore with safety at affordable prices. Our office
                      staff acts as a local guardian to handle any miscellaneous
                      issues regarding college, hostel, or personal well-being.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Details Content End */}
          </div>

          <div className='col-xl-4'>
            <div
              className='course-details__sidebar border border-neutral-30 rounded-12 bg-white p-24 sticky-top'
              style={{ top: '120px', zIndex: 1000 }}>
              <h4 className='mb-24'>Get Expert Guidance</h4>
              <div className='flex-column gap-16 d-flex'>
                <Link
                  prefetch={true}
                  href='/'
                  className='btn btn-main rounded-pill w-100 flex-center gap-8'>
                  Go Back <i className='ph-bold ph-arrow-arc-left' />
                </Link>
                <Link
                  prefetch={true}
                  href='/contact'
                  className='btn btn-main rounded-pill w-100 flex-center gap-8'>
                  Apply Now <i className='ph-bold ph-arrow-right' />
                </Link>
                <Link
                  prefetch={true}
                  href='/contact'
                  className='btn btn-outline-main rounded-pill w-100 flex-center gap-8'>
                  Contact Us <i className='ph-bold ph-phone' />
                </Link>
              </div>

              <div className='mt-32'>
                <h5 className='mb-16'>Why Choose Us?</h5>
                <ul className='list-dotted d-flex flex-column gap-12'>
                  <li className='text-neutral-700 text-sm'>
                    100% Genuine & Transparent Process
                  </li>
                  <li className='text-neutral-700 text-sm'>
                    Support for Govt & Private Quota
                  </li>
                  <li className='text-neutral-700 text-sm'>
                    Direct Admission in Top Colleges
                  </li>
                  <li className='text-neutral-700 text-sm'>
                    End-to-End Career Counseling
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
