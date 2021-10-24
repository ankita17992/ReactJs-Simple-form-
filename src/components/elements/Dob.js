import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
const Dob = ({ field_id, field_label, field_value }) => {
    const { handleChange } = useContext(FormContext)

    return (
        <div className="mb-3">
             <label className="form-check-label" htmlFor="DOB">{field_label}</label>
            <input type="date" className="form-control" id="DOB" checked={field_value}
                onChange={event => handleChange(field_id, event)} required
            />
        </div>
    )
}

export default Dob