const webpack = require('webpack')

module.exports = (env) => ({
	plugins: [
		new webpack.DefinePlugin({
			"process.env.FOO": '"bar"'
		})
	]
})
