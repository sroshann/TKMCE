import React, { useEffect, useRef, useState } from 'react'
import { navbarData } from './data.navbar'
import { useGSAP } from '@gsap/react'
import { animateNavbar, animateNavbarClose } from './navbar.animation'
import './Navbar.css'

function Navbar() {

    const [showMenu, setShowMenu] = useState(false)

    // Handling visibility of navbar
    const handleShowMenu = () => setShowMenu(previous => !previous)
    const handleCloseMenu = () => contextSafe( () => animateNavbarClose( navRef, setShowMenu ) )()

    // GSAP
    const navRef = useRef()
    const { contextSafe } = useGSAP( () => {}, [] )

    useEffect( () => {

        if( showMenu ) contextSafe( () => animateNavbar( navRef ) )()

    }, [ showMenu ] )

    return (

        <section id='navbar'>

            {/* Welcome and menu icon */}
            <section id="upper-head">

                <p>Welcome to TKM College of Engineering</p>
                { showMenu ? <i onClick={ handleCloseMenu } className='bx  bx-x'  ></i> : 
                    <i onClick={handleShowMenu} className='bx  bx-menu-wider'  ></i> }

            </section>

            {/* Navbar menu */}
            {showMenu &&

                <section id="lower-head" ref={ navRef }>

                    {

                        navbarData && navbarData.map((object, index) => (

                            <div className='navbar-option' key={index}>

                                <p>{object.name}</p>
                                {object.options && <i className='bx  bx-plus'  ></i>}

                            </div>

                        ))

                    }

                </section>

            }

            {/* TKM Banner image */}
            <img 
            
                id='banner-image'
                src="https://res.cloudinary.com/dle6cdwdb/image/upload/v1753805690/TKM_COLLEGE_OF_ENGINEERING_pju7os.png" 
                alt="banner image" 
                
            />

        </section>

    )

}

export default Navbar