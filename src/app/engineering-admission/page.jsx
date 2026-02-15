import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import ServiceDetails from "@/components/ServiceDetails";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Engineering Admissions - Navaneetha Education Trust",
  description:
    "Verified engineering admissions in top colleges. Management quota seats, scholarship support, and career guidance for all branches.",
};

const page = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title={"Engineering Admissions"} />
      <ServiceDetails
        title="Engineering College Admissions"
        description="Get admission into top engineering colleges for B.E. and B.Tech programs. We support admissions across all branches including CSE, ISE, ECE, Mechanical, and Civil, ensuring you start your technical career on the right foot."
        image="assets/images/thumbs/course-details-img.png"
        features={[
          "Admissions in Top Engineering Schools",
          "Management Quota Seats Available",
          "Guidance for All Branches (CSE, ISE, ECE, etc.)",
          "Scholarship Support for Eligible Students",
          "Local Guardian Support for Outstation Students",
        ]}
      />
      <FooterOne />
      <Animation />
    </>
  );
};

export default page;
