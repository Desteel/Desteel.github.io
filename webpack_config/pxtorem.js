module.exports = {
    module: {
        rules: [
            {
				//test:/\.jsx$/,
				test: /\.css$/,
                loader:'webpack-px-to-rem',
                // the query is optional
                 query:{
                    // 1rem=npx default 10
                    basePx:10,
                    // only convert px greater than the given value default 0
                    // For the reason that tiny rem may be smaller than 1px and disappeare in tiny device
                    min:1,
                    // the rem value only has specific decimal places default 3
                    floatWidth:3
                }
            }
        ]
    }
};