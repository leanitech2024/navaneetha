import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import ServiceDetails from "@/components/ServiceDetails";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Pharmacy, Nursing & Physiotherapy - Navaneetha Education Trust",
  description:
    "Admissions for B.Pharm, D.Pharm, B.Sc Nursing, and Physiotherapy. Expert guidance for allied health science courses.",
};

const page = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title={"Pharmacy, Nursing & Physio"} />
      <ServiceDetails
        title="Pharmacy, Nursing & Physiotherapy"
        description="Start a rewarding career in healthcare with our admission guidance for Pharmacy, Nursing, and Physiotherapy courses. We help you choose the right college and navigate the admission process seamlessly."
        image="assets/images/thumbs/course-details-img.png"
        features={[
          "B.Pharm & D.Pharm Admissions",
          "B.Sc Nursing & GNM Guidance",
          "Bachelor of Physiotherapy (BPT)",
          "Allied Health Science Courses",
          "Clinical Training & Placement Support",
        ]}
      />
      <FooterOne />
      <Animation />
    </>
  );
};

export default page;
