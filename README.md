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

![project2](https://user-images.githubusercontent.com/87788714/161655797-a84b43f4-db7c-4998-b896-03a84a0d3a7e.gif)

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

![Screen Shot 2022-03-22 at 1 15 12 AM](https://user-images.githubusercontent.com/87788714/161655298-d76788c4-d9f4-4a78-bfb1-2bbd9e5c430d.png)

### Wireframing

Next we created the site’s wireframe. First, we detailed the file structure we were going to use along with a basic idea of our website's flow. Then, we honed in on exactly which endpoints we wanted to display within each character dataset. Finally, we settled on having a heavily stylized home page focused around a central hero.

![Untitled-2022-01-26-1457](https://user-images.githubusercontent.com/87788714/161655310-63c3975c-54a8-47aa-a0e6-e330efd0e3bf.png)


### The Home Page

<img width="1724" alt="Screen Shot 2022-03-22 at 4 36 35 PM" src="https://user-images.githubusercontent.com/87788714/161655334-78e18017-7f82-4242-a069-038f46e3d70b.png">

To code this project we used VScode’s live-share feature, we believed this would be the most efficient method in conserving time.

I was responsible for styling the homepage, and since we agreed that we wanted our site to emulate the show’s visual style, I made color choices in-line with this goal.  

The home page features a main hero gif, nav bar and three buttons that use React navigation. For the buttons I wanted to use the same font as seen on the show but couldn’t find it online. So instead I used a font-generator that created png images of that font and set it as background images for the buttons in CSS. I had to do this multiple times because I gave each button unique **onHover** attributes. 

![Screen Shot 2022-03-22 at 11 52 35 PM](https://user-images.githubusercontent.com/87788714/161655364-5ff64a43-d258-4adf-b890-600232150d01.png)


To add some user interaction to the fun theme, we decided to include sound using React’s **useSound** import, we set it to onClick. 

![Screen Shot 2022-03-23 at 12 21 22 AM](https://user-images.githubusercontent.com/87788714/161655384-a6247aa8-04ff-4303-9144-fcd032790ea6.png)

### Character Index Page

![Screen Shot 2022-03-23 at 2 03 11 AM](https://user-images.githubusercontent.com/87788714/161655410-b8d4ed45-54f4-4e18-923e-1d9792bc177b.png)

On load this page calls a **useEffect** which triggers an **axios** request which in turn populates a piece of **useState** with data from the axios GET request. 

![Screen Shot 2022-03-23 at 1 54 37 AM](https://user-images.githubusercontent.com/87788714/161655425-31dda623-119d-40f8-8b57-6947af79c851.png)

We then deconstructed the relevant Keys off the returned data, then mapped through the array of data displaying the information in a grid as character cards. Each card uses **navigate()** to link to that individual characters page. 

![Screen Shot 2022-03-23 at 2 04 20 AM](https://user-images.githubusercontent.com/87788714/161655442-793a8da0-1d2f-48c1-9971-372eb731f13f.png)

Next, we added a search bar that filters through the character array, using a **.includes** to return characters that match the search term. This works by updating a piece of state - ‘setSearchTerm’ with the event.target.value on each consecutive input. If the search bar is left empty the entire character dataset is displayed. 

![Screen Shot 2022-03-23 at 2 46 58 AM](https://user-images.githubusercontent.com/87788714/161655475-cca176b1-7888-411a-8d13-c4d54aa4978b.png)

To finish the page we added a ternary expression that displays a spinner gif is there an error when retrieving the data. 

![Screen Shot 2022-03-23 at 2 55 18 AM](https://user-images.githubusercontent.com/87788714/161655497-e6f1d3c0-25c6-4ecb-822d-0d803b96e59f.png)


### Character Show Page

<img width="1513" alt="Screen Shot 2022-03-23 at 3 14 00 AM" src="https://user-images.githubusercontent.com/87788714/161655523-04a5b919-9e5a-4071-acc4-bb9e390cc5a1.png">

To return the individual character we defined a **useParams** equal to the characterId which returned key value pairs from our getSingleCharacter GET request. Then we used string interpolation to add the useParams() on the endpoint of the GET request. 

To return the characters related location and episode list we found that we had to set three individual pieces of state to extract the data and make it usable in the JSX return.

![Screen Shot 2022-03-23 at 3 44 12 AM](https://user-images.githubusercontent.com/87788714/161655547-5c8dd26b-248e-4e2c-9998-f7a665dc05bb.png)
  
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


