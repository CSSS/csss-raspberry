export const SimpleInput = ({ className, title, type, placeholder, width }) => {
  return (
    <div className={className}>
      <p className="font-300 text-100 text-sm mb-1 ml-1">{`${title}`}</p>
      <input
        pattern="\d{4}-\d{2}-\d{2}"
        type={`${type}`}
        className={`background-700 border-300-200 text-white font-300 px-3.5 py-1.5 ${width} inputStyle`}
        placeholder={`${placeholder}`}
      />
    </div>
  );
};
