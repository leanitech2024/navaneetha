import Link from "next/link";

const SERVICES_DATA = [
  {
    id: 1,
    title: "IT Training & Online MBA/BBA Guidance",
    category: "IT & Management",
    tag: "Training & Courses",
    tagClass: "bg-main-three-600",
    image: "assets/images/thumbs/faculty-img1.png",
    duration: 200,
    features: [
      "Specialized IT Training",
      "Online MBA Courses",
      "Online BBA Courses",
      "Expert Faculties",
    ],
    link: "/it-training",
  },
  {
    id: 2,
    title: "Admission for Abroad University / Colleges",
    category: "Abroad University",
    tag: "Global Opportunities",
    tagClass: "bg-main-two-600",
    image: "assets/images/all/Rejent-European-University.jpg",
    duration: 400,
    features: [
      "Rejent European University (San Marino)",
      "Southern Connecticut State University",
      "School of Business",
      "Global Exposure",
    ],
    link: "/abroad-education",
  },
  {
    id: 3,
    title: "Medical, NEET & KCET Guidance",
    category: "Medical & Engineering",
    tag: "Pro Guidance",
    tagClass: "bg-main-three-600",
    image: "assets/images/all/RR-Medical-College.jpg",
    duration: 600,
    features: [
      "MBBS / MD / MS Guidance",
      "KEA / All India Registration Support",
      "Management Quota in Top Colleges",
      "Complete Admission Coordination",
    ],
    link: "/medical-admission",
  },
  {
    id: 4,
    title: "Engineering Admissions (All Branches)",
    category: "B.Tech / B.E",
    tag: "Top Colleges",
    tagClass: "bg-main-two-600",
    image: "assets/images/all/RV-College-Engineering.jpg",
    duration: 200,
    features: [
      "Computer Science (CSE)",
      "Information Science (ISE)",
      "Electronics (ECE)",
      "Mechanical & Civil",
    ],
    isLinkCategory: true,
    link: "/engineering-admission",
  },
  {
    id: 5,
    title: "Management Quota Admissions",
    category: "Management",
    tag: "Direct Admission",
    tagClass: "bg-main-three-600",
    image: "assets/images/all/christ-university-y.jpg",
    duration: 400,
    features: [
      "MBA / PGDM Direct Admission",
      "BBA / B.Com / BCA",
      "Top B-Schools Selection",
      "Placement Assistance",
    ],
    isLinkCategory: true,
    link: "/management-admission",
  },
  {
    id: 6,
    title: "Pharmacy, Nursing & Physiotherapy",
    category: "Healthcare",
    tag: "Career Oriented",
    tagClass: "bg-main-two-600",
    image: "assets/images/all/ms-ramaiha.jpg",
    duration: 600,
    features: [
      "B.Pharm / D.Pharm",
      "B.Sc Nursing / GNM",
      "Bachelor of Physiotherapy (BPT)",
      "Allied Health Sciences",
    ],
    isLinkCategory: true,
    link: "/pharmacy-nursing",
  },
];

const FacultyOne = () => {
  return (
    <section className="faculty pb-120 bg-main-25">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading text-center">
          <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
            <span className="text-main-600 text-2xl d-flex">
              <i className="ph-bold ph-book-open" />
            </span>
            <h5 className="text-main-600 mb-0">Our Premium Services</h5>
          </div>
          <h2 className="mb-24 wow bounceIn">
            Comprehensive Education & Admission Support
          </h2>
          <p className="wow bounceInUp">
            From IT training to abroad university admissions and medical seat
            guidance, we cover it all.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="row gy-4">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={service.duration}
            >
              <div className="scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md d-flex flex-column">
                <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                  <Link href={service.link} className="w-100 h-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="scale-hover-item__img rounded-12 contain-img transition-2"
                    />
                  </Link>
                </div>

                <div className="pt-32 pb-24 px-16 position-relative flex-grow-1 d-flex flex-column">
                  <span
                    className={`text-up py-12 px-24 rounded-8 ${service.tagClass} text-white fw-medium w-fit-content mb-16`}
                  >
                    {service.tag}
                  </span>

                  <div className="flex-between gap-8 flex-wrap mb-16">
                    {service.isLinkCategory ? (
                      <Link
                        href="/course"
                        className="py-8 px-20 rounded-8 flex-align gap-8 text-main-600 fw-medium bg-main-25 hover-bg-main-600 hover-text-white"
                      >
                        <span className="text-xl d-flex">
                          <i className="ph-bold ph-squares-four" />
                        </span>
                        {service.category}
                      </Link>
                    ) : (
                      <span className="text-xl fw-bold text-main-600">
                        {service.category}
                      </span>
                    )}
                  </div>

                  <h4 className="mb-0 text-main-600">
                    <Link href={service.link}>{service.title}</Link>
                  </h4>

                  <ul
                    className="check-list mt-auto d-grid"
                    style={{ gridTemplateColumns: "1fr 1fr", gap: "12px" }}
                  >
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="d-flex align-items-start gap-12 mb-0"
                      >
                        <span className="flex-shrink-0 text-main-600 text-xl d-flex mt-4">
                          <i className="ph-bold ph-check-circle" />
                        </span>
                        <span className="text-neutral-500 text-md">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <Link
                      href={service.link}
                      className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                    >
                      Enquire Now
                      <i className="ph ph-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        {/*        <div className="text-center mt-40">
                <Link
                  href="/it-training"
                  className="btn btn-outline-main rounded-pill py-9"
                >
                  View Detailsl University
            <i className="ph-bold ph-arrow-up-right d-flex text-lg" />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default FacultyOne;
