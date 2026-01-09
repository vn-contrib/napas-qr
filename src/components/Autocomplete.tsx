import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/react";
import { useState, type Key } from "react";

interface Props<T> {
  options: T[]
  displayValue(opt: T): string
  keyValue(opt: T): Key
  value: T | null
  onChange(value: T | null): void
}

export default function Autocomplete<T>({ options, displayValue, keyValue, value, onChange }: Props<T>) {
  const [query, setQuery] = useState('')
  // const filteredOptions

  return (
    <Combobox value={value} onChange={onChange} onClose={() => setQuery('')}>
      <ComboboxInput
        aria-label="Assignee"
        displayValue={displayValue}
        onChange={(event) => setQuery(event.target.value)}
      />
      <ComboboxOptions anchor="bottom" className="border empty:invisible">
        {options.map((opt) => (
          <ComboboxOption key={keyValue(opt)} value={opt} className="data-focus:bg-blue-100">
            {displayValue(opt)}
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  )
}