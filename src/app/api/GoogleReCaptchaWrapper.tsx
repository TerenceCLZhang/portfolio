"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const GoogleReCaptchaWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!reCaptchaKey) {
    console.warn("Missing reCAPTCHA site key. Google reCAPTCHA will not work.");
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey ?? ""}>
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default GoogleReCaptchaWrapper;
