import React from "react";
import './footer.css'
function Footer() {
  var currYear = new Date().getFullYear();
  return (
    <div className="footer">
    <h2 className="creator">Created By Ankit Wadhwa</h2>
      <p className="copyright">Copyright @{currYear}</p>
    </div>
  );
}
export default Footer;