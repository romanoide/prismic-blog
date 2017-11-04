const primsicApi=require('./prismicHelper')

function footerContentHelper(api){
    return api
        .getByID("WbMBaDIAALeSYDYX")
        .then(getContent)
}

function getContent(doc){
    return doc.data["footer.footer"].value[0].text
}

const footerHelper ={
    getFooter: () => primsicApi.apiConection().then(footerContentHelper)
}
module.exports = footerHelper
