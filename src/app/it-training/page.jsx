import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import ServiceDetails from "@/components/ServiceDetails";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "IT Training & Online MBA/BBA - Navaneetha Education Trust",
  description:
    "Specialized IT Training and Online MBA/BBA courses from top universities. Objective admission process with expert guidance.",
};

const page = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title={"IT Training & Online MBA"} />
      <ServiceDetails
        title="IT Training & Online MBA / BBA"
        description="We offer comprehensive guidance for IT training and online management courses. Whether you are looking to upskill in the latest technologies or pursue a flexible MBA/BBA from reputed universities, we have the right pathway for you."
        image="assets/images/thumbs/course-details-img.png"
        features={[
          "Specialized IT Training Programs",
          "Online MBA & BBA from Top Universities",
          "Dabai University Colleges – Objective Admission",
          "Flexible Learning Schedules",
          "Career Advancement Support",
        ]}
      />
      <FooterOne />
      <Animation />
    </>
  );
};

export default page;
