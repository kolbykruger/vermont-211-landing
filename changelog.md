# Eternity Atom Changelog
This changelog was created on 2020-20-01 and is used to keep track of the changes to https://eternityatom.com/.

## 2020-25-03
- Updated default modal layout for Content Blocks - now shows the description field for blocks which provides useful contextual information for the client when making a choice [@kolby](https://github.com/kolbykruger)
- Updated content-block display system setting to `expanded` so that descriptions show for clients [@kolby](https://github.com/kolbykruger)
- Added new components for: search-results [@kolby](https://github.com/kolbykruger)
- Added `figure` styling (Redactor wraps `img` in a figure) [@kolby](https://github.com/kolbykruger)
- Added descriptions for all content-block fields, layouts and templates [@kolby](https://github.com/kolbykruger)
- Fixed the following component files that didn't have nested scss: posts, search, table [@kolby](https://github.com/kolbykruger)
- Fixed the following core fiels that didn't have nested scss: mobile_nav, nav, pageheading [@kolby](https://github.com/kolbykruger)

## 2020-23-03
- Added Content Block Icon for Accordian [@rob](https://github.com/robliberty)

## 2020-23-03
- Added `.group` to carousel to work with flickity properly (broken before) [@kolby](https://github.com/kolbykruger)
- Added autocomplete to search [@kolby](https://github.com/kolbykruger)
- Added redactor styling [@kolby](https://github.com/kolbykruger)
- Added `$container-width` property to header, footer, and other places for dynamic design layouts [@kolby](https://github.com/kolbykruger)
- Added responsive iframe code [@kolby](https://github.com/kolbykruger)
- Added search to the blog-bar (replaced button that had no function) [@kolby](https://github.com/kolbykruger)
- Added accordion to content-blocks, as well as added styling [@kolby](https://github.com/kolbykruger)
- Fixed the default template in MODX [@kolby](https://github.com/kolbykruger)
- Fixed blog class on blog container page to be `blog-layout`, now applies first post css correctly [@kolby](https://github.com/kolbykruger)
- Fixed `main` wrapper for subpage template [@kolby](https://github.com/kolbykruger)
- Fixed social head from including HTML tags - removed inclusion of content field and replaced with introtext. Now that we're using content-blocks, inclusion of the content field becomes very challenging... [@kolby](https://github.com/kolbykruger)
- Fixed content-block setting for utility pages (sitemap, rss feed, search results, robots and autocomplete) as they were being wrapped in HTML [@kolby](https://github.com/kolbykruger)
- Fixed blog post layout - class updates [@kolby](https://github.com/kolbykruger)
- Removed variable line-heights for headings, returned to default `1.2` value [@kolby](https://github.com/kolbykruger)
- Removed slick styling, slick files, and slick scripts [@kolby](https://github.com/kolbykruger)

## 2020-21-03
- Added/Updated Content Block Icons to include @2x versions to fix load issue [@rob](https://github.com/robliberty)

## 2020-10-02
- Updated Extras: ContentBlocks, Redactor, Resizer, PdoTools [@kolby](https://github.com/kolbykruger)
- Reconfigured Redactor 3 settings (standard) [@kolby](https://github.com/kolbykruger)
- Created vapor `1.0.0` [@kolby](https://github.com/kolbykruger)

## 2020-05-02
- Updated blog chunk to correct PDOPage initialize error [@kolby](https://github.com/kolbykruger)
- Fixed changelog formatting to follow general changelog guidelines [@kolby](https://github.com/kolbykruger)
- Removed extra navigation items used for testing mobile-nav overflow [@kolby](https://github.com/kolbykruger)

## 2020-22-01
- moved changelog to GitHub [@rob](https://github.com/robliberty)
- added js/vendors/flickity.pkgd.min.js to ModxMinify [@rob](https://github.com/robliberty)
- turned off the templates on all "Universal Blocks" [@rob](https://github.com/robliberty)
- added "img" chunk, did not update Content Blocks yet [@rob](https://github.com/robliberty)
- removed placeholder elements from "Sub Page" [@rob](https://github.com/robliberty)

## 2020-20-01
- removed the "sidebar" TV and related chunks/category [@rob](https://github.com/robliberty)
