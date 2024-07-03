<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/">Coming soon...</a></li>
  </ul>
</nav>

<slot />

<style>
  nav {
    width: 100%;
    background-color: var(--bg-2);
    border-bottom: 2px solid var(--fg-3);
    display: flex;
    justify-content: center;
    height: var(--nav-height);
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1em;
  }

  li {
    list-style-type: none;
    padding-right: 1em;
    padding-left: 1em;
    display: flex;
    align-items: center;
  }

  a {
    color: var(--fg-1);
    text-decoration: none;
    font-weight: 500;
  }

  a:hover {
    color: var(--fg-2);
  }
</style>

