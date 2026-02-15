import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import ServiceDetails from "@/components/ServiceDetails";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Medical, NEET & PG Guidance - Navaneetha Education Trust",
  description:
    "Expert guidance for MBBS, MD, MS admissions. Support from All India KEA registration to final admission in top medical colleges.",
};

const page = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title={"Medical & NEET Guidance"} />
      <ServiceDetails
        title="Medical, NEET/CET & PG Admissions"
        description="We provide comprehensive guidance for medical aspirants aiming for MBBS, MD, and MS degrees. From the time of All India registration (KEA) to the final seat allotment, we coordinate every step to ensure you get into the best possible college."
        image="assets/images/thumbs/course-details-img.png"
        features={[
          "Guidance for MBBS / MD / MS Admissions",
          "Support for NEET / CET Counseling",
          "Assistance with KEA & MCC Registration",
          "Admissions in Top Medical Colleges",
          "Colleges: Rajarajeshwari, Siddhartha, KEMPEGOWDA, JSS Mysore, etc.",
          "Ayurvedic & Homeopathic College Guidance",
        ]}
      />
      <FooterOne />
      <Animation />
    </>
  );
};

export default page;
