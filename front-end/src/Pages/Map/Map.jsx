import React from 'react'


const Map = ()=> {
    return (
        <div className='harta'>
            <iframe 
                width="1400"
                height="900"
                frameborder="0" 
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDp2Kdg1QcY8LnCGKkP-u1muYmU8Y2FE-4&q=Bucharest&zoom=13"
                allowfullscreen>
            </iframe>
        </div>
    )
}
export default React.memo(Map);
