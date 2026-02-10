import Link from "next/link";

const ChooseUsTwo = () => {
  return (
    <section className="choose-us-two pt-120">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-7 pe-xl-5">
            <div className="pb-80 mb-lg-5 me-lg-5">
              <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
                <span className="text-main-600 text-2xl d-flex">
                  <i className="ph-bold ph-book-open" />
                </span>
                <h5 className="text-main-600 mb-0">Why Choose Us</h5>
              </div>
              <h2 className="mb-24 wow bounceIn">
                We help you secure admission in top colleges
              </h2>
              <p className="text-neutral-500 text-line-2 wow bounceInUp">
                Raghu Chavan - 9980030616 | 9844066230. Connect with me today
                for guidance and support!
              </p>
              <p className="text-neutral-500 text-line-2 mt-24 wow bounceInUp">
                At Navaneetha Education Trust, we are dedicated to shaping the
                future of students by providing comprehensive educational
                guidance. From selecting the right course to securing admission
                in top colleges, our expert team is with you every step of the
                way.
              </p>
              <ul className="mt-24">
                <li className="flex-align gap-12 mb-16 wow bounceInUp">
                  <span className="flex-shrink-0 text-xl text-main-600 d-flex">
                    <i className="ph-bold ph-checks" />
                  </span>
                  <span className="flex-grow-1 text-neutral-500">
                    100% Genuine & Transparent Process
                  </span>
                </li>
                <li className="flex-align gap-12 mb-16 wow bounceInUp">
                  <span className="flex-shrink-0 text-xl text-main-600 d-flex">
                    <i className="ph-bold ph-checks" />
                  </span>
                  <span className="flex-grow-1 text-neutral-500">
                    Support for Government & Private Quota Seats
                  </span>
                </li>
                <li className="flex-align gap-12 mb-16 wow bounceInUp">
                  <span className="flex-shrink-0 text-xl text-main-600 d-flex">
                    <i className="ph-bold ph-checks" />
                  </span>
                  <span className="flex-grow-1 text-neutral-500">
                    Expert Guidance for NEET / CET / JEE
                  </span>
                </li>
              </ul>
              <Link
                href="/about"
                className="btn btn-main rounded-pill flex-align d-inline-flex gap-8 mt-40"
              >
                Read More
                <i className="ph-bold ph-arrow-up-right d-flex text-lg" />
              </Link>
            </div>
          </div>
          <div className="col-lg-5">
            <div
              className="pt-40 pb-90 px-60 bg-neutral-900 rounded-top-4"
              data-aos="fade-up-left"
            >
              <h4 className="mb-28 pb-28 border-bottom border-top-0 border-start-0 border-end-0 border-opacity-25 border-white border-dashed text-white">
                Important Link
              </h4>
              <ul>
                <li className="mb-24">
                  <Link
                    href="/contact"
                    className="flex-align gap-12 text-white hover-text-decoration-underline"
                  >
                    NEET 2026 Application
                    <i className="text-main-two-600 ph-bold ph-arrow-right d-flex text-xl" />
                  </Link>
                </li>
                <li className="mb-24">
                  <Link
                    href="/contact"
                    className="flex-align gap-12 text-white hover-text-decoration-underline"
                  >
                    KCET 2026 Application
                    <i className="text-main-two-600 ph-bold ph-arrow-right d-flex text-xl" />
                  </Link>
                </li>
                <li className="mb-24">
                  <Link
                    href="/contact"
                    className="flex-align gap-12 text-white hover-text-decoration-underline"
                  >
                    Medical Counselling
                    <i className="text-main-two-600 ph-bold ph-arrow-right d-flex text-xl" />
                  </Link>
                </li>
                <li className="mb-24">
                  <Link
                    href="/contact"
                    className="flex-align gap-12 text-white hover-text-decoration-underline"
                  >
                    Engineering Counselling
                    <i className="text-main-two-600 ph-bold ph-arrow-right d-flex text-xl" />
                  </Link>
                </li>
                <li className="mb-24">
                  <Link
                    href="/contact"
                    className="flex-align gap-12 text-white hover-text-decoration-underline"
                  >
                    Management Quota Admission
                    <i className="text-main-two-600 ph-bold ph-arrow-right d-flex text-xl" />
                  </Link>
                </li>
                <li className="mb-24">
                  <Link
                    href="/contact"
                    className="flex-align gap-12 text-white hover-text-decoration-underline"
                  >
                    Abroad Education
                    <i className="text-main-two-600 ph-bold ph-arrow-right d-flex text-xl" />
                  </Link>
                </li>
                <li className="mb-24">
                  <Link
                    href="/contact"
                    className="flex-align gap-12 text-white hover-text-decoration-underline"
                  >
                    IT Training & Placement
                    <i className="text-main-two-600 ph-bold ph-arrow-right d-flex text-xl" />
                  </Link>
                </li>
                <li className="mb-24">
                  <Link
                    href="/contact"
                    className="flex-align gap-12 text-white hover-text-decoration-underline"
                  >
                    Pharmacy & Physiotherapy
                    <i className="text-main-two-600 ph-bold ph-arrow-right d-flex text-xl" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsTwo;
