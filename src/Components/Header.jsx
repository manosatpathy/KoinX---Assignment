const Header = () => {
    return (
        <div className="w-full bg-white flex justify-center items-center shadow-sm">
            <div className='bg-white flex justify-between items-center lg:container lg:mx-auto md:px-8 lg:px-16'>
                <img src="/images/logo.png" alt="logo" />
                <ul className='flex font-semibold text-lg gap-10 items-center'>
                    <li className='cursor-pointer'>Crypto Taxes</li>
                    <li className='cursor-pointer'>Free Tools</li>
                    <li className='cursor-pointer'>Resource Center</li>
                    <button className='text-white bg-blue-600 ml-3 px-6 py-1.5 rounded-lg'>Get Started</button>
                </ul>
            </div>
        </div>
    )
}

export default Header