import './SectionTitle.css'

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto text-center sm:w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 my-8">
            <p className="text-yellow-600 mb-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">{subHeading}</p> {/* Adjusted text size based on screen sizes */}
            <h3 className="text-3xl uppercase border-y-4 py-4 font-extrabold">{heading}</h3>
        </div>
    );
};

export default SectionTitle;
