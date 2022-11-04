import {useState} from 'react'

const ComfortPage = () => {
    const[formData, setFormData]= useState({
        status: 'not started',
        progress: 0,
    })

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        console.log("submit handled")
    }
    return (
    <div className="comfort-input-container">
        <div className="comfort-intro-text">
            <h2>Let's adjust the comfort level</h2>
        </div>
    <form onSubmit={handleSubmit}>
    <label>Comfort</label>
        <input
            id="comfort-only-1"
            name="comfort"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority === 1}
        />
        <label htmlFor="priority-1">1</label>
        <input
            id="comfort-2"
            name="comfort"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority === 2}
        />
        <label htmlFor="priority-2">2</label>
        <input
            id="comfort-3"
            name="comfort"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority === 3}
        />
        <label htmlFor="priority-3">3</label>
        <input
            id="comfort-4"
            name="comfort"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority === 4}
        />
        <label htmlFor="priority-4">4</label>
        <input
            id="comfort-5"
            name="comfort"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority === 5}
        />
        <label htmlFor="priority-5">5</label>
        <input type="submit"/>
    </form>
        <div className="blankBox"></div>
        <div className="blockquote">
            <h4>The secret to making progress is getting started</h4>
            <h5>-Mark Twain</h5>
        </div>
    </div>
    )
}

export default ComfortPage