<script>
  export let playerName1 = "";
  export let playerName2 = "";
  export let color = "#4385ef";
  export let textColor = "#fff";
</script>

<div class="team" style='--background-color:{color};--text-color:{textColor}'>
  <div>{playerName1}</div>
  <div>{playerName2}</div>
</div>

<style>
  .team {
    background-color: var(--background-color);
    color: #fff;/*var(--text-color);*/
    height: 75%;
    width: 100%;
    border-style: solid;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>
