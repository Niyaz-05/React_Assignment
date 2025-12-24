import React, { useState, useEffect } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import "./form.css";

const TOTAL_STEPS = 3;

function MainPage() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("formData");
    return saved
      ? JSON.parse(saved)
      : { name: "", email: "", username: "", password: "" };
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const validateStep = () => {
    let newErrors = {};

    if (step === 1) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) newErrors.email = "Email is required";
    }

    if (step === 2) {
      if (!formData.username) newErrors.username = "Username required";
      if (!formData.password) newErrors.password = "Password required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  return (
    <div className="form-container">
      <h2>Multi-Step Registration Form</h2>

      {/* Progress */}
      <div className="progress">
        Step {step} of {TOTAL_STEPS}
        <div className="bar">
          <div
            className="fill"
            style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          ></div>
        </div>
      </div>

      {step === 1 && (
        <Step1 formData={formData} setFormData={setFormData} errors={errors} />
      )}
      {step === 2 && (
        <Step2 formData={formData} setFormData={setFormData} errors={errors} />
      )}
      {step === 3 && <Step3 formData={formData} />}

      <div className="buttons">
        {step > 1 && <button onClick={prevStep}>Back</button>}
        {step < TOTAL_STEPS && <button onClick={nextStep}>Next</button>}
      </div>
    </div>
  );
}

export default MainPage;
