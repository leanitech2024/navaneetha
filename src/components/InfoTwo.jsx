const InfoTwo = () => {
  return (
    <section className="info-two half-bg">
      <div className="container">
        <div className="bg-white box-shadow-md rounded-16 p-16">
          <div className="row gy-4 justify-content-center">
            <div
              className="col-xl-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration={400}
            >
              <div className="info-two-item flex-align animation-item h-100 gap-28 border border-neutral-30 rounded-12 bg-main-25">
                <span className="flex-shrink-0">
                  <img
                    src="assets/images/icons/info-two-icon1.png"
                    className="animate__heartBeat"
                    alt=""
                  />
                </span>
                <div>
                  <h4 className="mb-16">
                    Government & Private College Admission Support
                  </h4>
                  <p className="text-neutral-700">
                    Admission support for both government and private quota
                    seats.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <div className="info-two-item flex-align animation-item h-100 gap-28 border border-neutral-30 rounded-12 bg-main-two-25">
                <span className="flex-shrink-0">
                  <img
                    src="assets/images/icons/info-two-icon2.png"
                    className="animate__heartBeat"
                    alt=""
                  />
                </span>
                <div>
                  <h4 className="mb-16">Documentation Help</h4>
                  <p className="text-neutral-700">
                    Complete assistance with counseling and document
                    verification.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration={800}
            >
              <div className="info-two-item flex-align animation-item h-100 gap-28 border border-neutral-30 rounded-12 bg-main-three-25">
                <span className="flex-shrink-0">
                  <img
                    src="assets/images/icons/info-two-icon3.png"
                    className="animate__heartBeat"
                    alt=""
                  />
                </span>
                <div>
                  <h4 className="mb-16">Seat Allotment</h4>
                  <p className="text-neutral-700">
                    Support through seat allotment, admission confirmation, and
                    reporting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoTwo;
