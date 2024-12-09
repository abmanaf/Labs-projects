import React from 'react';

interface PlanSelectionProps {
  selectedPlan: string;
  billingCycle: 'monthly' | 'yearly';
  updatePlan: (plan: string) => void;
  updateBillingCycle: (cycle: 'monthly' | 'yearly') => void;
  error?: string;
}

const PlanSelection: React.FC<PlanSelectionProps> = ({
  selectedPlan,
  billingCycle,
  updatePlan,
  updateBillingCycle,
  error,
}) => {
  const plans = [
    { value: 'basic', src: './assets/images/icon-arcade.svg', label: 'Arcade', monthly: 9, yearly: 90 },
    { value: 'standard', src: './assets/images/icon-advanced.svg', label: 'Advanced', monthly: 12, yearly: 120 },
    { value: 'premium', src: './assets/images/icon-pro.svg', label: 'Pro', monthly: 15, yearly: 150 },
  ];

  return (
    <div className="select-plan-container">
      <h2>Select Your Plan</h2>
      <p className="note">You have the option of monthly or yearly billing</p>
      <div className="inner-plan-container">
        <div className="specific-plan">
          {plans.map((plan) => (
            <div
              key={plan.value}
              onClick={() => updatePlan(plan.label)}
              style={{
                border: selectedPlan === plan.label ? '1px solid var(--bg-confirm-b)' : '1px solid #ccc',
                background: selectedPlan === plan.label ? 'var(--very-light-gray)' : '#fff',
                transition: 'border-color 0.2s',
              }}
              className="inner-specific-plan"
            >
              <img style={{ width: '35px', height: '35px' }} src={plan.src} alt={plan.label} />
              <div className="label-billing-cycle">
                <p className="label">{plan.label}</p>
                <p className="billing-cycle">
                  {billingCycle === 'monthly' ? `$${plan.monthly}/mo` : `$${plan.yearly}/yr`}
                </p>
              </div>
            </div>
          ))}
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      <div className="monthly-yearly" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
        <span
          onClick={() => updateBillingCycle('monthly')}
          style={{
            color: billingCycle === 'monthly' ? 'var(--danim)' : 'var(--gray)',
            marginRight: '10px',
          }}
        >
          Monthly
        </span>
        <img
          onClick={() => updateBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
          style={{ cursor: 'pointer' }}
          src="./assets/images/toggle.svg"
          alt=""
        />
        <span
          onClick={() => updateBillingCycle('yearly')}
          style={{
            color: billingCycle === 'yearly' ? 'var(--danim)' : 'var(--gray)',
            marginLeft: '10px',
          }}
        >
          Yearly
        </span>
      </div>
    </div>
  );
};

export default PlanSelection;
