import gsap from "gsap";
import {useGSAP} from "@gsap/react";

import {navLinks} from "../../constants/index.js";

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            trigger: 'nav',
            start: 'bottom top'
        });

        navTween.fromTo('nav', { backgroundColor: 'transparent' },
        {
                backgroundColor: '#00000050',
                backgroundFilter: 'blur(10px)',
                duration: 1,
                ease: 'power1.out',
        });
    })

    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="logo"/>
                    <p>Velvet Pour</p>
                </a>

                <ul>
                    {/* dynamic block of code with array and object inside it */}
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
export default Navbar
