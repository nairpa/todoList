import React from 'react'

const List = ({list, setList, filterList}) => {
  
    const handleClick = (id) => {
        setList(list.filter((el) => {
            return (
                el.id !== id
            )
        }))
    }
    
    const handleCompleted = (id) => {
        setList(
            list.map((el) => {
                if(el.id === id) {
                    return {...el, completed: !el.completed}
                }
                return el
            })
        )
    }

    return (
        <ul>
        {filterList.map((el) => {
            const {text, id, completed} = el
            return (
                <div key={id} className='listContainer'>
                    <li className={completed ? 'completed' : 'uncompleted'}>{text}</li>
                    <button className='completedBtn'onClick={() => handleCompleted(id)}><i class="fas fa-check"></i></button>
                    <button className='deleteBtn' onClick={() => handleClick(id)}><i class="fas fa-trash"></i></button>
                </div>
            )    
        })}
        </ul>
    )
}

export default List