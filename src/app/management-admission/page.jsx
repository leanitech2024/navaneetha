import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import ServiceDetails from "@/components/ServiceDetails";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Management Quota Admissions - Navaneetha Education Trust",
  description:
    "Direct admission in top management colleges for MBA, PGDM, and BBA. Secure your seat through management quota with 100% transparency.",
};

const page = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title={"Management Quota Admissions"} />
      <ServiceDetails
        title="Management Quota Admissions"
        description="Secure your seat in top management institutes for MBA, PGDM, and BBA programs. We specialize in facilitating management quota admissions with complete transparency and documentation support."
        image="assets/images/thumbs/course-details-img.png"
        features={[
          "Direct Admission in Top B-Schools",
          "MBA / PGDM / BBA Seats",
          "100% Transparent Process",
          "Guidance on Fee Structure & Loans",
          "Placement Assistance Support",
        ]}
      />
      <FooterOne />
      <Animation />
    </>
  );
};

export default page;
