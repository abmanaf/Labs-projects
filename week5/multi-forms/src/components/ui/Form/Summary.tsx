import React from 'react';

interface SummaryProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    plan: string;
    billingCycle: 'monthly' | 'yearly';
    addOns: { [key: string]: boolean };
  };
  onChangeClick: () => void;
}

const availableAddOns = [
  { id: 'onlineService', label: 'Online Service', monthly: 2, yearly: 20 },
  { id: 'storage', label: 'Larger Storage', monthly: 2, yearly: 20 },
  { id: 'customizableProfile', label: 'Customizable Profile', monthly: 3, yearly: 30 },
];

const plans = [
  { value: 'basic', label: 'Arcade', monthly: 9, yearly: 90 },
  { value: 'standard', label: 'Advanced', monthly: 12, yearly: 120 },
  { value: 'premium', label: 'Pro', monthly: 15, yearly: 150 },
];

const Summary: React.FC<SummaryProps> = ({ formData, onChangeClick }) => {
  const selectedPlan = plans.find((plan) => plan.label === formData.plan);
  const selectedAddOns = availableAddOns.filter((addOn) => formData.addOns[addOn.id]);

  const planPrice = selectedPlan ? selectedPlan[formData.billingCycle] : 0;
  const addOnsPrice = selectedAddOns.reduce((total, addOn) => total + addOn[formData.billingCycle], 0);

  const total = planPrice + addOnsPrice;

  const billingCycleLabel = formData.billingCycle === 'monthly' ? 'mo' : 'yr';

  return (
    <div className="summary-forms">
      <h2>Finishing up</h2>
      <p className="title">Double-check everything looks OK before confirming.</p>

      <div className="summary-results">
        {selectedPlan && (
          <p>
            <span className="header">
              {selectedPlan.label} ({formData.billingCycle === 'monthly' ? 'Monthly' : 'Yearly'}) <br />
              <span style={{fontSize: '13px', color: 'var(--gray)'}} className="change-a" onClick={onChangeClick}>
                Change
              </span>
            </span>
            <span className="header">
              ${planPrice}/{billingCycleLabel}
            </span>
          </p>
        )}

        <ul>
          {selectedAddOns.map((addOn) => (
            <li key={addOn.id}>
              <span>
                {addOn.label}
              </span>
              <span>
                (+${addOn[formData.billingCycle]}/{billingCycleLabel})
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="total-container">
        <span className="total">Total (Per {formData.billingCycle === 'monthly' ? 'Month' : 'Year'})</span>
        <span className="price">
          ${total}/{billingCycleLabel}
        </span>
      </div>
    </div>
  );
};

export default Summary;
