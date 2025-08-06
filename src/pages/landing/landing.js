import React, { useState } from "react";
import logo from "../../assets/svg/logo.svg";
import "./landing.css";
import Modal from "../../components/modal/modal";
const Landing = () => {
  const [modal, setModal] = useState(false);
  return (
    <main className="landing">
      <Modal
        open={modal}
        handleClose={() => {
          setModal(false);
        }}
      >
        <div
          className="modal"
          style={{
            maxWidth: "400px",
            padding: "20px",
            width: "70%",
            borderRadius: "8px",
            backgroundColor: "white",
            fontFamily: "var(--ff-pb-rg)",
          }}
        >
          <p className="ta-ctr" style={{ lineHeight: "1.5", fontSize: "18px" }}>
            Kindly email us at <br />
            george@greater-works.ai
          </p>

          <button
            style={{
              display: "block",
              margin: "20px auto 0px",
              backgroundColor: "#101010",
              padding: "10px",
              borderRadius: "5px",
              color: "white",
              fontFamily: "var(--ff-pb-rg)",
              fontSize: "15px",
              cursor: "pointer",
            }}
            onClick={() => {
              setModal(false);
            }}
          >
            Close
          </button>
        </div>
      </Modal>
      <section className="hero">
        <div className="container">
          <div className="header flx aln-ctr pd-b-24 pd-t-24">
            <img src={logo} alt="brand" />
          </div>
          <div className="hero-content">
            <div>
              <h1 className="ta-ctr mg-b-24">Do Greater Works.</h1>
              <h4 className="flx aln-ctr jty-ctr gp-4">
                <span>Radical Technology Innovations</span>
                <span>for your Business.</span>
              </h4>
              <button
                onClick={() => {
                  setModal(true);
                }}
              >
                ask us how
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="info">
        <div className="container info-content">
          <p>
            We believe in use of technology innovations for <br /> the
            betterment of the world.
          </p>
          <p>
            We help you make radical technology innovations with <br /> both
            speed and scale to take your business to the next level.
          </p>
          <p>
            We have worked with some of the largest companies <br /> in the
            world to create unbelievable innovations.
          </p>
        </div>
        <footer>
          <div className="container pd-24">
            <p className="ta-ctr">greater-works.ai © 2024</p>
          </div>
        </footer>
      </section>
    </main>
  );
};

export default Landing;
