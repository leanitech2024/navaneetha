import BannerFive from "@/components/BannerFive";
import CounterFour from "@/components/CounterFour";
import FeaturesThree from "@/components/FeaturesThree";
import FooterFour from "@/components/FooterFour";
import GallerySectionTwo from "@/components/GallerySectionTwo";
import HeaderThree from "@/components/HeaderThree";
import InstructorTwo from "@/components/InstructorTwo";
import KidsCourses from "@/components/KidsCourses";
import MarqueeOne from "@/components/MarqueeOne";
import PopularTwo from "@/components/PopularTwo";
import TestimonialsFour from "@/components/TestimonialsFour";
import Animation from "@/helper/Animation";

export const metadata = {
  title:
    "Navaneetha  Education Trust  - LMS, Tutors, Education & Online Course NEXT JS Template",
  description:
    "Navaneetha  Education Trust is a comprehensive and modern NEXT JS template designed for online education platforms, learning management systems (LMS), tutors, educational institutions, and online courses. It’s the perfect solution for creating an engaging and interactive online learning experience for students, educators, and institutions. Whether you’re offering online courses, running a tutoring platform, or managing an educational website, Navaneetha  Education Trust provides the tools to help you succeed. This template is tailored to meet the needs of educators, administrators, and students, providing a seamless and engaging user experience.",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderThree */}
      <HeaderThree />

      {/* BannerFive */}
      <BannerFive />

      {/* FeaturesThree */}
      <FeaturesThree />

      {/* KidsCourses */}
      <KidsCourses />

      {/* CounterFour */}
      <CounterFour />

      {/* MarqueeOne */}
      <MarqueeOne />

      {/* GallerySectionTwo */}
      <GallerySectionTwo />

      {/* InstructorTwo */}
      <InstructorTwo />

      {/* PopularTwo */}
      <PopularTwo />

      {/* TestimonialsFour */}
      <TestimonialsFour />

      {/* FooterFour */}
      <FooterFour />
    </>
  );
};

export default page;
