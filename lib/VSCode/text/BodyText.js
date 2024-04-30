export const BodyText = ({ className, text, color, align, size }) => {
  return (
    <div className={`${className}`}>
      <p
        className={`${color} ${align} ${size} font-200 text-opacity-60 break-words`}
      >
        {text}
      </p>
    </div>
  );
};
