export const SecondaryButton = ({ className, text, onClick, href }) => {
  return (
    <div className={className}>
      <a href={href}>
        <button
          className="background-400 border-400 text-300 font-400 px-4 py-1 rounded-md buttonSecondary"
          onClick={onClick}
        >
          {text}
        </button>
      </a>
    </div>
  );
};
