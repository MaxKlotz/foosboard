<script>
  import ScoreTeam from "./ScoreTeam.svelte";
  import VendorLogo from "./VendorLogo.svelte";
  import Goals from "./Goals.svelte";
  export let backgroundColor = "#4385ef";
</script>

<div class="scorecontainer" style="--background-color:{backgroundColor}">
  <ScoreTeam playerName1="Allen, Barry" playerName2="Allen, Bart" />
  <Goals goals="2" />
  <VendorLogo />
  <Goals goals="2" />
  <ScoreTeam playerName1="Prince, Diana" playerName2="Wayne, Bruce" />
</div>

<style>
  .scorecontainer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15em;
    width: 100%;
    position: absolute;
    z-index: -10;
  }
</style>
