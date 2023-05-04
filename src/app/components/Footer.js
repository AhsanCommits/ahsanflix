import React from 'react';
import footerStyles from '@/app/styles/footer.module.css'
import { FaFacebookF, FaTwitter,FaInstagram,FaLinkedinIn,FaYoutube } from "react-icons/fa";
import Link from "next/link";
import styles from "@/app/styles/navbar.module.css";


export const metadata = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
}

const Footer = () => {
    return (
        <>

            <footer className={footerStyles.footer}>
                <div className={footerStyles.content}>
                    <div className={footerStyles.top}>
                        <div className={footerStyles['logo-details']}>
                            {/*<i className={footerStyles.fab fa-slack]></i>*/}
                            <span className={footerStyles.logo_name}>Questions? Call 1-844-505-2993</span>
                        </div>
                        <div className={footerStyles[`media-icons`]}>
                            <Link href="#"><i > <FaFacebookF/> </i></Link>
                            <Link href="#"><i > <FaTwitter/> </i> </Link>
                            <Link href="#"><i > <FaInstagram/>  </i></Link>
                            <Link href="#"><i > <FaLinkedinIn /> </i></Link>
                            <Link href="#"><i > <FaYoutube />  </i></Link>
                        </div>
                    </div>
                    <div className={footerStyles['link-boxes']}>
                        <ul className={footerStyles.box}>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Investor Relations</a></li>
                            <li><a href="#">Ways to Watch</a></li>
                            <li><a href="#">Corporate Information</a></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li>
                                <Link href="/contact">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li><a href="#">Account</a></li>
                            <li><a href="#">Redeem Gift Cards</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Speed Test</a></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li>
                                <Link href="/movies">
                                    Explore Movies
                                </Link>
                            </li>
                            <li><a href="#">Buy Gift Cards</a></li>
                            <li><a href="#">Cookie Preferences</a></li>
                            <li><a href="#">Legal Notices</a></li>

                        </ul>
                        <ul className={`${footerStyles.box} ${footerStyles['input-box']}`}>
                            <li className={footerStyles.link_name}>Subscribe</li>
                            <li><input type="text" placeholder="Enter your email" /></li>
                            <li><input type="button" value="Subscribe" /></li>
                        </ul>
                    </div>
                </div>
                <div className={footerStyles['bottom-details']}>
                    <div className={footerStyles.bottom_text}>
                        <span className={footerStyles.copyright_text}> Copyright © 2023
                            <Link href="/>"> Ahsanflix Originals.</Link> All rights reserved </span>
                        <span className={footerStyles.policy_terms}>
                          <Link href="/">Privacy Policy</Link>
                          <Link href="/">Terms & Condition</Link>
                        </span>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;