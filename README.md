# SEI-Project-3

## Brewery searching React application. 
Live Link: [Puzzles](http://puzzles.surge.sh/)

Application users may search for breweries in an area and learn more about what beers they provide. They can find a brewery's location on a map as well as learn more about it and link to its website.

### MVP
- User may browse or search breweries by many parameters
  - Search by city
  - Search by brewery name
  - Browse by zip code, state
  - Browse by brewery type
- Search results are displayed in a list on the page
- Search results are displayed as pins on a Google map
- Clicking on a returned brewery will display additional information about that brewery
- React hooks
- Brewery information will be displayed as a modal by the appropriate pin on the map

### Stretch Goals
- Use Redux for state management
- Use different map pins depending on type of establishment
- Use an API to find specific beers by brewery
- animations for modals
- Brewery show page to display more information, such as Google Places reviews
- User can create Bar crawl list of bars to visit

### Gold
- Bar crawl list includes routing on the map and finds the shortest overall path
- Export bar crawl list outside the site, email or SMS

### Wireframe
#### Homepage
![HomePage](/planning/wireframes/HomePage.jpg)
#### Select a Brewery
![Select Brewery](/planning/wireframes/Select_Brewery.jpg)
#### Brewery Info Page
![Brewery Info Page](/planning/wireframes/BreweryInfoPage.jpg)

### Technologies used
* React
  * Front end framework
* React Router
  * Routes between different section of the site
* Axios
  * Makes API calls
* Redux
  * Manages state that is needed for multiple components
* EmailJS 
  * Emails bar crawl itinerary
* React DND
  * Draggable method to reorder bar crawl list


### Approach taken 


### Unsolved problems


#### Useful links:
- [Google Maps JS API](https://developers.google.com/maps/documentation/javascript/overview#maps_map_simple-javascript)
- [Open Brewery DB](https://www.openbrewerydb.org/)
- [google-map-react Library](https://www.npmjs.com/package/google-map-react)
- [styled-components documantation](https://styled-components.com/docs/basics)
- [Google Places Details API](https://developers.google.com/places/web-service/details)
- [Google Places Place Search API](https://developers.google.com/places/web-service/search)
- [Redux](https://react-redux.js.org/?_sm_au_=iVVQss71DZ23QDS5L321jK0f1JH33)
- [EmailJS](https://www.emailjs.com/)

