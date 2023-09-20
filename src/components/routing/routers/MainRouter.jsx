import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthRoute from "../routes/AuthRoute";
import AuthRouter from "./AuthRouter";
import PrivateRoute from "../routes/PrivateRoute";
import AppRouter from "./AppRouter";

function MainRouter() {
  const [completed, setCompleted] = useState({
    about_you: "",
    expert_details: "",
    working_status: "",
    your_bio: "",
  });
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <AppRouter />
            </PrivateRoute>
          }
        />
        <Route
          path="auth/*"
          element={
            <AuthRoute>
              <AuthRouter />
            </AuthRoute>
          }
        />
      </Routes>
    </>
  );
}

export default MainRouter;
