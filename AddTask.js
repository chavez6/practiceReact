import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('add task')
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add--form' onSubmit={onSubmit}>
            <div>
                <label>Task</label>
                <input type='text' placeholder='AddTask' value={text}
                onChange={ (e) => setText(e.target.value) }/>
            </div>
            <div>
                <label>Day/ Time</label>
                <input type='text' placeholder='AddDayandTime' value={day}
                onChange={ (e) => setDay(e.target.value) } />
            </div>
            <div>
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder} placeholder='AddTask' value={reminder}
                onChange={ (e) => setReminder(e.currentTarget.checked) } />
            </div>

            <input type='submit' value='save' className='btn btn-block' />
        </form>
    )
}

export default AddTask
