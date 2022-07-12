import React from "react";
function Footer() {
  return (
    <>
      <footer>
        <section className="bg-secondary text-primary d-flex col-lg-12 text-center">
          <div className="container">
            <div className="my-1 p-2">
              Copyright {(new Date().getFullYear())} &copy; andrewnl.com
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
export default Footer;
