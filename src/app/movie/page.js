import Link from "next/link";

const Page = () => {
    return (
        <>
            <h1>
                Movie Page
            </h1>
            <Link href="/movie/asdf">
                Go to
            </Link>
        </>

    );
};

export default Page;