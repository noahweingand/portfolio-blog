export const Selector = () => {
  return (
    <div className="font-sans flex justify-between content-center px-4 pb-12">
      <div className="text-left">
        <span className="text-xs md:text-sm font-normal text-gray-600">&lt; Previous Post</span>
        <p>
          <a
            href="#"
            className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
          >
            Blog title
          </a>
        </p>
      </div>
      <div className="text-right">
        <span className="text-xs md:text-sm font-normal text-gray-600">Next Post &gt;</span>
        <p>
          <a
            href="#"
            className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
          >
            Blog title
          </a>
        </p>
      </div>
    </div>
  );
};
