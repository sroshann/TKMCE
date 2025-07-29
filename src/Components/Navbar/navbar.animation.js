import gsap from "gsap"

// Navbar opening animation
export const animateNavbar = ( divRef ) => {

    const tl = gsap.timeline()

    tl.fromTo(divRef.current,

        { height: '0px', opacity: 0 },
        {
            height: '459px',
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out'
        }

    )

    tl.fromTo(divRef.current.querySelectorAll('div'),

        { opacity: 0 },
        {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.inOut',
        },
        '-=0.2' // start slightly before the first animation ends (optional)

    )

}

// Navbar closing animation
export const animateNavbarClose = (divRef, setShowMenu = null) => {

    const tl = gsap.timeline({ onComplete: () => setShowMenu(prev => !prev) });

    tl.to(divRef.current.querySelectorAll('div'), {

        opacity: 0,
        ease: 'power2.inOut',
        duration: 0.4

    })

    tl.to(divRef.current, {

        height: '0px',
        opacity: 0,
        duration: 0.6,
        ease: 'power2.inOut'

    }, '-=0.2')
}