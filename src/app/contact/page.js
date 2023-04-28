import ContactCard from "@/app/components/ContactCard";
import styles from './contact.module.css'
import ContactForm from "@/app/components/ContactForm";

const Page = () => {
    return (<>
            <div className={styles.container}>
                <h1>Contact Page</h1>
                <ContactCard/>

                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span> from you </span></h2>

                    <ContactForm />
                </section>
            </div>

        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109823.40662215475!2d73.01233412523428!3d30.662650655820855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922b62cd8405a6d%3A0x6cce79c0f78cbfb7!2sSahiwal%2C%20Sahiwal%20District%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1682693036476!5m2!1sen!2s"
            width={100} height={450} style={{border:0}} allowFullScreen="" loading="lazy" className={styles.mapping}
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        
        </>);
};

export default Page;