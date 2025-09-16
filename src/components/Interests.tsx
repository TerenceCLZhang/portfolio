import AboutMeCard from "./AboutMeCard";
import InterestsDragDrop from "./InterestsDragDrop";

const Interests = () => {
  return (
    <AboutMeCard
      title="Beyond Code"
      description="Learn more about my interests and hobbies!"
      content={() => <InterestsDragDrop />}
    />
  );
};

export default Interests;
