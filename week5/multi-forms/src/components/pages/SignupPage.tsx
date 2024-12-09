import React, { useState } from 'react';
import Sidebar from '../ui/Layout/Sidebar';
import StepNavigator from '../ui/Layout/StepNavigator';
import PersonalInfo from '../ui/Form/PersonalInfo';
import PlanSelection from '../ui/Form/PlanSelection';
import AddOns from '../ui/Form/AddOns';
import Summary from '../ui/Form/Summary';

const steps = [
  { number: 1, step: 'Step 1', name: 'Your Info' },
  { number: 2, step: 'Step 2', name: 'Select Plan' },
  { number: 3, step: 'Step 3', name: 'Add-Ons' },
  { number: 4, step: 'Step 4', name: 'Summary' },
];

const SignupPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    plan: string;
    billingCycle: 'monthly' | 'yearly';
    addOns: { [key: string]: boolean };
  }>({
    name: '',
    email: '',
    phone: '',
    plan: '',
    billingCycle: 'monthly',
    addOns: { onlineService: false, storage: false, customizableProfile: false },
  });
  
  const updateData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const updateAddOns = (addOn: string, value: boolean) => {
    setFormData((prev) => ({
      ...prev,
      addOns: { ...prev.addOns, [addOn]: value },
    }));
  };

  const validateStep = (): boolean => {
    let newErrors = {};

    if (currentStep === 0) {
      if (!formData.name) newErrors = { ...newErrors, name: 'This field is required' };
      if (!formData.email) newErrors = { ...newErrors, email: 'This field is required' };
      if (!formData.phone) newErrors = { ...newErrors, phone: 'This field is required' };
    } else if (currentStep === 1 && !formData.plan) {
      newErrors = { ...newErrors, plan: 'Please select a plan' };
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const handleConfirm = () => {
    setIsSubmitted(true);
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="sign-up-form">
      <Sidebar
        steps={steps}
        currentStep={currentStep}
        onStepClick={(index) => !isSubmitted && setCurrentStep(index)}
      />
      <div className="step" style={{ padding: '20px' }}>
        {!isSubmitted ? (
          <>
            {currentStep === 0 && (
              <PersonalInfo
                data={formData}
                errors={errors}
                updateData={updateData}
              />
            )}
            {currentStep === 1 && (
              <PlanSelection
                selectedPlan={formData.plan}
                billingCycle={formData.billingCycle}
                updatePlan={(plan) => updateData('plan', plan)}
                updateBillingCycle={(cycle) => updateData('billingCycle', cycle)}
                error={errors.plan}
              />
            )}
            {currentStep === 2 && (
              <AddOns 
                addOns={formData.addOns} 
                updateAddOns={updateAddOns} 
                onNext={nextStep} 
                onPrevious={prevStep} 
                canProceed={true}
              />
            )}
            {currentStep === 3 && <Summary formData={formData} onChangeClick={() => setCurrentStep(1)} />}
            <StepNavigator
              onNext={nextStep}
              onPrevious={prevStep}
              canProceed={currentStep < steps.length - 1}
              canGoBack={currentStep > 0}
              isFinalStep={currentStep === steps.length - 1}
              onConfirm={handleConfirm}
            />
          </>
        ) : (
          <div className="thank-you-message">
            <img src="./assets/images/icon-thank-you.svg" alt="Thank You" />
            <h2>Thank you!</h2>
            <p>
              Thanks for confirming your subscription! We hope you have
              fun using our platform. If you ever need support, please feel
              free to email us at support@loremgaming.com
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
