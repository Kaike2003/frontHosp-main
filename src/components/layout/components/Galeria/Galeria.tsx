import React from 'react'

function Galeria() {
    return (

        <div className="bg-white dark:bg-gray-800  h-full py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

                <div className="flex flex-col md:grid md:grid-cols-3 gap-3">
                    <div className="relative rounded overflow-hidden">
                        <img src={require("../../../../assets/galeria/img_1.jpg")} alt="Hanging Planters" className="w-full" />

                    </div>
                    <div className="relative rounded overflow-hidden">
                        <img src={require("../../../../assets/galeria/img_2.jpg")} alt="Hanging Planters" className="w-full" />
                    </div>
                    <div className="relative rounded overflow-hidden">
                        <img src={require("../../../../assets/galeria/img_3.jpg")} alt="Hanging Planters" className="w-full" />
                    </div>
                    <div className="relative rounded overflow-hidden">
                        <img src={require("../../../../assets/galeria/img_4.jpg")} alt="Hanging Planters" className="w-full" />
                    </div>
                    <div className="relative rounded overflow-hidden">
                        <img src={require("../../../../assets/galeria/img_5.jpg")} alt="Hanging Planters" className="w-full" />
                    </div>
                    <div className="relative rounded overflow-hidden">
                        <img src={require("../../../../assets/galeria/img_6.jpg")} alt="Hanging Planters" className="w-full" />
                    </div>
                    <div className="relative rounded overflow-hidden">
                        <img src={require("../../../../assets/galeria/img_7.jpg")} alt="Hanging Planters" className="w-full" />
                    </div>
                    <div className="relative rounded overflow-hidden">
                        <img src={require("../../../../assets/galeria/img_8.jpg")} alt="Hanging Planters" className="w-full" />
                    </div>
                    <div className="relative rounded overflow-hidden">
                        <img src={require("../../../../assets/galeria/img_9.jpg")} alt="Hanging Planters" className="w-full" />
                    </div>
                    <div className="relative rounded overflow-hidden">
                        <img src={require("../../../../assets/galeria/img_10.jpg")} alt="Hanging Planters" className="w-full" />
                    </div>
                    <div className="relative rounded overflow-hidden">
                        <img src={require("../../../../assets/galeria/img_11.jpg")} alt="Hanging Planters" className="w-full" />
                    </div>
                    <div className="relative rounded overflow-hidden">
                        <img src={require("../../../../assets/galeria/img_12.jpg")} alt="Hanging Planters" className="w-full" />
                    </div>
                    <div className="relative rounded overflow-hidden">
                        <img src={require("../../../../assets/galeria/img_13.jpg")} alt="Hanging Planters" className="w-full" />
                    </div>
                    <div className="relative rounded overflow-hidden">
                        <img src={require("../../../../assets/galeria/img_14.jpg")} alt="Hanging Planters" className="w-full" />
                    </div>
                    <div className="relative rounded overflow-hidden">
                        <img src={require("../../../../assets/galeria/img_15.jpg")} alt="Hanging Planters" className="w-full" />
                    </div>
                    
                </div>

            </div>
        </div>

    )
}

export default Galeria