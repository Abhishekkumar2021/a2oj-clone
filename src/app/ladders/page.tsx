import axios from "axios";
import Link from "next/link";

type Ladder = {
    name: string | undefined;
    url: string | undefined;
    problemCount: number | undefined;
}

export default async function LaddersPage() {
    let ladders: Ladder[] | undefined;
    try {
        const { data } = await axios.get('http://localhost:3000/api/ladders');
        ladders = data;
    }
    catch (err) {
        console.log(err);
    }

    return (
        <div className='w-full flex justify-center items-center flex-wrap p-7 gap-5'>
            {
                ladders?.map((ladder, index) => (
                    <Link href={`/ladders/${ladder.url}` as string} key={index}>
                        <div className='w-80 p-5 bg-[#343434] flex min-h-32 flex-col justify-center rounded-lg transition-all duration-300 hover:bg-[#222]'>
                            <h1 >{ladder.name}</h1>
                            <h4 className='text-gray-400 text-left'>
                                {ladder.problemCount} Problems
                            </h4>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
}