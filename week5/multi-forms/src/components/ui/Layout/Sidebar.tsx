import React from 'react';

interface SidebarProps {
  steps: { number: number; step: string; name: string }[];
  currentStep: number;
  onStepClick: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className='side-bar'>
      {steps.map((step, index) => (
        <div
          key={index}
          onClick={() => onStepClick(index)}
          className='steps'
        >
          <div style={{
            background: index === currentStep ? 'var(--selected)' : 'transparent',
            color: index === currentStep ? 'var(--danim)': 'var(--primary-color)'
         }} className='number'>{step.number}</div>
          <div className='step-name'>
            <span className='step'>{step.step.toUpperCase()}</span>
            <span className='name'>{step.name.toUpperCase()}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;