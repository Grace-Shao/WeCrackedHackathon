import React from 'react';
import Select from 'react-select';

// Define the type for the options
export type Option = {
  value: string;
  label: string;
};

// Define the props type for the component
export interface MultiSelectDropdownProps {
  selectedOptions: Option[];
  setSelectedOptions: (options: Option[]) => void;
}

const options: Option[] = [
  { value: 'buy', label: 'buy' },
  { value: 'hold', label: 'hold' },
  { value: 'sell', label: 'sell' },
  { value: 'strongBuy', label: 'strongBuy' },
  { value: 'strongSell', label: 'strongSell' },
];

export default function MultiSelectDropdown({ selectedOptions, setSelectedOptions }: { selectedOptions:any, setSelectedOptions: any }) {
  const handleChange = (selected: Option[] | null) => {
    setSelectedOptions(selected || []);
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
}
