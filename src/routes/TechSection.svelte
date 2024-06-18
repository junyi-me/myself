<script>
  import Tech from "./Tech.svelte";
</script>
<div>
  <div class="lane">
    <h3>Frontend</h3>
    <Tech name="Svelte" link="https://svelte.dev/" img="/images/svelte256.png" />
    <Tech name="React" link="https://react.dev/" img="/images/react128.png" />
    <Tech name="jQuery" link="https://jquery.com/" img="/images/jquery256.png" />
    <Tech name="HTML/CSS/JS" link="https://developer.mozilla.org/en-US/docs/Web/HTML" img="/images/html_css_js256.png" />
  </div>
  <div class="lane">
    <h3>Backend</h3>
    <Tech name="Golang" link="https://go.dev/" img="/images/go256.png" />
    <Tech name="Java" link="https://www.java.com/" img="/images/java256.png" />
    <Tech name="Python" link="https://www.python.org/" img="/images/python256.png" />
    <Tech name="C#" link="https://dotnet.microsoft.com/languages/csharp" img="/images/csharp256.png" />
    <Tech name="C++" link="https://cplusplus.com/" img="/images/cpp256.png" />
  </div>
  <div class="lane">
    <h3>Database</h3>
    <Tech name="MySQL" link="https://www.mysql.com/" img="/images/mysql256.png" />
    <Tech name="DynamoDB" link="https://aws.amazon.com/dynamodb/" img="/images/dynamodb256.png" />
  </div>
  <div class="lane">
    <h3>CI/CD</h3>
    <Tech name="Docker" link="https://www.docker.com/" img="/images/docker256.png" />
    <Tech name="Kubernetes" link="https://kubernetes.io/" img="/images/kubernetes256.png" />
  </div>
  <div class="lane">
    <h3>Cloud</h3>
    <Tech name="Amazon Web Services" link="https://aws.amazon.com/" img="/images/aws256.png" />
    <Tech name="Google Cloud Platform" link="https://kubernetes.io/" img="/images/gcp256.png" />
  </div>
  <div class="lane">
    <h3>Others</h3>
    <Tech name="Linux" link="https://archlinux.org/" img="/images/linux256.png" />
    <Tech name="Bash" link="https://www.gnu.org/software/bash/" img="/images/bash.svg" />
    <Tech name="Lua" link="https://lua.org/" img="/images/lua256.png" />
    <Tech name="Neovim" link="https://neovim.io/" img="/images/neovim256.png" />
    <Tech name="Selenium" link="https://www.selenium.dev/" img="/images/selenium256.png" />
  </div>
</div>

<style>
  .lane {
    display: flex;
    flex-wrap: wrap;
    padding-left: 1em;
    justify-content: left;
  }

  .lane:not(:last-child) {
    padding-bottom: 1em;
    border-bottom: 1px solid var(--fg-1);
    margin-bottom: 1em;
  }

  h3 {
    margin: auto 1em auto 0;
  }
</style>
