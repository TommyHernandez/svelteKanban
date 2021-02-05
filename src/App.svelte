<script>
  import TaskColumn from "./components/TaskColumn.svelte";
  const columns = ["Backlog", "In Progress", "In review", "Done"];
</script>

<main>
  <header>
    <h1>My trello</h1>
    <p>Crea tus tareas y guardalas en local</p>
  </header>
  <section class="board">
    {#each columns as column}
      <TaskColumn name={column} />
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
    backdrop-filter: blur(8px);
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
    grid-template-columns: 24% 24% 24% 24%;
    grid-template-rows: 1fr;
    grid-column-gap: 1em;
    padding: 1rem;
    background: $bg-board;
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
