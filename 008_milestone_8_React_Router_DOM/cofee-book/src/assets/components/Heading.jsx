// Reusable components

const Heading = ({title, subtitle}) => {
    return (
        <div className="flex flex-col w-full justify-center items-center my-12 font-thin text-center">
            <h1 className="text-xl md:text-2xl lg:text-4xl">{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
};

export default Heading;