import React from "react";

// components
import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="EMPLOYEE PERFORMANCE"
                  statTitle="92%"
                  statArrow="up"
                  statPercent="4.5"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last review"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="NEW HIRES"
                  statTitle="45"
                  statArrow="up"
                  statPercent="8.32"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="EMPLOYEE RETENTION"
                  statTitle="87%"
                  statArrow="down"
                  statPercent="2.5"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last year"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="SATISFACTION RATE"
                  statTitle="80%"
                  statArrow="up"
                  statPercent="5.0"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last survey"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
