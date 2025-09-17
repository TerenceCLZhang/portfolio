const SectionHead = ({
  title,
  heading,
  description,
}: {
  title: string;
  heading: string;
  description: string;
}) => {
  return (
    <div className="flex items-center justify-center flex-col space-y-3 text-center">
      <span className="uppercase text-gray-400 font-semibold tracking-[0.65rem]">
        {title}
      </span>
      <h3>{heading}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default SectionHead;
