# [Jibrel Website](https://jibrel.network/)

The website is based on [vuepress framework](https://vuepress.vuejs.org/).

To run it locally, you will need to install first:
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), or [Github Desktop](https://desktop.github.com/), or both
- latest version of [node.js](https://nodejs.org/en/)

Next you:
- [clone this repository](https://help.github.com/en/articles/cloning-a-repository)
- open Terminal (on Mac) or cmd (on Windows)
- change directory to the one you cloned repository into
- run `npm install` (you need to do it only once!) – this command will install required dependencies
- run `npm run dev`

Now you can open http://localhost:8081/en/ in your browser – you should see the English version of the website.

## Directories structure 

```
.
├── _img
|   ├── blog
|   |   └── ...                 // blog posts hero images
|   ├── content
|   |   └── ...
|   ├── cover
|   |   └── ...                 // news agencies cover images
├── {language}
|   ├── {page-slug}
|   |   ├── {sub-page-slug}
|   |   |   └── ...
|   |   └── index.md            // page contents and meta info
|   ├── blog
|   |   ├── {category-slug}
|   |   |   ├── {post-slug}
|   |   |   |   └── index.md    // post contents in top-level language
|   |   |   |   └── {...images} // all the images used inside page content
|   |   |   └── index.md        // category meta information, like title, id, layout
|   |   └── index.md            // blog index page meta information
├── package.json                // version and list of dependencies is stored here
├── version.txt                 // current overall service version, should be in sync with version from package.json
└── ...                         // other configuration files
```

If you would like to add a new blog post, you should create a new directory under `{language} -> blog -> preferred category` with the name you would like to see as url part. Next you should add there `index.md` file with the same structure as for the other blog posts. The properties inside the page are:

```
title: # The title of the page that will be used both for SEO and as, well, title
description: # Short description that will be displayed in the articles list 
date: # Publishing date is used for sorting
heroImage: 
  name: # The name to look for the hero image in the _img/blog directory
  alt: # Alt text for hero image (used for SEO, accessibility and unavailable image file)
  bgColor: # The color of the hero image background
wordCount: # Number of words in the article, used to calculate reading time
```

Next you add your text content in markdown format.

The only difference from basic markdown is `[[toc]]` element that is replaced with the generated Table of Contents.

## Learn more

- [Markdown Syntax](https://daringfireball.net/projects/markdown/syntax) is used for text content
- [Frontmatter Syntax](https://jekyllrb.com/docs/front-matter/) is used for properties (don't look at properties names, they differ from project to project)
- if you have further questions, ask Stanislav Cherenkov or Eugene Vanchugov 
