{
    test: /\.(png|jpe?g)$/,
        use: [
            {
                loader: "file-loader",
                options: {
                    // Here!!!
                    esModule: false,
                    outputPath: "images",
                    publicPath: "images",
                    name: "[name].[ext]"
                }
            }
        ]
}