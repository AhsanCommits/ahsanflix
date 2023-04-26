import ContactCard from "@/app/components/ContactCard";
import styles from './contact.module.css'

const Page = () => {
    return (<>
            <div className={styles.container}>
                <h1>Contact Page</h1>
                <ContactCard/>
            </div>
        </>);
};

export default Page;