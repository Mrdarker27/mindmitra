import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProfileHeader from "../../genaral/header/ProfileHeader";
import AboutYou from "../../includes/profilecreatepage/AboutYou";
import ExpertDetails from "../../includes/profilecreatepage/ExpertDetails";
import WorkingStatus from "../../includes/profilecreatepage/WorkingStatus";
import YourBio from "../../includes/profilecreatepage/YourBio";
import { Context } from "../../contexts/Store";
import AccountVerification from "../../includes/verification/AccountVerification";
import VerificationSuccessful from "../../includes/verification/VerificationSuccessful";
import VerificationRejected from "../../includes/verification/VerificationRejected";

function AppRouter() {
  const {
    state: {
      user_data: { profile_status },
    },
  } = useContext(Context);
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={profile_status ? "/dashboard" : "/about-you"} />}
      />
      <Route
        path="/about-you"
        element={[<ProfileHeader />, <AboutYou />]}
      ></Route>
      <Route
        path="/expert-details"
        element={[<ProfileHeader />, <ExpertDetails />]}
      ></Route>
      <Route
        path="/working-status"
        element={[<ProfileHeader />, <WorkingStatus />]}
      ></Route>
      <Route
        path="/your-bio"
        element={[<ProfileHeader />, <YourBio />]}
      ></Route>
      <Route path="/account-verification" element={<AccountVerification />} />
      <Route path="/account-successful" element={<VerificationSuccessful />} />
      <Route path="/account-rejected" element={<VerificationRejected />} />
    </Routes>
  );
}

export default AppRouter;
