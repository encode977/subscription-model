import React from "react";

import { subs } from "../handlers/subData";

function Subscription() {
  return (
    <section className="flex flex-col items-center justify-center h-screen my-10">
      <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center space-y-14">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-center">
            Get the most out of your mobile
            <br /> with the right subscription
          </h3>
          <p className="text-base text-center">
            All devices come with free delivery or pickup as standard. See
            information on
            <br /> available shopping options for your location.
          </p>
        </div>
        <div className=" grid grid-cols-3 gap-10">
          {subs.map((item) => (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-10">
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">{item.name}</h2>
                  <div>
                    <h3 className="text-lg font-semibold">{item.tag}</h3>
                    <p className="text-base">{item.desc}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      {item.price},- <span className="text-base">/month</span>
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <button className="bg-gray font-medium rounded-full shadow-lg px-6 p-4 text-sm">
                    Add subscription
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="bg-btn text-white font-medium rounded-full shadow-lg px-6 p-4 text-sm">
          See all subscriptions
        </button>
      </div>
    </section>
  );
}

export default Subscription;
