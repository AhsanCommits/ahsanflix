import Link from "next/link";

const Movie = async () => {


    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': 'b14ded644cmshba74b7006afcde4p12dcafjsne74a7664bae6',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
    return (
        <>
            <h1>
                Movie
            </h1>
            <Link href="/movie/asdf">
                Go to
            </Link>
        </>

    );
};

export default Movie;