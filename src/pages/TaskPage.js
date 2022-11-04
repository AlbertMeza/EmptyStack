import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const TaskPage = () => {

    const[formData, setFormData]= useState({
        status: 'not started',
        progress: 0,
    })

    const editMode = false

    //const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        // if(!editMode) {
        // const response = post request
        //}
        // const success = response.status === 200
        // if (success) {
        // navigate('/')
        //}
    }

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const categories = ["test1","test2","test3"]

    return (
        <div className="task">
            <h1>{editMode ? "Update your task" : "Create a task"}</h1>
            <div className="task-container">
                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.title}
                        />

                        <label htmlFor="description">Description</label>
                        <input
                            id="description"
                            name="description"
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.description}
                        />
                        <label>Add to Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            {categories.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                        <label htmlFor="new-category">Category</label>
                        <input
                            id="new-category"
                            name="category"
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.category}
                        />
                        <label>Comfort</label>
                        <div className="multiple-input-container">
                            <input
                                id="comfort-1"
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
                        </div>
                        {editMode &&
                        <>
                            <input
                                type="range"
                                id="progress"
                                name="progress"
                                value={formData.progress}
                                min="0"
                                max="100"
                                onChange={handleChange}
                            />
                            <label htmlFor="progress">Progress</label>


                        <label>Status</label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                            >
                                <option selected={formData.status === 'learned'} value='learned'>Learned</option>
                                <option selected={formData.status === 'learning'} value='learning'>Learning</option>
                                <option selected={formData.status === 'not started'} value='not started'>Not started</option>
                            </select>
                            </>
                        }

                        <input type="submit"/>
                    </section>

                    <section>
                        <label htmlFor="owner">Owner</label>
                        <input
                            id="owner"
                            name="owner"
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.owner}
                        />
                        <label htmlFor="avatar">Image</label>
                        <input
                            id="avatar"
                            name="avatar"
                            type="url"
                            onChange={handleChange}
                            required={true}
                            value={formData.avatar}
                        />
                        <div className="img-preview">
                            {formData.avatar && (
                                <img src={formData.avatar} alt="image preview"/>
                            )}
                        </div>
                    </section>
                </form>
            </div>
        </div>
    )
}

export default TaskPage