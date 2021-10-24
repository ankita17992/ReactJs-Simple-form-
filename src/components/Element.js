import React from 'react'
import Checkbox from './elements/Checkbox';
import Input from './elements/Input';
import Select from './elements/Select';
import Radiobox from './elements/Radiobox';
import Dob from './elements/Dob';
const Element = ({ field: { field_type,errors, field_id, field_label, field_placeholder, field_value, field_options } }) => {

    switch (field_type) {
        case 'text':
            return (<Input
                field_id={field_id}
                field_label={field_label}
                field_placeholder={field_placeholder}
                field_value={field_value}
                errors={errors}
                rules={{ maxLength: 20, required: true, min: 3 }}

            />)
        case 'select':
            return (<Select
                field_id={field_id}
                field_label={field_label}
                field_placeholder={field_placeholder}
                field_value={field_value}
                field_options={field_options}
            />)
        case 'checkbox':
            return (<Checkbox
                field_id={field_id}
                field_label={field_label}
                field_value={field_value}
            />)
         case 'date':
                return (<Dob
                    field_id={field_id}
                    field_label={field_label}
                    field_value={field_value}
                />)
        case 'radio':
            return (<Radiobox
                field_id={field_id}
                field_label={field_label}
                field_value={field_value}
            />)

        default:
            return null;
    }


}

export default Element
