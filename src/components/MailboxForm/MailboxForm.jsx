import { useState } from 'react'

const MailboxForm = ({ onAddBox }) => {
    const [formData, setFormData] = useState({
        boxOwner: '',
        boxSize: 'small',
    })

    // Adding { onAddBox } as a parameter adds the prop to pass it to App

    const handleChange = (e) => {
        console.log('Object', {...formData, [e.target.name]: e.target.value})
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddBox(formData); 
        console.log('Same page submission without reloading')
        setFormData({
            boxOwner: '', 
            boxSize: 'small'})
    }

    // onAddBox(formData) passes the form data to App

return <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor='boxOwner'>Owner</label>
        <input 
        type='text' 
        name='boxOwner' 
        id='boxOwner' 
        value={formData.boxOwner}
        onChange={handleChange} />
    </div>
    <div>
        <label htmlFor='boxSize'>Size</label>
        <select name='boxSize'
        id='boxSize' 
        value={formData.boxSize} 
        onChange={handleChange}>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
        </select>
    </div>
    <button type='submit'>Create</button>
</form>
}

export default MailboxForm

// By adding the onAddBox(formData), the new mainbox details are now passed up to the App
// It's added to the mailboxes state
// The form clears after submission to the default settings