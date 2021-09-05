<script>
  import { onMount } from "svelte";
  import { createScene } from "./initScene";
  let domCanvas;
  onMount(() => {
    createScene(domCanvas);
  });
</script>

<main>
  <canvas bind:this={domCanvas} />
</main>

<style>
  canvas {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
</style>
