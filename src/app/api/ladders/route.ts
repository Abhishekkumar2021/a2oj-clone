import axios from "axios";
import * as cheerio from "cheerio";
import { NextRequest, NextResponse } from "next/server";
const baseUrl = 'https://earthshakira.github.io/a2oj-clientside/server';

type LadderData = {
    name: string | undefined;
    url: string | undefined;
    problemCount: number | undefined;
}

export async function GET(req: NextRequest) {
    try {
        const { data } = await axios.get(baseUrl + '/Ladders.html');
        const $ = cheerio.load(data);
        const ladders: LadderData[] = [];

        $('table tbody tr').each((i, el) => {
            const td = $(el).find('td');
            const name = td.eq(1).text();
            const url = td.eq(1).find('a').attr('href')
            const problemCount = Number(td.eq(2).text());
            const urlWithoutHtml = url?.replace('.html', '');
            if(name && urlWithoutHtml && problemCount){
                ladders.push({ name, url: urlWithoutHtml, problemCount });
            }
        });

        return new NextResponse(JSON.stringify(ladders), {
            headers: {
                "content-type": "application/json",
            },
        });
    } catch (error) {
        return new NextResponse("Something went wrong");
    }
}