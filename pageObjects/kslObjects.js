module.exports = {
    url: 'https://www.ksl.com/classifieds/',
    elements: {

        




    //Search Screen with Keywords and Filter
        tabSearch:              {selector: '//div[contains(text(), "Search")]',
                                locateStrategy: 'xpath'},
        keywordInput:           'input[name="keyword"]',
        priceMin:               'input[name="prices-from"]',
        priceMax:               'input[name="prices-to"]',
        zipInput:               'input[name="zip"]',
        distanceFrom:           'select[name="miles"]',
                milesexact:     'option[value="0"]',
                miles10:        'option[value="10"]',
                miles25:        'option[value="25"]',
                miles50:        'option[value="50"]',
                miles100:       'option[value="100"]',
                miles150:       'option[value="150"]',
                miles200:       'option[value="200"]',
                miles201:       'option[value="10000"]',
        searchButton:           'button[class="button searchForm-submitSearchButton "]',



    //Search by Category Pop-up menus
        catAppliances:      {selector: '//p[contains(text(), "Appliances")]',
                                    locateStrategy: 'xpath'},
        catBaby:            {selector: '//p[contains(text(), "Baby")]',
                                    locateStrategy: 'xpath'},
        catComputers:       {selector: '//p[contains(text(), "Computers")]',
                                    locateStrategy: 'xpath'},
        catElectronics:     {selector: '//p[contains(text(), "Electronics")]',
                                    locateStrategy: 'xpath'},
        catFurniture:       {selector: '//p[contains(text(), "Furniture")]',
                                    locateStrategy: 'xpath'},
    
        subDesktop:         {selector: '//span[contains(text(), "Desktops")]',
                                    locateStrategy: 'xpath'},
        subLaptop:          {selector: '//span[contains(text(), "Laptops")]',
                                    locateStrategy: 'xpath'},
        subNintendo:        {selector: '//span[contains(text(), "Nintendo Games and Equipment")]',
                                    locateStrategy: 'xpath'},
        subVideo:           {selector: '//span[contains(text(), "Video Equipment (DVD, VCR, Satellite)")]',
                                    locateStrategy: 'xpath'},
    



    //Search Results Page
        itemInfoTitle:          'div[class="item-info-title-link"]',
        itemInfoPrice:          'div[class="item-info-price info-line"]',


        item1:               {selector:  '(//div[@class="item-info-title-link"])[1]',
                                    locateStrategy: 'xpath'},

    
    //Item Page
        listingTitle:          'h1[class="listingDetails-title"]',
        listingPrice:           'h2[class="listingDetails-price"]',
        listingLocation:        'p[class="listingDetails-location"]',
        sellerName:             'span[class="listingContactSeller-firstName-value"]',
        sellerPhone:            'a[class="listingContactSeller-option listingContactSeller-homePhone noHover"]',
        sellerEmail:            'a[class="listingContactSeller-option listingContactSeller-email"]',
        
        
    //Listing Images    
        listingPhoto:             'img[class="photoDesktop-photo smartImage"]',
        prevButton:             'div[class="carousel-controlPrev carousel-controls photoViewer-sliderControls"]',
        nextButton:             'div[class="carousel-controlNext carousel-controls photoViewer-sliderControls"]',
        viewAllButton:          'span[class="photoViewer-viewAllLink link link--forward"]',
        closePhoto:             'span[class="icon icon--close modalCloseIcon photoViewer-modalCloseIcon"]'

    }
}