// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/Projects/starter-gatsby-blog/src/templates/blog-post.js"),
  "component---src-pages-blog-js": require("gatsby-module-loader?name=component---src-pages-blog-js!/Projects/starter-gatsby-blog/src/pages/blog.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Projects/starter-gatsby-blog/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Projects/starter-gatsby-blog/.cache/json/layout-index.json"),
  "blog-automate-with-webhooks.json": require("gatsby-module-loader?name=path---blog-automate-with-webhooks!/Projects/starter-gatsby-blog/.cache/json/blog-automate-with-webhooks.json"),
  "blog-hello-world.json": require("gatsby-module-loader?name=path---blog-hello-world!/Projects/starter-gatsby-blog/.cache/json/blog-hello-world.json"),
  "blog-static-sites-are-great.json": require("gatsby-module-loader?name=path---blog-static-sites-are-great!/Projects/starter-gatsby-blog/.cache/json/blog-static-sites-are-great.json"),
  "blog.json": require("gatsby-module-loader?name=path---blog!/Projects/starter-gatsby-blog/.cache/json/blog.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Projects/starter-gatsby-blog/.cache/json/index.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Projects/starter-gatsby-blog/.cache/layouts/index.js")
}