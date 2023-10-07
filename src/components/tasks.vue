<script setup>
    import {
        ref,reactive,
        computed
    } from 'vue';
    import {
        taskStore
    } from '../stores/taskStore'; // Import your store
    //import { BeakerIcon } from '@heroicons/vue/24/solid'

    const tasksStore = taskStore(); // Create an instance of your store


const name = ref('')

const status = ref(false)

function addTask() {
  tasksStore.addTask(name.value);

  name.value = '';
  
}
</script>

<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row g-3">
                <div class="col-md-5">
                    <div class="card mt-3">
                        <div class="card-header bg-success text-white">
                            Add Task
                        </div>
                        <div class="card-body p-4">
                            <form @submit.prevent="addTask()"
                                class="row row-cols-lg-auto align-items-center d-flex justify-content-center">

                                <div class="col-8">
                                    <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
                                    <div class="input-group">
                                        <div class="input-group-text">Task name</div>
                                        <input v-model="name" type="text" class="form-control"
                                            id="inlineFormInputGroupUsername" placeholder="Task Name">
                                    </div>
                                </div>
                                <div class="col-4 ">
                                    <button type="submit" class="btn btn-primary">Add</button>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="card mt-3">
                        <div class="card-header bg-primary text-white">
                            Tasks
                        </div>
                        <div class="card-body">
                            <table class="table table-striped table-hover table-bordered text-center">
                                <tr class="table-danger">
                                    <td>Serial</td>
                                    <td>Execution</td>
                                    <td>Task Name</td>
                                    <td>Status</td>
                                    <td>Action</td>
                                </tr>
                                <tr v-for="(task,index) in tasksStore.tasks" :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td><input class="ml-2" type="checkbox" v-model="tasksStore.taskStatus[index]" />
                                    </td>
                                    <td>{{ task . name }}</td>
                                    <td>{{ tasksStore . taskStatus[index] ? 'Done' : 'Not Done' }}</td>
                                    <td>
                                        <button class="btn btn-danger btn-sm" @click="tasksStore.removeTask(index)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                <path
                                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                <path
                                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                            </svg>

                                        </button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
    .container-fluid {
        background-color: dimgrey;
        height: 100vh;
        padding-top: 5%;
    }
</style>
