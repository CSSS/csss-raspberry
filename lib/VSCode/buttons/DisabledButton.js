export const DisabledButton = ({ className, text, onClick, href }) => {
  return (
    <div className={className}>
      <a href={href}>
        <button
          disabled
          className="background-transparent border-300 text-300 font-400 px-4 py-1 rounded-md opacity-60"
          onClick={onClick}
        >
          {text}
        </button>
      </a>
    </div>
  );
};
