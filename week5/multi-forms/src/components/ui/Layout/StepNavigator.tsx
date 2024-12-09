import React from 'react';

interface StepNavigatorProps {
  onNext: () => void;
  onPrevious: () => void;
  canProceed: boolean;
  canGoBack: boolean;
  isFinalStep?: boolean;
  onConfirm?: () => void;
}

const StepNavigator: React.FC<StepNavigatorProps> = ({
  onNext,
  onPrevious,
  canGoBack,
  isFinalStep,
  onConfirm,
}) => {
  return (
    <div className='buttons'>
      {canGoBack && <span onClick={onPrevious}>Go Back</span>}
      {isFinalStep ? (
        <button className='confirm-button' onClick={onConfirm}>Confirm</button>
      ) : (
        <button className='next-step' onClick={onNext}>
          Next Step
        </button>
      )}
    </div>
  );
};

export default StepNavigator;
