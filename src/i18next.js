import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next.use(initReactI18next).use(LanguageDetector).init({
    fallbackLng: 'en',
    resources: {
        en: {
            translation: {
                /*
                    Orders
                */
                loginWelcome: 'Welcome to the Tracker',
                loginSelect: "Select your (Unit) country",
                loginAccN: 'Account number:',
                loginButton: "Login",

                /*
                    Navbar
                */
                navbarLabel1: "Orders",
                navbarLabel2: "Products",
                navbarLabel3: "Imprint",
                navbarLabel4: "Customer support",
                navbarLabel4o1: "FAQ",
                navbarLabel4o2: "Service",
                navbarLabel4o3: "Newsletter",
                navbarLabel4o4: "Privacy and Data",
                navbarLabel5: "Logout",

                /*
                    Hero
                */
                heroWelcome: "Welcome,",


                /*
                    Search order
                */
                orderLabel1: "Search order",
                orderLabel2: "Order number:",
                orderButton: "Search",


                /*
                    Order List
                */
                listLabel1: "Your Orders:",
                listSort1: "Sort By",
                listSort1o1: "Order Number ↓",
                listSort1o2: "Order Number ↑",
                listSort1o3: "Product ↓",
                listSort1o4: "Product ↑",
                listFilter1: "Show Status",
                listFilter1o1: "Sourced",
                listFilter1o2: "Unsourced",
                listFilter1o3: "Inventory",
                listFilter1o4: "Canceled",
                listButton1: "Show all",
                listButton2: "Show less",

                listItemLabel1: "Order",
                listItemLabel2: "Product",
                listItemLabel3: "Presold Date:",
                listItemLabel4: "Status",

                listItemSLabel1: "Factory delivery date:",
                listItemSLabel2: "FDD - RDD:",
                listItemSLabel3: "Sold:",
                listItemSLabel4: "Order entry date:",
                listItemSLabel5: "Order source date:",
                listItemSLabel6: "Req. ship date:",
                listItemSLabel7: "Machine status:",
                listItemSLabel8: "Order status:",
                listItemSLabel9: "Presold Date:",
                listItemSLabel10: "Base Code Description:",
                listItemSLabel11: "Quantity:",

                listItemULabel1: "Factory delivery date:",
                listItemULabel2: "Order entry date:",
                listItemULabel3: "Order source date:",
                listItemULabel4: "Order status:",
                listItemULabel5: "Req. ship date:",
                listItemULabel6: "Presold Date:",
                listItemULabel7: "Base Code Desciption:",
                listItemULabel8: "Quantity:",

                listItemILabel1: "Factory delivery date:",
                listItemILabel2: "Actual Delivery Date:",
                listItemILabel3: "Inv. date:",
                listItemILabel4: "Billing date:",
                listItemILabel5: "Billing number:",
                listItemILabel6: "Days on Inv.:",
                listItemILabel7: "Order status:",
                listItemILabel8: "Quantity:",

                listItemCLabel1: "Requested Delivery Date:",
                listItemCLabel2: "Req. ship date:",
                listItemCLabel3: "Order entry date:",
                listItemCLabel4: "Date of cancellation:",
                listItemCLabel5: "Cancellation Month:",
                listItemCLabel6: "Reason:",


                /*
                    Footer
                */
                footerLabel1: "Home",
                footerLabel2: "Contact us",
                footerLabel3: "Newsletter",
                footerLabel4: "Imprint",
                footerLabel5: "FAQ",
                footerLabel6: "Privacy and Data",
                footerLabel7: "Terms of Use",
                footerLabel8: "Services",
                footerLabel9: "Copyright © 2022 Deere & Company. All Rights Reserved.",

                /*
                    Avalability
                */
                availabilityLabel1: "Availability",
                availabilityLabel2: "Base Code or Product Name:",
                availabilityButton: "Search",


                /*
                    Availability List
                */
               avalListLabel1: "Our Products",
               avalListLabel2: "Sort By",
               avalListLabel2o1: "Product Name ↓",
               avalListLabel2o2: "Product Name ↑",
               avalListLabel2o3: "Base Code ↓",
               avalListLabel2o4: "Base Code ↑",
               avalListLabel3: "Show Category",
               avalListLabel3o1: "Commercial Mowing",
               avalListLabel3o2: "Compact Utility Tractory & Loaders",
               avalListLabel3o3: "Golf",
               avalListLabel3o4: "Riding Lawn Tractors",
               avalListLabel3o5: "Utility Tractors",
               avalListLabel3o6: "Utility Vehicles",

               avalItemLabel1: "Base Code:",
               avalItemLabel2: "Bundle:",
               avalItemLabel3: "Category:",
               avalItemLabel4: "Best case shipping month",
               avalItemLabel5: "Worst case shipping month",
               avalItemLabel6: "Comment",
            }
        },
        de: {
            translation: {

                /*
                    Login
                */
                loginWelcome: 'Willkommen zu den Tracker',
                loginSelect: "Wählen Sie Ihr Land (Unit) aus",
                loginAccN: 'Kontonummer:',
                loginButton: "Anmelden",

                /*
                    Navbar
                */
                navbarLabel1: "Bestellungen",
                navbarLabel2: "Produkte",
                navbarLabel3: "Impressum",
                navbarLabel4: "Kundendienst",
                navbarLabel4o1: "FAQ",
                navbarLabel4o2: "Dienstleistungen",
                navbarLabel4o3: "Newsletter",
                navbarLabel4o4: "Datenschutz und Daten",
                navbarLabel5: "Abmelden",

                /*
                    Hero
                */
                heroWelcome: "Willkommen,",

                /*
                    Orders
                */
                orderLabel1: "Bestellung suchen",
                orderLabel2: "Bestellnummer:",
                orderButton: "Suchen",

                /*
                    Order List
                */
                listLabel1: "Deine Bestellungen:",
                listSort1: "Sortieren nach",
                listSort1o1: "Bestellnummer ↓",
                listSort1o2: "Bestellnummer ↑",
                listSort1o3: "Modell ↓",
                listSort1o4: "Modell ↑",
                listFilter1: "Status anzeigen",
                listFilter1o1: "Sourced",
                listFilter1o2: "Unsourced",
                listFilter1o3: "Inventory",
                listFilter1o4: "Canceled",
                listButton1: "Zeige alles",
                listButton2: "Zeige weniger",

                listItemLabel1: "Bestellung",
                listItemLabel2: "Modell",
                listItemLabel3: "PRES DATE:",
                listItemLabel4: "Status",

                listItemSLabel1: "Aktuelle Lieferdatum:",
                listItemSLabel2: "Aktuelle Lieferdatum - Angefordertes Lieferdatum:",
                listItemSLabel3: "Verkauft:",
                listItemSLabel4: "Eingangsdatum der Bestellung:",
                listItemSLabel5: "Source Eingangsdatum der Bestellung:",
                listItemSLabel6: "Anf. Versanddatum:",
                listItemSLabel7: "Maschinenstatus:",
                listItemSLabel8: "Bestellstatus:",
                listItemSLabel9: "Präs. Datum:",
                listItemSLabel10: "Beschreibung des Basiscodes:",
                listItemSLabel11: "Menge.:",

                listItemULabel1: "Aktuelle Lieferdatum:",
                listItemULabel2: "Eingangsdatum der Bestellung:",
                listItemULabel3: "Source Eingangsdatum der Bestellung:",
                listItemULabel4: "Bestellstatus:",
                listItemULabel5: "Anf. Versanddatum:",
                listItemULabel6: "Präs. Datum:",
                listItemULabel7: "Beschreibung des Basiscodes:",
                listItemULabel8: "Menge.:",

                listItemILabel1: "Aktuelle Lieferdatum:",
                listItemILabel2: "Tatsächliches Lieferdatum:",
                listItemILabel3: "Inv. Datum:",
                listItemILabel4: "Rechnungsdatum:",
                listItemILabel5: "Rechnungsnummer:",
                listItemILabel6: "Tage auf Inv.:",
                listItemILabel7: "Bestellstatus:",
                listItemILabel8: "Menge.:",

                listItemCLabel1: "Angefordertes Lieferdatum:",
                listItemCLabel2: "Anf. Versanddatum:",
                listItemCLabel3: "Eingangsdatum der Bestellung:",
                listItemCLabel4: "Datum der Stornierung:",
                listItemCLabel5: "Kündigungsmonat:",
                listItemCLabel6: "Grund:",

                /*
                    Footer
                */
                footerLabel1: "Home",
                footerLabel2: "Kontaktiere uns",
                footerLabel3: "Newsletter",
                footerLabel4: "Impressum",
                footerLabel5: "FAQ",
                footerLabel6: "Datenschutz und Daten",
                footerLabel7: "Nutzungsbedingungen",
                footerLabel8: "Dienstleistungen",
                footerLabel9: "Copyright © 2022 Deere & Company. Alle Rechte vorbehalten.",
                
                /*
                    Avalability
                */
                availabilityLabel1: "Verfügbarkeit",
                availabilityLabel2: "Basiscode oder Produktname:",
                availabilityButton: "Suchen",
    
    
                /*
                    Availability List
                */
               avalListLabel1: "Unsere Produkte",
               avalListLabel2: "Sortieren nach",
               avalListLabel2o1: "Produktname ↓",
               avalListLabel2o2: "Produktname ↑",
               avalListLabel2o3: "Basiscode ↓",
               avalListLabel2o4: "Basiscode ↑",
               avalListLabel3: "Zeige Kategorie",
               avalListLabel3o1: "Kommerzielles Mähen",
               avalListLabel3o2: "Kompakte Kommunaltraktoren und Lader",
               avalListLabel3o3: "Golf",
               avalListLabel3o4: "Rasentraktoren",
               avalListLabel3o5: "Nutztraktoren",
               avalListLabel3o6: "Nutzfahrzeuge",

               avalItemLabel1: "Basiscode:",
               avalItemLabel2: "Bündeln:",
               avalItemLabel3: "Kategorie:",
               avalItemLabel4: "Versandmonat im günstigsten Fall",
               avalItemLabel5: "Versandmonat im ungünstigsten Fall",
               avalItemLabel6: "Kommentar",
            }
        }
    }
})