import { NextRequest, NextResponse } from "next/server"
import axios from "axios";
import * as cheerio from "cheerio";

const baseUrl = 'https://earthshakira.github.io/a2oj-clientside/server';

type LadderProblem = {
    name: string | undefined;
    url: string | undefined;
    difficulty: string | undefined;
} | null;

type Ladder = {
    name: string;
    problems: LadderProblem[];
}



// GET /api/ladders/[ladderName]
export async function GET(request: NextRequest) {
    try {
        const ladderName = request.url.split('/').slice(-1)[0];
        const ladderUrl = `${baseUrl}/${ladderName}.html`;
    
        const { data } = await axios.get(ladderUrl);
        const $ = cheerio.load(data);

        const problems: LadderProblem[] = [];

        $('tbody tr').each((i, el) => {
            const problemName = $(el).find('td:nth-child(2)').text().trim();
            const problemUrl = $(el).find('td:nth-child(2) a').attr('href');
            const difficulty = $(el).find('td:nth-child(4)').text().trim();

            if(problemName && problemUrl && difficulty){
                problems.push({
                    name: problemName,
                    url: problemUrl,
                    difficulty
                });
            }
        });

        const ladder: Ladder = {
            name: ladderName,
            problems
        } 

        return new NextResponse(JSON.stringify(ladder),  {
            headers: {
                "content-type": "application/json",
            },
        });
    } catch (error) {
        return new NextResponse("Something went wrong");
    }
}