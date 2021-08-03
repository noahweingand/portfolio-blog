type ExperienceCardProps = {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  type: string;
  location: string;
  description: string;
  image: string;
  altImageText: string;
};
export const ExperienceCard = () => {
  return (
    <div className="max-w-md mx-auto mb-8 px-4 bg-white rounded-xl shadow-md md:max-w-4xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-full w-full pt-6 md:pr-2 sm:pr-0 object-fit md:object-contain md:w-32 md:h-32"
            src="/costar_logo.png"
            alt="placeholder"
          />
        </div>
        <div className="pt-8 pr-4 pb-8 pl-2">
          <div className="uppercase tracking-wide text-sm font-semibold">Costar Group, Inc.</div>
          <div className="grid grid-cols-2 mt-1">
            <p className="block text-lg leading-tight font-medium text-black">
              Associate Software Engineer
            </p>
            <p className="text-gray-500 justify-self-end">Jan 2020 - Feb 2021</p>
          </div>
          <div className="mt-2 grid grid-cols-2 justify-item-stretch text-gray-500">
            <p>Full-time</p>
            <p className=" justify-self-end">Richmond, VA</p>
          </div>
          <p className="mt-2 text-gray-500">
            According to a study, it has been proven that there is a tight bond between cats and
            humans. According to a study, it has been proven that there is a tight bond between cats
            and humans. According to a study, it has been proven that there is a tight bond between
            cats and humans. According to a study, it has been proven that there is a tight bond
            between cats and humans.
          </p>
        </div>
      </div>
    </div>
  );
};
