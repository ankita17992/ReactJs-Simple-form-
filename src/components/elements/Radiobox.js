import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
const Radiobox = ({ field_id, field_label, field_value, field_options }) => {
    const { handleChange } = useContext(FormContext)

    return (
        <div className="mb-3 mt-4 ">
        <p className="form-label">{field_label}</p>
            <input type="radio" name={field_label} className="form-check-input" id="radio" checked={field_value}
               onChange={event => handleChange(field_id, event)} value={field_options}
            />
            <label className="form-label" htmlFor="radio"> Yes </label>
            <span className="mx-2"></span>
            <input type="radio" name={field_label} className="form-check-input" id="radio" 
               onChange={event => handleChange(field_id, event)} value={field_options} />
            <label className="form-label" htmlFor="radio"> No </label>
         </div>
    )
}

export default Radiobox
