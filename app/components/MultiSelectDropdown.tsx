// components/MultiSelectDropdown.js
import Select from 'react-select';

const options = [
  { value: 'buy', label: 'buy' },
  { value: 'hold', label: 'hold' },
  { value: 'sell', label: 'sell' },
  { value: 'strongBuy', label: 'strongBuy' },
  { value: 'strongSell', label: 'strongSell' },
];

export default function MultiSelectDropdown({ selectedOptions, setSelectedOptions }) {
  const handleChange = (selected) => {
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
