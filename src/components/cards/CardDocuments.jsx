export default function DocumentButtonFeatureCard(props) {
  const { img, title, paragraph, className, children } = props;

  return (
    <div
      className={`max-w-[370px] desktop1:max-w-[400px] justify-between p-0 flex flex-col tablet2:flex-row tablet2:gap-3 items-center desktop1:hover:scale-110 transition desktop1:py-2 bg-gray-200 p-4 rounded-lg shadow-md ${className}`}
    >
      <div className="h-[64px] w-[64px] rounded-md flex justify-center items-center">
        {img && (
          <img src={img} alt={title} className="h-full w-full object-contain" />
        )}{" "}
      </div>
      <div className=" desktop1:w-[40%]">
        <h1 className="h-auto font-bold font-mainFont text-title1 text-start text-secondary">
          {title}
        </h1>
        <p className="text-start text-black opacity-70 text-paragraph2 font-mainFont w-full pb-2">
          {paragraph}
        </p>
      </div>

      <button className="mt-2 px-4 py-2 w-full tablet2:w-auto bg-primary text-white rounded-md desktop1:hover:scale-110 transition">
        Baixar
      </button>
      {children}
    </div>
  );
}
