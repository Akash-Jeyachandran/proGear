import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../Assets/Images/Bg-01.png";
import CustomButton from "../Components/CustomButton";
import "../Styles/common.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
  <div className="content-box">
    <h1 className="fw-bold">
      <span className="sub-title">The smart way to</span>
      <span className="main-title">OWN A CAR</span>
    </h1>
    <p className="fw-semibold text-dark">All-inclusive Car Subscription</p>
    
    {/* Centered Button */}
    <div className="d-flex justify-content-center">
      <CustomButton text="Browse Cars" />
    </div>
  </div>


      {/* CSS STYLING */}
      <style>
        {`
          .landing-container {
            width:100%;
            height: 100vh;
            background: url(${img}) center/cover no-repeat;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
          }

         
          .content-box {
            width: 100%;
            max-width: 1366px;
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 0 20px;
          }

          
          .sub-title {
            font-size: 24px;
            font-weight: 400;
            display: block;
          }

          .main-title {
            font-size: 80px;
            font-weight: 700;
            color: #000;
            display: block;
            white-space: nowrap; /* Prevents text wrapping */
          }

          p {
            font-size: 16px;
            margin-top: 10px;
          }
          
          @media (max-width: 1366px) {
            .content-box {
              width: 95%; /* Maintain max width while being flexible */
            }
          }

          @media (max-width: 1024px) {
            .main-title {
              font-size: 64px;
            }
            .sub-title {
              font-size: 20px;
            }
            p {
              font-size: 14px;
            }
            button {
              font-size: 0.9rem;
              padding: 8px 20px;
            }
          }

          @media (max-width: 768px) {
            .main-title {
              font-size: 48px;
            }
            .sub-title {
              font-size: 18px;
            }
            p {
              font-size: 14px;
            }
            button {
              font-size: 0.8rem;
              padding: 6px 16px;
            }
          }

          @media (max-width: 480px) {
            .main-title {
              font-size: 36px;
            }
            .sub-title {
              font-size: 16px;
            }
            p {
              font-size: 12px;
            }
            button {
              font-size: 0.75rem;
              padding: 5px 14px;
            }
          }

         
          @media (min-resolution: 192dpi), (min-resolution: 2dppx) {
            .content-box {
              // position: fixed !important;
              max-width: 1366px;
              left: 50%;
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default LandingPage;
