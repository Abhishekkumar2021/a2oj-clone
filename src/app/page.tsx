import Link from 'next/link';
import React from 'react';

export default function Home() {
    return (
        <div className='w-full h-[80vh] flex justify-center flex-col gap-5 items-center p-10'> 
            <div className='w-full flex justify-center items-center'>
                <p className='text-3xl text-center'>Welcome to <span className='text-blue-300'>A2OJ</span> Clone</p>
            </div>
            <div className='w-full flex justify-center items-center'>
                <p className='text-2xl text-center'>
                    This is a clone application of the website <a href="https://earthshakira.github.io/a2oj-clientside/server/Ladders.html" className="text-blue-300 hover:underline">A2OJ</a> made using <a href="https://nextjs.org/" className="text-blue-300 hover:underline">Next.js</a> and <a href="https://tailwindcss.com/" className="text-blue-300 hover:underline">Tailwind CSS</a>.
                </p>
            </div>
            <div className='w-full flex justify-center items-center'>
                <p className='text-2xl text-center'>
                    The source code of this project can be found at <a href="hhtps://github.com/Abhishekkumar2021/a2oj-clone" className="text-blue-300 hover:underline">Github</a>.
                </p>
            </div>

            <Link href='/ladders'>
                <div className='w-80 p-5 bg-[#343434] flex min-h-24 flex-col justify-center rounded-lg transition-all duration-300 hover:bg-[#222]'>
                    <h1 className='text-2xl text-center'>Go to Ladders</h1>
                </div>
            </Link>
        </div>
    );
}