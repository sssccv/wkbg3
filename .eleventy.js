module.exports=function(eleventyconfig){
eleventyconfig.addPassthroughCopy("code/css");
eleventyconfig.addPassthroughCopy("code/js");
eleventyconfig.addPassthroughCopy("code/img");

    return {
        dir: {
            input:"code",
            output: "docs",
        },
    };
};