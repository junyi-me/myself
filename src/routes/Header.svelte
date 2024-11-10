<script lang="ts">
  import { t } from '$lib/i18n';
</script>

<div class="head-wrap">
  <div class="head">
    <div>
      <h1>{@html $t("home.headline")}</h1>
    </div>
  </div>
  <div class="forehead" />
</div>

<style>
  .head-wrap {
    --header-height: 500px;
  }

  .head {
    height: var(--header-height);
    width: 100%;
    background: url('/images/hhkb.jpg') no-repeat center;
    background-size:cover;

    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;

    display: table;
    box-sizing: border-box; /* height includes the padding and border */
    padding-top: var(--nav-height);
  }

  .forehead {
    height: calc(var(--header-height) - var(--nav-height));
  }

  .head div {
    vertical-align: middle;
    display: table-cell;
  }

  .head h1 {
    display: inline-block;
    font-size: 5em;
    font-family: Copperplate, fantasy;
    color: var(--accent);
    text-align: left;
    display: table;
    margin: 0 auto;
  }
</style>
