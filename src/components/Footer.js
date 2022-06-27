import React from "react";

function Footer() {
  
  return (
    <>
      <footer>
        <section className="bg-dark text-light d-flex col-lg-12 text-center">
          <div className="container">
            <div className="my-1 p-3">
              Copyright {(new Date().getFullYear())} &copy; andrewnl.com
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
export default Footer;
