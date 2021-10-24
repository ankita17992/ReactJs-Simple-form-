
import formJSON from './formElement.json';
import { useState, useEffect } from 'react';
import Element from './components/Element';
import { FormContext } from './FormContext';
function App() {
  const [elements, setElements] = useState(null);
  useEffect(() => {
    setElements(formJSON[0])

  }, [])
  const { fields, page_label } = elements ?? {}

//const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
/*const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}*/
  const handleSubmit = (event) => {
    event.preventDefault();
   
    }
  const handleChange = (id, event) => {
    const newElements = { ...elements }
    newElements.fields.forEach(field => {
      const { field_type, field_id } = field;
      if (id === field_id) {
        switch (field_type) {
          case 'radio':
            field['field_value'] = event.target.checked;
            break;
          /*case 'text': 
            errors.email = 
              validEmailRegex.test(event.target.value) && event.target.value.length < 5
                ? ''
                : 'your input is not valid!';
            break; */
          default:
              field['field_value'] = event.target.value;
              break;
        }

      }
      setElements(newElements)
    });
  }
  return (
    <div>
    <FormContext.Provider value={{ handleChange }}>
      <div className="App container">
        <h3>{page_label}</h3>
        <form>
          {fields ? fields.map((field, i) => <Element key={i} field={field} />) : null}
          <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>

      </div>
   
    </FormContext.Provider>

</div>
  );


/* this will show the submitted data 
if we put into the div above 
after npm start 

<ul>
Submitted Data is :
<li>Name - {JSON.stringify(elements.fields[0].field_value, null, 4)}</li> 
<li>Email - {JSON.stringify(elements.fields[1].field_value, null, 4)} </li>
<li>DOB - {JSON.stringify(elements.fields[2].field_value, null, 4)}</li>
<li>Gender - {JSON.stringify(elements.fields[3].field_value, null, 4)}</li>
<li>Country of Birth - {JSON.stringify(elements.fields[5].field_value, null, 4)}</li>
<li>Marital Status - {JSON.stringify(elements.fields[6].field_value, null, 4)} </li>
</ul>

*/
}

export default App;

