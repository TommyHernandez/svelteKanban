<script>
  import Task from "./Task.svelte";
  export let name;
  export let tasks = ["PlaceHolder"];
  let taskList = tasks;
  console.log(name);
  function addTask() {
    let newTask = prompt('Que quieres añadir:');
    console.log(newTask);
    taskList = [...taskList, newTask];

  }
</script>

<div class="task-col">
  <div class="task-col__header">
    <h3>{name}</h3>
  </div>
  <div class="task-col__droparea">
    {#each taskList as task}
    <Task content={task} />
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
