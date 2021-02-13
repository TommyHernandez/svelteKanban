<script>
    import { createEventDispatcher } from 'svelte';
    export let posToSave;
    const dispatch = createEventDispatcher();
    let value ='';
    function saveTask () {
        if (value.length > 2) {
            dispatch('saveTask', {
            task: value,
            pos: posToSave
        });
        }
    }
    function cancelTask () {
      dispatch('cancel');
    }
    function handleInput(e){
        value = e.target.value;
    }
</script>
<div class="backdrop"></div>
<section class="modal">
    <h2> Añadir Tarea 🗒</h2>
    <input type="text" placeholder="e.g Comprar platanos, valorar producto..." on:input={handleInput} minlength="2"/>
    <div class="modal__btn-container">
        <button class="btn btn-danger" on:click={cancelTask}> Cancelar </button>
        <button class="btn btn-primary" on:click={saveTask}> Añadir </button>
    </div>
</section>
<style lang="scss">
    @import "../sass/variables";
    h2 {
        color: $font-black;
        text-align: center;
    }
    .backdrop {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        background: rgba(200,210,255,.75);
        z-index: 1;
    }
    .modal {
        position: absolute;
        top: calc(50% - 125px);
        left: 0;
        width: 100vw;
        padding: 1rem;
        background: $bg-white;
        border-radius: 1rem;
        box-shadow: 0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);
        z-index: 2;
        @media(min-width: 650px){
        left: calc(50% - 175px);
        height: 250px;
        width: 350px;
        }
        &__btn-container {
            display:flex;
            width:100%;
            justify-content: space-between;
            padding-top: 1.2rem;
        }
    }
   input {
    display: block;
    min-width: 320px;
   }
   .btn {
    display: inline-block;
    flex: 1 1 120px;
    height: 48px;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    &:first-child{
        margin-right:8px;
    }
    &:last-child {
        margin-left: 8px;
    }
   }
   .btn-primary {
    color: $font-white;
    background-color: $bg-button;
    border-color: $bg-button;
   }
   .btn-danger{
    color: $font-white;
    background-color: $bg-button-danger;
    border-color: $bg-button-danger;
   }
    </style>