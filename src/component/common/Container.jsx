/* eslint-disable react/prop-types */

const Container = ({ children }) => {
    return (


        <div className=" max-w-screen-xl mx-auto py-8 md:py-6 px-3">
            {children}
        </div>
    );
};

export default Container;