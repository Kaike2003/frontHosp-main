import React from "react";
import { TInput } from "../../../../../interface";


export default function Input({
    onchange,
    titulo_label,
    type,
    id,
    placeholder,
    touched,
    errors
}: TInput) {

    return (
        <React.Fragment>

            <div>
                <label
                    className="text-gray-800 font-semibold block my-3 text-md"
                    htmlFor={id}>{titulo_label}</label>
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    className="
                    w-full bg-white px-4 py-2 rounded-lg focus:outline-none
                     mt-2 text-gray-700 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500  focus:ring"
                    onChange={(e) => { onchange(e) }}
                />

                {touched && errors && <div className="font-medium w-96">{String(errors)}</div>}

            </div>

        </React.Fragment>
    )

}