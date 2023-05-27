import React, {useState} from 'react'
//here we import

function Todo(){
    const[activity, setActivity]= useState("")
    const[listData, setlistData]= useState([]);
    function addActivity(){
           //setlistData([...listData, activity])
           //console.log(listData)
           setlistData((listData)=>{
            const updatedList = [...listData, activity]
            console.log(updatedList)
            setActivity('');
            return updatedList
           })
    }
//this is the remove button function
    function removeActivity(i){
            const updatedListData = listData.filter((elem, id)=>{
                return i!=id;
            })
            setlistData(updatedListData);
    }
//this is the remove all button function
    function removeAll(){
        setlistData([])
    }
    return(
         <>
         <div className='container'>
            <div className='header'>Debanshu ToDo</div>
            <input type='text' placeholder='Add Activity' value={activity} onChange={(e=>setActivity(e.target.value))}/>
            <button onClick={addActivity}>Add</button>
            <p className='List-heading'>Here Is your List ::{"))"}</p>
            {listData!=[] && listData.map((data, i)=>{
                return(
                    <>
                    <p key={i}>
                        <div className='listData'>{data}</div>
                        <div className='btn-position'>
                        <button onClick={()=>removeActivity(i)}>Remove(X)</button>
                        </div>
                         
                    </p>
                    </>
                )
            })}
            {listData.length>=1 && <button onClick={removeAll}>Remove All</button>}
             
        </div>
         </>
    )
}

export default Todo