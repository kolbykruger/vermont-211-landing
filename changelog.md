# Eternity Atom Changelog
This changelog was created on 2020-20-01 and is used to keep track of the changes to https://eternityatom.com/.

## 1.3.0 - 2020-01-06 `Release`
- Created Vapor `1.3.0` [@kolby](https://github.com/kolbykruger)

## 1.2.4 - 2020-31-05
- reenabled "resource_duplicate" in Client Policy, not sure when it got turned back off [@rob](https://github.com/robliberty)

## 1.2.3 - 2020-29-05
- Added hover/focus states for custom buttons styling [@kolby](https://github.com/kolbykruger)
- Corrected specificity for custom button stylings that conflicted with `button` and `input` reset styling [@kolby](https://github.com/kolbykruger)
- Added `pdo-loader` to indicate loading states for pdo ajax scroll loading `EXPERIMENTAL` [@kolby](https://github.com/kolbykruger)

## 1.2.2 - 2020-27-05
- Updated the autocomplete.js script to run on focus of a search input - increasing efficiency [@kolby](https://github.com/kolbykruger)

## 1.2.1 - 2020-07-05
- Fixed a z-indexing issue with the mobile-nav on IOS Safari/Chrome [@kolby](https://github.com/kolbykruger)

## 1.2.0 - 2020-04-05 `Release`
- Updated VersionX and Redactor extras [@kolby](https://github.com/kolbykruger)
- Fixed an issue with `overflow: unset` on the navigation that prevented dropdowns from working in IE. Fixed by updating to `overflow: visible` [@kolby](https://github.com/kolbykruger)
- Created Vapor `1.2.0` [@kolby](https://github.com/kolbykruger)

## 1.1.4 - 2020-29-04
- Added mobile_nav event emitting for when a trigger with searchable `0` is clicked. This will now mimic the behavior of a mobile_nav button click, and toggle the dropdown panel. [@kolby](https://github.com/kolbykruger)

## 1.1.3 - 2020-23-04
- Added javascript for blog categories dropdown to trigger an href filter [@kolby](https://github.com/kolbykruger)
- Added select component for global select box styling via the `.select` class [@kolby](https://github.com/kolbykruger)
- Updated search component to include inherited `font-family` from the body [@kolby](https://github.com/kolbykruger)
- Updated the `blog_categories` with the new select class for corrected styling of the select [@kolby](https://github.com/kolbykruger)

## 1.1.2 - 2020-22-04
- Escaped html characters in autocomplete.json (autocomplete.tpl chunk) using :htmlent [@rob](https://github.com/robliberty)
- Updated autocomplete.js to decode special HTML characters found within the name field of the autocomplete.json file [@kolby](https://github.com/kolbykruger)
- Added version numbers to github to define major/monthly releases [@kolby](https://github.com/kolbykruger)

## 1.1.1 - 2020-08-04
- Updated Search trigger and search form to be hidden (commented out) for mobile view for now. Only turned on when needed or required [@kolby](https://github.com/kolbykruger)
- Fixed a bug where the simpleSearchForm snippet would not return results (removed the `searchIndex` property from the snippet call) [@kolby](https://github.com/kolbykruger)
- Fixed a bug where the simpleSearchForm template was returning duplicate IDs if the search appeared multiple times on one page [@kolby](https://github.com/kolbykruger)

## 1.1.0 - 2020-01-04 `Release`
- Added new chunk `schema_business` to autogenerate the localBusiness json data in the head [@kolby](https://github.com/kolbykruger)
- Updated the `googleanalytics` chunk into two separate chunks now being used for Google Tag Manager. The new chunks are `google_tag_manager_head` and `google_tag_manager_body` [@kolby](https://github.com/kolbykruger)
- Created Vapor `1.1.0` [@kolby](https://github.com/kolbykruger)

## 1.0.6 - 2020-31-03
- Updated MODX version to `2.7.3` [@kolby](https://github.com/kolbykruger)
- Updated Extras (Redactor) [@kolby](https://github.com/kolbykruger)
- Updated mobile-responsive for two-column and sidebar layouts [@kolby](https://github.com/kolbykruger)
- Updated form names for user friendly views [@kolby](https://github.com/kolbykruger)
- Updated font-size for paragraphs and lists from `14` to `16` for mobile [@kolby](https://github.com/kolbykruger)
- Added unique tag styling for blog post meta [@kolby](https://github.com/kolbykruger)
- Added mobile responsive for search results [@kolby](https://github.com/kolbykruger)
- Added two-column and sidebar views to test page [@kolby](https://github.com/kolbykruger)
- Added styling to remove `Properties` field from chunk selector in content blocks [@kolby](https://github.com/kolbykruger)
- Added mobile styling for sidebar element [@kolby](https://github.com/kolbykruger)
- Added mobile styling for blog-bar (hidden on mobile) [@kolby](https://github.com/kolbykruger)
- Added mobile styling and javascript for mobile-search + mobile-search-trigger (preliminary) [@kolby](https://github.com/kolbykruger)
- Added ADA accessibilty markup, styling + scripts [@kolby](https://github.com/kolbykruger)
- Added autocomplete scripts to github for maintainability [@kolby](https://github.com/kolbykruger)
- Added Fancybox for gallery component [@rob](https://github.com/robliberty)
- Removed image hover on features [@kolby](https://github.com/kolbykruger)
- Removed content blocks `container` and `group` for sidebar + two-column layouts [@kolby](https://github.com/kolbykruger)
- Fixed bottom margin for blog-bar [@kolby](https://github.com/kolbykruger)
- Fixed search results images [@kolby](https://github.com/kolbykruger)
- Fixed navigation nesting rule for open trigger coloring via links [@kolby](https://github.com/kolbykruger)
- Fixed event tracking for multiple areas (blogs, features, navicon, footer, etc) [@kolby](https://github.com/kolbykruger)
- Fixed content blocks wrapping for search results [@kolby](https://github.com/kolbykruger)
- Fixed `width="100%"` issue in RSS feed - hard-set at `800` for now until we find a better solution [@kolby](https://github.com/kolbykruger)
- Fixed blog styling for mobile responsiveness (refactored a lot of HTML) [@kolby](https://github.com/kolbykruger)
- Fixed cropping for gallery component [@rob](https://github.com/robliberty)
- Fixed styling for gallery component [@kolby](https://github.com/kolbykruger)

## 1.0.5 - 2020-30-03
- Added notification component [@kolby](https://github.com/kolbykruger)

## 1.0.4 - 2020-25-03
- Updated default modal layout for Content Blocks - now shows the description field for blocks which provides useful contextual information for the client when making a choice [@kolby](https://github.com/kolbykruger)
- Updated content-block display system setting to `expanded` so that descriptions show for clients [@kolby](https://github.com/kolbykruger)
- Added new components for: search-results [@kolby](https://github.com/kolbykruger)
- Added `figure` styling (Redactor wraps `img` in a figure) [@kolby](https://github.com/kolbykruger)
- Added descriptions for all content-block fields, layouts and templates [@kolby](https://github.com/kolbykruger)
- Fixed the following component files that didn't have nested scss: posts, search, table [@kolby](https://github.com/kolbykruger)
- Fixed the following core fiels that didn't have nested scss: mobile_nav, nav, pageheading [@kolby](https://github.com/kolbykruger)

## 1.0.3 - 2020-24-03
- Added Content Block Icon for Accordian [@rob](https://github.com/robliberty)

## 1.0.2 - 2020-23-03
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

## 1.0.1 - 2020-21-03
- Added/Updated Content Block Icons to include @2x versions to fix load issue [@rob](https://github.com/robliberty)

## 1.0.0 - 2020-10-02 `Release`
- Updated Extras: ContentBlocks, Redactor, Resizer, PdoTools [@kolby](https://github.com/kolbykruger)
- Reconfigured Redactor 3 settings (standard) [@kolby](https://github.com/kolbykruger)
- Created vapor `1.0.0` [@kolby](https://github.com/kolbykruger)

## 0.1.2 - 2020-05-02
- Updated blog chunk to correct PDOPage initialize error [@kolby](https://github.com/kolbykruger)
- Fixed changelog formatting to follow general changelog guidelines [@kolby](https://github.com/kolbykruger)
- Removed extra navigation items used for testing mobile-nav overflow [@kolby](https://github.com/kolbykruger)

## 0.1.1 - 2020-22-01
- moved changelog to GitHub [@rob](https://github.com/robliberty)
- added js/vendors/flickity.pkgd.min.js to ModxMinify [@rob](https://github.com/robliberty)
- turned off the templates on all "Universal Blocks" [@rob](https://github.com/robliberty)
- added "img" chunk, did not update Content Blocks yet [@rob](https://github.com/robliberty)
- removed placeholder elements from "Sub Page" [@rob](https://github.com/robliberty)

## 0.1.0 - 2020-20-01
- removed the "sidebar" TV and related chunks/category [@rob](https://github.com/robliberty)
