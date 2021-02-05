<script>
  import TaskRow from "./TaskRow.svelte";
  export let name;
  console.log(name);
</script>

<div class="task-col">
  <div class="task-col__header">
    <h3>{name}</h3>
  </div>
  <div class="task-col__droparea">
    <TaskRow />
  </div>
  <button>
    Añadir Tarea </button>
</div>

<style lang="scss">
  @import "../sass/variables";

  .task-col {
    padding: 0 2ch 2ch;
    border: 1px dashed #09f;
    &__header {
      color: $green;
      border-bottom: 1px dashed #333;
    }
    &__droparea {
      background: rgba(51, 51, 51, .75);
      height: 100%;
    }
  }
</style>
