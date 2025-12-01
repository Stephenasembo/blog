function Input({type, value, setValue, placeholder, className, ref}) {
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
    ref={ref}
    />
  )
}

export default Input;