export default function IconButton(props) {
  const {
    icon,
    label,
    ariaLabel,
    className = "",
    padding = "px-[12px] py-[10px]", // valor padrão se não passar
  } = props;

  return (
    <button
      className={`${className} ${padding} flex flex-row items-center justify-center transition rounded-[10px] bg-primary hover:scale-110 text-primary border-primary`}
      aria-label={ariaLabel}
    >
      <div className="flex items-center text-center gap-[10px]">
        <div className="flex flex-col text-labelsIcons justify-end">{icon}</div>
      </div>
    </button>
  );
}
