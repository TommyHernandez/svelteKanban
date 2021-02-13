<script>
  import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
  export let content ='';
  console.log("A task lleva", content);
</script>

<div class="task" transition:scale="{{duration: 500, delay: 50, opacity: 0.5, start: 0.5, easing: quintOut}}" draggable="true">{content}</div>

<style lang="scss">
  @import '../sass/variables';
  .task {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 95%;
    margin: 0 auto 1ex auto;
    color: $font-black;
    border-radius: 4px;
    background-color: $bg-white;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);
    cursor: draggable;
  }
</style>
