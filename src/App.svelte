<script>
  import TaskColumn from "./components/TaskColumn.svelte";
  import ls from './helpers/localStorageHelper.js';
  let columns = [
    {
    pos: 0,
    name: "Backlog",
    task: []
  },
  {
    pos:1 ,
    name: "In Progress",
    task: []
  },
  {
    pos: 2,
    name: "In review",
    task: []
  },
  {
    pos: 3,
    name: "Done",
    task: []
  },
];
function handleTask({detail}) {
  const {task, pos} = detail;
  const col = columns.find( e => e.pos === pos);
  col.task = [... col.task, task]
  columns = columns; 
  }
</script>

<main>
  <header>
    <h1>My trello</h1>
    <p>Crea tus tareas y guardalas en local</p>
  </header>
  <section class="board">
    {#each columns as {name, task},index}
      <TaskColumn name={name} taskList={task} on:addTask={handleTask} pos={index}/>
    {/each}
  </section>
  <footer>Pedro T. Hernández</footer>
</main>

<style lang="scss">
  @import "./sass/variables";

  main {
    display: grid;
    grid-template-rows: 200px calc(100vh - 250px) 50px;
    grid-template-columns: 100%;
    background: url("images/bg.jpg") center center no-repeat;
    background-size: cover;
    height: 100vh;
    overflow:hidden;
  }
  header {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: $green;
    text-transform: uppercase;
    font-size: 4ch;
    font-weight: 100;
  }
  .board {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: 1fr;
    grid-column-gap: 1em;
    padding: 1rem;
    background: $bg-board;
    backdrop-filter: blur(10px);
  }
  footer {
    color: $font-white;
    background: $bg-grey;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
