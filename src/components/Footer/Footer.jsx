import React from "react";

export const Footer = () => {
  return (
    <footer class="relative text-center text-blue-1000 lg:text-center md:text-center sm:text-center pt-2">
      <div>
        <h3 className="footer-content font-semibold text-black ">
          Made By{" "}
          <a
            class="link"
            href="https://github.com/Rudram08/Rudram08"
            target="_blank"
            rel="noreferrer"
            className="hover:underline hover:text-red-900"
          >
            Rudram aj Chakraborty{" "}
          </a>
          <br />
          <a
            class="link"
            href="https://github.com/Rudram08/Rudram08"
            target="_blank"
            rel="noreferrer"
            className="hover:underline hover:text-red-900"
          >
            Copyright © Rudram aj Chakraborty - All rights reserved{" "}
          </a>
        </h3>
        {/* <br /> */}
      </div>
      <div className="flex absolute -mt-3 items-center">
        <h3 className="mx-2 text-[12px] text-black-400 underline hover:underline hover:text-red-900">
          &#10003; -Data Provided By CoinGeckoAPI
        </h3>
      </div>
      <div className="mt-1 text-right lg:text-right md:text-right sm:text-right">
        <h3 className="mx-2 text-[12px] text-black-400 underline hover:underline hover:text-red-900">
          &#10003; -AlmaBetter Front-End Project
        </h3>
      </div>
    </footer>
  );
};
