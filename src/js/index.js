import postcss from 'postcss';
console.log("yo, here I am, Broch!");

export default postcss.plugin('looking-good', (opts = {}) => {
    return (css, result) => {}
})
