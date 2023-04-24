import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css"

const Movie = async () => {

    const url = process.env.RAPID_KEY;

    const options = {
        method: 'GET', headers: {
            'X-RapidAPI-Key': 'b14ded644cmshba74b7006afcde4p12dcafjsne74a7664bae6',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const data = await response.json();
    const main_data = data.titles;

    return (<>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movies</h1>
                    <div className={styles.card_section}>
                        {main_data.map((curElem) => {
                            return <MovieCard key={curElem.id} {...curElem} />
                        })}
                    </div>
                </div>
            </section>
        </>

    );
};

export default Movie;