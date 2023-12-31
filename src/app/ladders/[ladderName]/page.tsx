import axios from "axios";
import Link from "next/link";

type PropType = {
    params: {
        ladderName: string;
    }
};

type LadderProblem = {
    name: string | undefined;
    url: string | undefined;
    difficulty: string | undefined;
} | null;

type Ladder = {
    name: string;
    problems: LadderProblem[];
} | null;

export default async function LadderPage({ params } : PropType) {
    let ladder : Ladder = null;
    try{
        const {data} = await axios.get(`https://a2ojapp.vercel.app/api/ladders/${params.ladderName}`);
        ladder = data;
    }catch(e){
        console.log(e);
    }
    return (
        <div className='w-full p-8 flex flex-col items-center'>
            <h1 className="text-center text-2xl">This is <span className="text-blue-300 p-2 px-5 border-2 rounded-lg border-blue-300">{params.ladderName}</span></h1>
            {/* Table that have headers as name, difficuly level */}
            <table className="table-auto w-auto mt-10">
                <thead className="text-left">
                    <tr className="uppercase text-sm leading-normal">
                        <th className="px-4 py-2 text-xl">Name</th>
                        <th className="px-4 py-2 text-xl">Difficulty</th>
                    </tr>
                </thead>
                <tbody>
                    {ladder?.problems.map((problem, index) => (
                        <tr key={index}>
                            <td className="px-4 py-3 border-2 border-gray-500 bg-gray-800">
                                <Link href={problem?.url || ""} className="hover:text-blue-300 p-1 hover:underline visited:text-green-500">
                                    {problem?.name}
                                </Link>
                            </td>
                            <td className="px-4 py-3 border-2 border-gray-500">{problem?.difficulty}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}