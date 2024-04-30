export const Card = ({ className, width, children }) => {
  return (
    <div className={`${className} ${width}`}>
      <div className={`px-4 py-4 background-400 rounded-md break-words`}>
        {children}
      </div>
    </div>
  );
};
