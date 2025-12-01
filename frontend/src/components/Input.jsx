function Input({type, value, setValue, placeholder, className, onKeyDown, ref}) {
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
    onKeyDown={onKeyDown}
    ref={ref}
    />
  )
}

export default Input;