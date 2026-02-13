"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const TopTicker = () => {
  return (
    <div className="bg-main-two-600 py-12 position-relative z-1">
      <div className="container-fluid p-0">
        <Marquee gradient={false} speed={50}>
          <div className="flex-align gap-24 px-12">
            <p className="d-flex align-items-center gap-8 text-white text-lg fw-medium">
              <i className="ph-bold ph-megaphone text-white" />
              <span>
                <span className="fw-bold">Attention:</span> NEET Applications
                are officially OPEN!
              </span>
              <i className="ph-bold ph-rocket-launch text-white" />
              <span>Secure your medical seat with our expert guidance.</span>
            </p>
            <Link
              href="/contact"
              className="d-flex align-items-center gap-8 text-white text-lg fw-bold text-decoration-underline"
            >
              <span>Connect with us now for end-to-end support!</span>
              <i className="ph-bold ph-phone-call text-white" />
            </Link>
            <span className="text-white mx-24">|</span>
            <p className="d-flex align-items-center gap-8 text-white text-lg fw-medium">
              <span>Don't miss out on your dream college.</span>
              <i className="ph-bold ph-student text-white" />
            </p>
            <Link
              href="/contact"
              className="text-white text-lg fw-bold text-decoration-underline"
            >
              Get Free Counseling Today!
            </Link>
            <span className="text-white mx-24">|</span>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TopTicker;
