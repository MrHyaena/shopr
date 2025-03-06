export function HeadingCenter({ subheading, heading, textHeading }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-15 mb-1 bg-white gap-10">
        <div className="max-w-wrapper mx-auto text-center flex flex-col items-center ">
          <p className="headingSmall">{subheading}</p>
          <h2 className="mt-2 my-5">{heading}</h2>
          <p className="max-w-[600px]">{textHeading}</p>
        </div>
      </div>
    </>
  );
}
