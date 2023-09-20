import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Header = lazy(() => import("../../genaral/header/Header"));

const RegisterPage = lazy(() =>
  import("../../../components/screens/loginpage/RegisterPage")
);
const OtpPage = lazy(() =>
  import("../../../components/screens/loginpage/OtpPage")
);
const LoginPage = lazy(() =>
  import("../../../components/screens/loginpage/LoginPage")
);
const ForgotPage = lazy(() =>
  import("../../../components/screens/loginpage/ForgotPage")
);
const OtpVerificationPage = lazy(() =>
  import("../../screens/loginpage/OtpVerificationPage")
);
const SetNewPassword = lazy(() =>
  import("../../screens/loginpage/SetNewPassword")
);

function AuthRouter() {
  return (
    <Suspense>
      <Routes>
        <Route path="/login-page" element={[<Header />, <LoginPage />]} />
        <Route path="/register-page" element={[<Header />, <RegisterPage />]} />
        <Route path="/otp-page" element={[<Header />, <OtpPage />]} />
        <Route path="/ForgotPage" element={<ForgotPage />} />
        <Route
          path="/otp-verification-page/:email"
          element={<OtpVerificationPage />}
        />
        <Route path="/set-new-password" element={<SetNewPassword />} />
      </Routes>
    </Suspense>
  );
}

export default AuthRouter;
