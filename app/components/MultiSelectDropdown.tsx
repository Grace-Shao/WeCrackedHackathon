import React from 'react';
import Select, { MultiValue, ActionMeta } from 'react-select';

// Define the type for the options
export type Option = {
  value: string;
  label: string;
};

const options: Option[] = [
  { value: 'buy', label: 'buy' },
  { value: 'hold', label: 'hold' },
  { value: 'sell', label: 'sell' },
  { value: 'strongBuy', label: 'strongBuy' },
  { value: 'strongSell', label: 'strongSell' },
];

interface MultiSelectDropdownProps {
  selectedOptions: Option[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<Option[]>>;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({ selectedOptions, setSelectedOptions }:{ selectedOptions:any, setSelectedOptions:any }) => {
  const handleChange = (newValue: MultiValue<Option>, actionMeta: ActionMeta<Option>) => {
    setSelectedOptions(newValue as Option[]);
  };

  return (
    <Select
      isMulti
      value={selectedOptions}
      onChange={handleChange}
      options={options}
      className="text-black"
    />
  );
};

export default MultiSelectDropdown;
