## General Assembly Project 2 - Rick and Morty API

### Table of Contents 

- [Deployed Version](#deployed-version)
- [Code Installation](#code-installation)
- [Build-time](#build-time)
- [Brief](#brief)
- [Technologies Used](#technologies-used)
- [Development Process](#development-process)
- [API](#choosing-an-API)
- [Wireframing](#wireframing)
- [Home Page](#the-home-page)
- [Character Index](#character-index-page)
- [Character Show](#character-show-page)
- [Challenges](#challenges)
- [Wins](#wins)
- [Future Improvements](#future-impovements)
- [Key Learnings](#key-learnings)

### Rick and Morty API
The premise of our project was to make a character directory where a user could search through our list to find their desired character then display up-to-date information on that character emulating a ‘Top Trumps’ style character card. My partner on this project was [Peter-Bid](https://github.com/PeterBid).

###  Deployed Version 
[GA-LDN React Template](https://rick-and-morty-sei61.netlify.app/)

### Code Installation 
    * Clone or download the repo
    * Install yarn in Terminal by running: *yarn*
    * Start server with *yarn start*

### Build-time
/48 Hours/

### Brief 
Utilizing pair-coding build a React application that consumes any public API

### Technologies Used

#### Front-end
* React
* JSX
* Axios
* Bootstrap
* SCSS
* React Router Dom
* React-Audio-Player

#### API Used
The Rick and Morty API - [Documentation](https://rickandmortyapi.com/documentation/#character)

#### Dev Tools 
* VScode
* Yarn
* Insomnia
* Git
* Github
* Google Chrome dev tools
* Netlify (deployment)


## Development Process

### Choosing an API
Since this project was a hackathon when choosing a public API, we prioritized one that had user-friendly documentation. 

The Rick and Morty API is split into three sections. Its dataset includes 826 characters, 126 locations and 51 episodes. 

After using Insomnia to retrieve the data from the different endpoints we decided to design our project focusing on the ‘character’ section of the API. 

### Wireframing

Next we created the site’s wireframe. First, we detailed the file structure we were going to use along with a basic idea of our website's flow. Then, we honed in on exactly which endpoints we wanted to display within each character dataset. Finally, we settled on having a heavily stylized home page focused around a central hero.


### The Home Page

To code this project we used VScode’s live-share feature, we believed this would be the most efficient method in conserving time.

I was responsible for styling the homepage, and since we agreed that we wanted our site to emulate the show’s visual style, I made color choices in-line with this goal.  

The home page features a main hero gif, nav bar and three buttons that use React navigation. For the buttons I wanted to use the same font as seen on the show but couldn’t find it online. So instead I used a font-generator that created png images of that font and set it as background images for the buttons in CSS. I had to do this multiple times because I gave each button unique **onHover** attributes. 

To add some user interaction to the fun theme, we decided to include sound using React’s **useSound** import, we set it to onClick. 

### Character Index Page

On load this page calls a **useEffect** which triggers an **axios** request which in turn populates a piece of **useState** with data from the axios GET request. 

We then deconstructed the relevant Keys off the returned data, then mapped through the array of data displaying the information in a grid as character cards. Each card uses **navigate()** to link to that individual characters page. 

Next, we added a search bar that filters through the character array, using a **.includes** to return characters that match the search term. This works by updating a piece of state - ‘setSearchTerm’ with the event.target.value on each consecutive input. If the search bar is left empty the entire character dataset is displayed. 

To finish the page we added a ternary expression that displays a spinner gif is there an error when retrieving the data. 


### Character Show Page

To return the individual character we defined a **useParams** equal to the characterId which returned key value pairs from our getSingleCharacter GET request. Then we used string interpolation to add the useParams() on the endpoint of the GET request. 

To return the characters related location and episode list we found that we had to set three individual pieces of state to extract the data and make it usable in the JSX return.
  
#### Final Touches

We made these additions in the final hours before the deadline 

* Used flexbox to style the the character show page 
* Added an onSubmit sound to the search bar 
* Imported gif as a prop to use as Spinner 


### Challenges

* We struggled to return the full dataset with our axios requests, after trial and error we found that the data we wanted was nested inside data.results. 

### Wins

* Styling! I think the overall styling of the site is fun and complementary to the Rick and Morty brand. 

* Pair-coding! This was the first time I had pair coded and used VScode live-share and it was a great experience. Pete and I worked very well together, taking turns working on any specific problems, and where we didn’t tackle a task simultaneously we found it easy to formulate a plan of mini tasks to carry out individually. 

### Future Improvements

* Media queries to make the site responsive.
* Incorporate the episode and location endpoints and add them into the search function.
* Update navbar to include episodes and locations for quick navigation. 

### Key Learnings

* In hindsight I would have used a CSS framework like Bootstrap or Chakra to save time on styling.
* React.js - Since this was my first React app there was a learning curve to overcome but by the deadline I was far more confident in my understanding of how to useParams, when to add a useEffect, how to pass props between components and how to utilize difference pieces of state. .


