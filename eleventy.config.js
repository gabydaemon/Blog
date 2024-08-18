const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
   eleventyConfig.addPassthroughCopy("./src/styles/");
   eleventyConfig.addWatchTarget("./src/styles/");
   eleventyConfig.addPassthroughCopy("./src/assets/");
   
   eleventyConfig.addFilter('readableDate', (dateObj) => {
     return DateTime.fromJSDate(dateObj, { zone: 'utc+9' }).toFormat(
       'yyyy-LL-dd'
     );
   }); 

   return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};



