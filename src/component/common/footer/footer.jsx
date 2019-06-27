import React from "react";

const Footer = () => {
    const resetTagStyle = {
        verticalAlign: 'middle'
      };
  return (
    <div className="footer">
      <div className={resetTagStyle}>
        Copyright &copy; 2019 How-to, LLC All Rights Reserved{" "}
      </div>
    </div>
  );
};

export default Footer;
