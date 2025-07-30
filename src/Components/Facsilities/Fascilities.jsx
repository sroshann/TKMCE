import React, { useState } from 'react'
import { topSection, middleSection } from './data.fascilites'
import './Fascilities.css'

function Fascilities() {

    const [showMultiple, setShowMultiple] = useState(false)
    const [indexOption, setIndexOption] = useState(-1)

    const handleMultipleOptions = (index) => {

        setIndexOption(index)
        setShowMultiple(previous => !previous)

    }

    return (

        <>

            {/* Top section */}
            <section id="top-section">

                {

                    topSection && topSection.map((object, index) => (

                        <div 
                        
                            key={index} 
                            onClick={() => handleMultipleOptions(index)} 
                            className='first-children'
                            
                        >

                            <div className='frst-chld-left'>

                                <img

                                    src="https://res.cloudinary.com/dle6cdwdb/image/upload/v1753882271/student-alt_utetfo.png"
                                    alt="Fasilities icon"

                                />
                                <p>{object.name}</p>

                            </div>
                            {object.options && <i className='bx  bx-chevrons-down'  ></i>}
                            {(showMultiple && object.options && indexOption === index) &&

                                <section id='second-container'>

                                    {

                                        object.optionDetails && object.optionDetails.map((optionChild, index) => (

                                            <div key={index} className='second-children'>

                                                <p>{optionChild}</p>

                                            </div>

                                        ))

                                    }

                                </section>

                            }

                        </div>

                    ))

                }

            </section>

            {/* Middle section */}
            <section id="middle-section">

                {

                    middleSection && middleSection.map( ( object, index ) => (

                        <section key={ index }>

                            <p className='middle-section-headings'>{ object.heading }</p>
                            <div>

                                {

                                    object.details.map(( object, index ) => ( 
                                    
                                        <p key={ index } className='middle-section-texts'>{ object }</p> 
                                    
                                    ))

                                }

                            </div>

                        </section>

                    ) )

                }

            </section>

        </>

    )

}

export default Fascilities