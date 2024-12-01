import React from "react";

export default function CardProfile() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="Employee"
                  src={require("../../assets/img/team-1-800x800.jpg").default}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    5
                  </span>
                  <span className="text-sm text-blueGray-400">Years in Company</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    20
                  </span>
                  <span className="text-sm text-blueGray-400">Projects Completed</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    8
                  </span>
                  <span className="text-sm text-blueGray-400">Awards Won</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              John Doe
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              New York, USA
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
              Senior Software Engineer - IT Department
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-building mr-2 text-lg text-blueGray-400"></i>
              Acme Corporation
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                  John Doe is a highly skilled professional with expertise in software development. Over 5 years at Acme Corporation, John has contributed to multiple high-profile projects, leading teams to deliver exceptional results. Known for his innovative solutions and collaborative approach, John is a valuable asset to the organization.
                </p>
                <a
                  href="#details"
                  className="font-normal text-lightBlue-500"
                  onClick={(e) => e.preventDefault()}
                >
                  View Performance Metrics
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
