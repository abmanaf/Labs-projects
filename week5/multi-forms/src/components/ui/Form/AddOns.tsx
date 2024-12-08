import React from 'react';
import Checkbox from '../Checkbox';

interface AddOnsProps {
  addOns: { [key: string]: boolean };
  updateAddOns: (addOn: string, value: boolean) => void;
  onNext: () => void;
  onPrevious: () => void;
  canProceed: boolean;
}

const availableAddOns = [
  { id: 'onlineService', label: 'Online Service', note: 'Access to multiplayer games', monthly: 2, yearly: 20 },
  { id: 'storage', label: 'Larger Storage', note: 'Extra 1TB of cloud save', monthly: 2, yearly: 20 },
  { id: 'customizableProfile', label: 'Customizable Profile', note: 'Custom theme on your profile', monthly: 3, yearly: 30 },
];

const AddOns: React.FC<AddOnsProps> = ({ addOns, updateAddOns }) => {
  return (
    <div className="step-container">
      <div className="add-ons-content">
        <h2>Pick Add-Ons</h2>
        <p>Add-ons enhance your experience.</p>
        {availableAddOns.map((addOn) => (
          <Checkbox
            key={addOn.id}
            label={addOn.label}
            note={addOn.note}
            price={`+${addOn.monthly}/mon`}
            checked={addOns[addOn.id]}
            onChange={(e) => updateAddOns(addOn.id, e.target.checked)}
          />
        ))}
      </div>
    </div>
  );
};

export default AddOns;
