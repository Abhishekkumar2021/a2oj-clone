import Link from "next/link"

const Navbar = () => {
    return (
        <nav className='w-full py-5  flex justify-between items-center px-8 bg-[#343434] shadow-sm'>
            <h1 className="text-3xl text-blue-400">A20J Ladders</h1>
            <div className="flex gap-3">
                <Link href="/" className='text-xl  hover:text-blue-400 active:scale-90 transition-all duration-300'
                >Home</Link>
                <Link href="/ladders" className='text-xl hover:text-blue-400 active:scale-90 transition-all duration-300'
                >Ladders</Link>
            </div>
        </nav>
    )
}

export default Navbar