import React, {useState, useEffect} from 'react'
import List from './list'

const Todo = () => {
    const [text, setText] = useState('')
    const [list, setList] = useState([])
    const [status, setStatus] = useState('all')
    const [filterList, setFilterList] = useState([])

    useEffect(() => {
        filterListHandler()
    }, [list, status])
    const handleSubmit = (e) => {
        e.preventDefault()
        setList([...list, {text: text, completed: false, id: new Date().getTime().toString()}])
        setText('')
    }
    const handleChange = (e) => {
        setText(e.target.value)
    }
    
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    const filterListHandler = () => {
        switch(status) {
            case 'completed':
                setFilterList(list.filter((el) => el.completed === true))
                break;
            case 'uncompleted':
                setFilterList(list.filter((el) => el.completed === false))
                break;
            default:
                setFilterList(list)
                break;
        }
    }

    return ( 
        <>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <input type='text' value={text} onChange={(e) => handleChange(e)}/>
                <button type='submit'>enter</button>  
                <select onChange={(e)=> statusHandler(e)}>
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='uncompleted'>Uncompleted</option>
                </select>             
            </div>
        </form>
        <List list={list} setList={setList} text={text} setText={setText} filterList={filterList}/>
        </>
   )
}
export default Todo 