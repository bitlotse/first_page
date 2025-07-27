const Image = require("@11ty/eleventy-img");
const path = require("path");

async function imageShortcode(src, alt, options = {}) {
  if (alt === undefined) {
    throw new Error(`Missing \`alt\` on image from: ${src}`);
  }

  const defaultOptions = {
    sizes: "100vw",
    widths: [300, 600, 900, "auto"],
    formats: ["webp", "jpeg"],
    loading: "lazy",
    decoding: "async",
  };

  const mergedOptions = { ...defaultOptions, ...options };
  const inputDir = "./src";
  const fullSrcPath = path.join(inputDir, src);

  let metadata = await Image(fullSrcPath, {
    widths: mergedOptions.widths,
    formats: mergedOptions.formats,
    urlPath: "/img/",
    outputDir: "./output/img/",
    filenameFormat: function (id, imgSrc, width, format, imgOptions) {
      const extension = path.extname(imgSrc);
      const name = path.basename(imgSrc, extension);
      return `${name}-${width}w.${format}`;
    }
  });

  const { widths, formats, ...htmlAttributes } = mergedOptions;
  let imageAttributes = {
    alt,
    ...htmlAttributes,
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  eleventyConfig.addFilter("split", function(str, separator) {
    if (typeof str !== 'string') {
      return str;
    }
    return str.split(separator);
  });

  eleventyConfig.addFilter("push", function(arr, item) {
    if (!Array.isArray(arr)) {
      return [item];
    }
    const newArr = [...arr];
    newArr.push(item);
    return newArr;
  });

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/img");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "output"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    // Removed 'js' from templateFormats as the generator file is no longer used for pagination.
    templateFormats: ["md", "njk", "html"],
  };
};
