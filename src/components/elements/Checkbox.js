import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
const Checkbox = ({ field_id, field_label, field_value }) => {
    const { handleChange } = useContext(FormContext)

    return (
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="Checkbox" checked={field_value}
                onChange={event => handleChange(field_id, event)}
            />
            <label className="form-check-label" htmlFor="Checkbox">{field_label}</label>
        </div>
    )
}

export default Checkbox
