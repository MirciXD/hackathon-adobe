import React from 'react'


const Map = ()=> {
    return (
        <div className='harta'>
            <iframe 
                width="1400"
                height="900"
                frameborder="0" 
                referrerpolicy="no-referrer-when-downgrade"
                src=""
                allowfullscreen>
            </iframe>
        </div>
    )
}
export default React.memo(Map);
