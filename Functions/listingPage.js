module.exports = (pageObject) => {

    
        pageObject
        .setValue('@keywordInput' , 'N64')
        .click('@searchButton')
        .verify.visible('@itemInfoTitle' , 'Item Title Visible')
        .verify.visible('@itemInfoPrice' , 'Item Price Visible')
        .click('@item1')
    }