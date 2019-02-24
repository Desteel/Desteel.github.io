const envMode = process.env.NODE_ENV;

// module.exports = ({ file, options, env }) => {
//     const plugins = [
//         require("postcss-preset-env")(),
//         require("rucksack-css")(),
//         require("precss")(),
//         require("postcss-fontpath")()
//     ];
//     if (envMode === "production") {
//         plugins.push(
//             require("cssnano")({
// 				zindex: false
// 			})
//         );
// 	}
// 	console.log(plugins);
	
//     return {
//         plugins: plugins
//     };
// };

module.exports = ({ file, options, env }) => ({
    plugins: [
        require("postcss-preset-env")(),
        require("rucksack-css")(),
        require("cssnano")(
            envMode === "production"
                ? {
                      zindex: false
                  }
                : false
        ),
        require("precss")(),
        require("postcss-fontpath")()
	]
});
