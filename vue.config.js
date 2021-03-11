module.exports = {
  css: {
    loaderOptions: {
        sass: {
            prependData: `
                @import "@/css/01_settings.scss";
                `
        }
    }
}
};