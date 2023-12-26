import error from '../../assets/images/error/error.png.jpg'

const ErrorPage = () => {
    return (
        <div className='flex justify-center h-screen items-center px-20 md:px-8'>
            <div className=' mt-5  '>
                <h2 className=' text-6xl font-extrabold mb-5'>Ops!! Page Not Found</h2>
                <img className='w-[700px] h-[500px]' src={error} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;