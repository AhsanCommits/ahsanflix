import HeroSection from "@/app/components/HeroSection";
import FeatureMovies from "@/app/movie/page";
import favicon from '@/app/Ahsanflixfavicon.ico';

const Page = () => {
    return (
        <>
            <HeroSection title={`Unlimited movies, TV shows, and more`} imageUrl={"/home.svg"} />
            <FeatureMovies />
        </>
    );
};

export default Page;