# Eternity Atom Changelog
This changelog was created on 2020-20-01 and is used to keep track of the changes to https://eternityatom.com/. 

## 2020-23-03
- Added `.group` to carousel to work with flickity properly (broken before)
- Added autocomplete to search
- Added redactor styling
- Added `$container-width` property to header, footer, and other places for dynamic design layouts
- Added responsive iframe code
- Added search to the blog-bar (replaced button that had no function)
- Fixed the default template in MODX
- Fixed blog class on blog container page to be `blog-layout`, now applies first post css correctly
- Removed variable line-heights for headings, returned to default `1.2` value
- Removed slick styling, slick files, and slick scripts

## 2020-10-02
- Updated Extras: ContentBlocks, Redactor, Resizer, PdoTools [kolby]
- Reconfigured Redactor 3 settings (standard) [kolby]
- Created vapor

## 2020-05-02
- Updated blog chunk to correct PDOPage initialize error [kolby]
- Removed extra navigation items used for testing mobile-nav overflow [kolby]

## 2020-22-01
- moved changelog to GitHub [rob]
- added js/vendors/flickity.pkgd.min.js to ModxMinify [rob]
- turned off the templates on all "Universal Blocks" [rob]
- added "img" chunk, did not update Content Blocks yet [rob]
- removed placeholder elements from "Sub Page" [rob]

## 2020-20-01
- removed the "sidebar" TV and related chunks/category [rob]
