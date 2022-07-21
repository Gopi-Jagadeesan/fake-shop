import React from "react";
import { getCurrentYear } from "../lib/helper";

const Footer = () => {
  return (
    <div>
      <section>
        <footer className="text-center">
          <div
            className="text-start p-3"
            style={{ backgroundColor: "#cccccc" }}
          >
            &#169;{getCurrentYear()} Copyright
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
