<script>
  import { t } from "$lib/i18n";
  import NavBlock from "./NavBlock.svelte";
  import Outline from "./Outline.svelte";

</script>
  <nav>
    <ul>
      <li>
        <a class='logo' href='/'>JY</a>
      </li>
      <li style='border-left: 1px var(--bg-3) solid' />
      <li>
        <NavBlock href="/" text={$t('home.nav.here')}>
          <Outline />
        </NavBlock>
        <NavBlock href="https://blog.junyi.me" text={$t('home.nav.blog')} />
      </li>
    </ul>
  </nav>
<div />

<slot />

<style>
  nav {
    width: 100%;
    background-color: var(--bg-1);
    border-bottom: 2px solid var(--fg-3);
    display: flex;
    height: var(--nav-height);
    position: fixed;
  }

  div {
    height: var(--nav-height);
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
  }

  li {
    list-style-type: none;
    display: flex;
    height: 100%;
  }

  .logo {
    padding-right: 1em;
    padding-left: 1em;
    color: var(--fg-1);
    text-decoration: none;
    font-size: 1.2em;
    line-height: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-family: "Brush Script MT", cursive;
    background-color: var(--accent);
    color: var(--bg-1);
  }
</style>

