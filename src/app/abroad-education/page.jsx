import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import ServiceDetails from "@/components/ServiceDetails";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Abroad University Admissions - Navaneetha Education Trust",
  description:
    "Secure admission in top universities abroad. Expert guidance for Rejent European University, Southern Connecticut State University, and more.",
};

const page = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title={"Abroad Admission Guidance"} />
      <ServiceDetails
        title="Abroad University Admissions"
        description="Explore global opportunities with our expert abroad admission guidance. We assist students in securing seats in prestigious international universities, ensuring a smooth transition to their dream education destination."
        image="assets/images/thumbs/course-details-img.png"
        features={[
          "Rejent European University (San Marino)",
          "Southern Connecticut State University",
          "School of Business Admissions",
          "Complete Visa & Documentation Support",
          "Post-Course Assignment in USA with Placement Service",
        ]}
      />
      <FooterOne />
      <Animation />
    </>
  );
};

export default page;
