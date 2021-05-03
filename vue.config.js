module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/css/loader.scss";
                    `
            }
        }
    }
};