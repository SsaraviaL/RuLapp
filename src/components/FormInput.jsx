
function FormInput({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  error = "",
  maxLength,
  autoComplete,
  inputMode,
  className = "form-group",
}) {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>

      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(evento) => onChange(evento.target.value)}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />

      {error && (
        <p id={`${id}-error`} className="error-message" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default FormInput;
