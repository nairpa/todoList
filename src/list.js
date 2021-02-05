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
       <div>
           <ul>
            {filterList.map((el) => {
                const {text, id, completed} = el
                return (
                    <li className={completed ? 'completed' : 'uncompleted'} key={id}>{text}<button onClick={() => handleClick(id)}>delete</button><button onClick={() => handleCompleted(id)}>completed</button></li>
                )
            })}
            </ul>
       </div>
    )
}

export default List