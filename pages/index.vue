<template>
  <section class="container">
    <div>
    <h2>Blog</h2>
    <ul>
      <li v-for="post in posts" :key="post.date">
        <nuxt-link :to="post._path">
          {{ post.title }}
        </nuxt-link>
      </li>
    </ul>
    </div>
<hr/>
<hr/>
<div>
    <h2>Blog2</h2>
    <ul>
      <li v-for="post in posts2" :key="post.date">
        <nuxt-link :to="post._path">
          {{ post.title }}
        </nuxt-link>
      </li>
    </ul>
</div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
  components: {
    AppLogo
  },
  data() {
    // Using webpacks context to gather all files from a folder
    const context = require.context("~/content/blog/posts/", false, /\.json$/);

    const context2 = require.context(
      "~/content/blog2/posts/",
      false,
      /\.json$/
    );

    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace(".json", "").replace("./", "")}`
    }));

    const posts2 = context.keys().map(key => ({
      ...context(key),
      _path: `/blog2/${key.replace(".json", "").replace("./", "")}`
    }));

    return { posts: posts, posts2: posts2 };
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
