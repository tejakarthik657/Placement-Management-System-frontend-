const FormInput = ({ label, name, type, placeholder, value, onChange }) => (
  <div className="mb-6">
    <label htmlFor={name} className="block text-sm font-semibold text-slate-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
      required
    />
  </div>
);

export default FormInput;