<script>
  import Task from "./Task.svelte";
  import { createEventDispatcher } from 'svelte';
  export let name;
  export let taskList = [];
  export let pos = 0;
  const dispatch = createEventDispatcher();
  function addTask() {
    //let newTask = prompt('Que quieres añadir:');
   // taskList = [...taskList, newTask];
    dispatch('openModal', {
            pos
        });
  }
  function allowDrop(ev) {
  ev.preventDefault();
  }
  function handleDrag({detail}){
    detail.dataTransfer.setData('task', detail.target.innerText);
    detail.dataTransfer.setData('fromPos', pos);
  }
  function handleDrop(e){
    e.preventDefault();
    const fromPos= e.dataTransfer.getData('fromPos');
    const task= e.dataTransfer.getData('task');
    dispatch('changeColumn', {
      from: +fromPos,
      to: pos,
      value: task
    })
  }
</script>

<div class="task-col">
  <div class="task-col__header">
    <h3>{name}</h3>
  </div>
  <div class="task-col__droparea" on:drop={handleDrop} on:dragover={allowDrop}>
    {#each taskList as task}
    <Task content={task} on:handleDrag={handleDrag} />
    {/each}
    
  </div>
  <button class="btn" on:click={addTask}>
    Añadir Tarea </button>
</div>

<style lang="scss">
  @import "../sass/variables";

  .task-col {
    padding: 0 2ch 2ch;
    border: 1px dashed #09f;
    &__header {
      color: $font-blue;
      h3{
        margin: 1ch auto;
      }
    }
    &__droparea {
      padding-top: 1ch;
      margin-top: 8px;
      background: $bg-board;
      height: $column-height;
      //overflow-y: scroll;
    }
    .btn {
      width: 100%;
      margin: 0;
      background: $bg-button;
      color: $font-white;
      cursor: pointer;
      border:none;
      transition: background 0.2s ease-out;
      &:hover, &:focus {
        background: $hover-blue;
      }
    }
  }
</style>
