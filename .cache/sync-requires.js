// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Projects/starter-gatsby-blog/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Projects/starter-gatsby-blog/src/templates/blog-post.js")),
  "component---src-pages-blog-js": preferDefault(require("/Projects/starter-gatsby-blog/src/pages/blog.js")),
  "component---src-pages-index-js": preferDefault(require("/Projects/starter-gatsby-blog/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Projects/starter-gatsby-blog/.cache/json/layout-index.json"),
  "blog-automate-with-webhooks.json": require("/Projects/starter-gatsby-blog/.cache/json/blog-automate-with-webhooks.json"),
  "blog-hello-world.json": require("/Projects/starter-gatsby-blog/.cache/json/blog-hello-world.json"),
  "blog-static-sites-are-great.json": require("/Projects/starter-gatsby-blog/.cache/json/blog-static-sites-are-great.json"),
  "blog.json": require("/Projects/starter-gatsby-blog/.cache/json/blog.json"),
  "index.json": require("/Projects/starter-gatsby-blog/.cache/json/index.json")
}