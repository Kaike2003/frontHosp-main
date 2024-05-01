import React from 'react'

function Localizacao() {
    return (
        <div className="relative h-96 mb-14">
            <iframe
                title='mapa'
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.google.com/maps/place/La+Rumba/@40.8273515,14.3124796,17z/data=!3m1!4b1!4m9!3m8!1s0x133ba7a0d57baa6d:0x43dad012fd56a657!5m2!4m1!1i2!8m2!3d40.8273475!4d14.3150545!16s%2Fg%2F11j4swnws2?entry=ttu"
                frameBorder="0"
                style={{ border: 0 }}
                aria-hidden="false"
                tabIndex={0}
            >
            </iframe>
        </div>
    )
}

export default Localizacao