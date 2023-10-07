// productStore.js
import {ref,reactive} from 'vue'
import { defineStore } from 'pinia';


const taskStore = defineStore('tasks', () => {
    
    let tasks= reactive([])
   
    const addTask = (task) => {
        if (null == task  ||  task == '')
        {
            alert('Task Name cannot be empty !!')
        } else {
            tasks.push({
            name: task,    
            });
        }
        
        console.log(tasks)
    }
    const totalTasks =() => {
       return tasks.length;
    }

    const removeTask = (i) => {
        tasks.splice(i, 1);
        taskStatus.splice(i, 1);

    }

    // const toggle = (i) => {
    //     tasks[i].status = 
    // }

    const taskStatus = reactive([]);
    
    return {tasks, addTask, totalTasks, removeTask, taskStatus}
})



export {taskStore}