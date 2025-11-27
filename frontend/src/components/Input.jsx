function Input({type, value, setValue, placeholder, className}) {
  return (
    <input
    type={type}
    value={value}
    className={className}
    onChange={(e) => {
      const newValue = e.target.value;
      setValue(newValue);
    }}
    placeholder={placeholder}
    />
  )
}

export default Input;