export const Memorial = () => {
  return (
    <div>
      <hr className="border-b-2 border-gray-400 mb-8 mx-4"></hr>

      <div className="flex w-full items-center font-sans px-4 py-12">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src="http://i.pravatar.cc/300"
          alt="Avatar of Author"
        ></img>

        <div className="flex-1 px-2">
          <p className="text-base font-bold text-base md:text-xl leading-none mb-2">
            Jo Bloggerson
          </p>
          <p className="text-gray-600 text-xs md:text-base">
            Minimal Blog Tailwind CSS template by
            <a
              className="text-green-500 no-underline hover:underline"
              href="https://www.tailwindtoolbox.com"
            >
              TailwindToolbox.com
            </a>
          </p>
        </div>

        <div className="justify-end">
          <button className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">
            Read More
          </button>
        </div>
      </div>

      <hr className="border-b-2 border-gray-400 mb-8 mx-4"></hr>
    </div>
  );
};
