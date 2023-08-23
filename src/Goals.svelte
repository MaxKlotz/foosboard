<script>
  export let goals;
</script>

<div class="goals">{goals}</div>

<style>
  .goals {
    background-color: yellow;
    color: #fff; /*var(--text-color);*/
    height: 75%;
    width: 25%;
    border-style: solid;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 6rem;
  }
</style>
