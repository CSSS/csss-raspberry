export const OutlineButton = ({ className, text, onClick, href }) => {
  return (
    <div className={className}>
      <a href={href}>
        <button
          className="background-transparent border-100 text-100 font-400 px-4 py-1 rounded-md buttonPrimaryOutline"
          onClick={onClick}
        >
          {text}
        </button>
      </a>
    </div>
  );
};
