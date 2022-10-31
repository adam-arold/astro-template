export const exampleRemarkPlugin = () => {
    return function (tree, file) {
        file.data.astro.frontmatter.customProperty = "Generated property";
    };
};
