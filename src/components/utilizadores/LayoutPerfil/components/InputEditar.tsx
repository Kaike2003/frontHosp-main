import React from "react";
import { TInput } from "../../../../interface";

export default function Input({
    onchange,
    titulo_label,
    type,
    id,
    placeholder,
    touched,
    errors,
    value
}: TInput) {



    return (
        <React.Fragment>

            <div>
                <label
                    className="text-black dark:text-gray-200 font-medium"
                    htmlFor={id}>{titulo_label}</label>
                <input
                    id={id}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    onChange={(e) => { onchange(e) }}
                />

                {touched && errors && <div className="font-medium">{String(errors)}</div>}

            </div>

        </React.Fragment>
    )

}