<script lang="ts">
  import type { Snippet } from "svelte";
  import Toast from "./Toast.svelte";

  let { children }: { children?: Snippet } = $props();
</script>

<Toast />
{@render children?.()}

