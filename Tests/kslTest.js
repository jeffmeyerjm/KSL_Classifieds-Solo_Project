const listingPage = require('../Functions/listingPage')
var kslObjects = {}
module.exports = {
    beforeEach: browser => {
        kslObjects = browser.page.kslObjects()
        browser.url('https://www.ksl.com/classifieds/')
        browser.resizeWindow(1920,1080)
        browser.waitForElementPresent('body', 3500, 'Checking for page to be loaded.')


    },
    after: browser => {
        browser.end()
    },
    'Classifieds Home UI' : browser => {
        kslObjects
        .verify.visible('@catAppliances', 'Category 1 Visible')
        .verify.visible('@catBaby', 'Category 2 Visible')
        .verify.visible('@catComputers' , 'Category 3 Visible')
        .verify.visible('@catElectronics' , 'Category 4 Visible')
        .verify.visible('@keywordInput', 'Search Box Visible')
        .verify.visible('@priceMin', 'Min Price Box Visible')
        .verify.visible('@priceMax', 'Max Price Box Visible')
        .verify.visible('@zipInput' , 'Zip Code Box Visible')
        .verify.visible('@distanceFrom', 'Distance From Zip')
        .verify.visible('@searchButton', 'Search Button')

    },
    
    
    'Search for Item - Keyword': browser => {
        kslObjects
        .setValue('@keywordInput' , 'N64')
        .click('@searchButton')
        .waitForElementVisible('@item1' , 3000, 'Search Results Generates')
        .verify.visible('@itemInfoTitle' , 'Item Title Visible')
        .verify.visible('@itemInfoPrice' , 'Item Price Visible')

    },
    'Search for Item - Keyword and Filters' : browser => {
        kslObjects
        .setValue('@keywordInput' , 'N64')
        .setValue('@priceMin' , '0')
        .setValue('@priceMax' , '300')
        .setValue('@zipInput' , '84043')
        .click('@distanceFrom')
        .click('@miles10')
        .click('@searchButton')
        .waitForElementVisible('@item1', 3000 , 'Search Results Generates')


    },




    'Search for Item - Category - Mouse Over' : browser => {
        kslObjects
        .moveToElement('@catElectronics' , 0,0 )
        .waitForElementVisible('@subNintendo', 1000, 'Sub Category Visible')
        .click('@subNintendo')
        .waitForElementVisible('@item1' , 3000, 'Search Results Generates')
        .verify.visible('@itemInfoTitle', 'Item Title Visible')
        .verify.visible('@itemInfoPrice', 'Item Price Visible')
    },
    'Search for Item - Category - Clicking' : browser => {
        kslObjects
        .click('@catElectronics')
        .waitForElementVisible('@subNintendo', 1000, 'Sub Category Visible')
        .click('@subNintendo')
        .waitForElementVisible('@item1', 5000, 'Search Results Generates')
        .verify.visible('@itemInfoTitle', 'Item Title Visible')
        .verify.visible('@itemInfoPrice', 'Item Price Visible')
    },



    'Listing Page UI':  browser =>{
        listingPage(browser.page.kslObjects())
        kslObjects
        .verify.visible('@listingTitle', 'Listing Title Visible')
        .verify.visible('@listingPrice', 'Listing Price Visible')
        .verify.visible('@listingLocation' , 'Listing Location Visible')
        .verify.visible('@sellerName' , 'Seller Name Visible')
        .verify.visible('@sellerPhone' , 'Seller Phone Visible')
        .verify.visible('@sellerEmail', 'Seller Email Visible')
        .verify.visible('@listingPhoto', 'Listing Photo Visible')
    },


    'Check Photo in listing' : browser =>{
        listingPage(browser.page.kslObjects())
        kslObjects
        .click('@listingPhoto')
        .isVisible('@nextButton', function(result){
            if(result.value===true){
                kslObjects.click('@nextButton')
                    .isVisible('@prevButton', function(result){
                        if(result.value === true){
                            kslObjects.click('@prevButton')
                        }
                        else{kslObjects.click('@closePhoto')}
                    })
                }
            else{
                 kslObjects.verify.elementNotPresent('@nextButton', 'There isnt another Photo ^Error Normal^')
            }
        })
        .click('@closePhoto')
        .waitForElementVisible('@listingPhoto', 1000, 'Listing Image Appears')
        .verify.elementPresent('@listingPrice', 'Listing Price Visible')
        .verify.elementPresent('@listingTitle', 'Listing Title Visible')
    }

}