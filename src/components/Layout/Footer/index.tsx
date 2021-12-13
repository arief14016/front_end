import traveloLogo from "public/assets/travelo-logo-footer.png"
import Image from "next/image"
import styles from "./Footer.module.css"

import Container from "components/Container"
import FooterInfo from "./FooterInfo"

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <Container size="lg">
                <div className="flex bg-white p-16">
                    <figure>
                        <Image 
                            src={traveloLogo}
                            alt="Travelo Logo"
                            placeholder="blur"
                            height="98"
                            width="136"
                        />  
                    </figure>
                    <div className="flex flex-1 justify-between ml-[106px]">
                        <FooterInfo 
                            title="Info"
                            content={[
                                {label: 'Tentang Kami', href: '/'},
                                {label: 'Testimonial', href: '/'},
                                {label: 'Kontak', href: '/'}
                            ]} 
                        />
                        <FooterInfo 
                            title="Perusahaan"
                            content={[
                                {label: 'Syarat & Ketentuan', href: '/'},
                                {label: 'Kebijakan Privasi', href: '/'},
                                {label: 'Blog', href: '/'},
                                {label: 'Bantuan Pelayanan', href: '/'}
                            ]} 
                        />
                        <FooterInfo 
                            title="Kontak"
                            content={[
                                'Jl. Kemana Kita',
                                'Surabaya, Jawa Timur',
                                'Indonesia',
                                '(021696969)',
                                'contact@travelo.com'
                            ]} 
                        />
                    </div>
                </div>
            </Container>
            <div className="bg-blue-100 p-3">
                <p className="text-heading-5 text-white font-bold text-center">
                    Copyright 2020 Tes. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer