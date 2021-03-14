# breakingbadme
## Milestone #2 study project, an homage to Breaking Bad!

[Visit the site on GitHub.io - breakingBadMe](https://michaeldijk.github.io/breakingbadme/)

This is a website created as a homage to a series, that is dear to my heart, I wanted to create a fan-site, covering what I've learned so far in my studies, and, also, making it interactive for the visitors, with JavaScript, CSS and HTML.

The site is created with a Mobile first approach, but, works great on larger viewwindows / computers as well. It covers interactivity from the front-page to the Trivia page, to the Characters page.

The site had to be well visible on all devices, have an interactive and intuitive design, and, look pleasing to the eye.

It has two different views, lightmode and darkmode, see mockups below:
## Darkmode:
![image](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/mockUps/darkMode.png)
## Lightmode:
![image](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/mockUps/lightMode.png)

## Table of contents
* [Who is the website for?](https://github.com/michaeldijk/breakingbadme#who-is-the-website-for)
* [Who is the owner?](https://github.com/michaeldijk/breakingbadme#who-is-the-owner)
* [UX Planes](https://github.com/michaeldijk/breakingbadme#ux-planes)
	* [Strategy Plane](https://github.com/michaeldijk/breakingbadme#strategy-plane)
	* [Scope Plane](https://github.com/michaeldijk/breakingbadme#scope-plane)
	* [Structure Plane](https://github.com/michaeldijk/breakingbadme#structure-plane)
	* [Skeleton Plane](https://github.com/michaeldijk/breakingbadme#skeleton-plane)
    * [Surface Plane](https://github.com/michaeldijk/breakingbadme#surface-plane)
* [Features](https://github.com/michaeldijk/breakingbadme#features)
	* [Home](https://github.com/michaeldijk/breakingbadme#home)
    * [Characters](https://github.com/michaeldijk/breakingbadme#characters)
    * [Episodes](https://github.com/michaeldijk/breakingbadme#episodes)
    * [Places](https://github.com/michaeldijk/breakingbadme#places)
    * [Trivia](https://github.com/michaeldijk/breakingbadme#trivia)
    * [Contact](https://github.com/michaeldijk/breakingbadme#contact)
    * [Features left to implement](https://github.com/michaeldijk/breakingbadme#features-left-to-implement)
* [Technologies Used](https://github.com/michaeldijk/breakingbadme#technologies-used)
* [Testing](https://github.com/michaeldijk/breakingbadme#testing)
    * [User Story Testing](https://github.com/michaeldijk/breakingbadme#user-story-testing)
    * [Manual testing across devices / browsers](https://github.com/michaeldijk/breakingbadme#manual-testing-across-devices--browsers)
    * [JavaScript](https://github.com/michaeldijk/breakingbadme#javascript)
    * [Unsolved issues](https://github.com/michaeldijk/breakingbadme#unsolved-issues)
* [Version Control](https://github.com/michaeldijk/breakingbadme#version-control)
* [Deployment](https://github.com/michaeldijk/breakingbadme#deployment)
* [Credits](https://github.com/michaeldijk/breakingbadme#credits)
    * [Code](https://github.com/michaeldijk/breakingbadme#code)
    * [Content](https://github.com/michaeldijk/breakingbadme#content)
    * [Media](https://github.com/michaeldijk/breakingbadme#media)
* [Acknowledgements](https://github.com/michaeldijk/breakingbadme#acknowledgements)

---

### Who is the website for?
People who are fans of Breaking Bad, and want to know more about the series. There is a **"Trivia"** (`trivia.html`) page testing user's knowledge about the series, and all the information that the trivia covers, can be found on the site. 

There is also an interactive **"places"** (`places.html`) page, which gives some insights in the locations where it was filmed.

### Who is the Owner?
Michael Dijk, is the owner of the site, and my aim for this website, was to make an interactive site, with the subject Breaking Bad. I wanted to go with a different project than the project options that where given by [Code Institute](https://codeinstitute.net/), and I then came up with Breaking Bad. To create a topic within the guidelines of the Project requirements, the site has the following features, and these features are in line with the guidelines for the example project options:
* A game **"Trivia"** (`trivia.html`), not a memory game, but a game nonetheless.
* Interactivity on the **"homepage"** (`index.html`), where users can get a randomized character and also a randomized quote, **"Trivia"** (`trivia.html`) where users can test their knowledge about Breaking Bad, and lastly, **"Places"** (`places.html`), where users can click through a dropdown option, and select several places where Breaking Bad has been recorded.
* I called on an API, from [The Breaking Bad API](https://breakingbadapi.com/), and used it for the random quote/character on the **"homepage"** (`index.html`), and also on the **"characters"** (`characters.html`) page.
* I called on an API, from leafletJS, to incorporate a maps function, which allows users to select from a list of locations, from a dropdown option
* I created interactivity, which remembers the option (themeable) and allows users to select dark/light theme, which is stored in localStorage.
* I also incorporated a contact page, which uses emailJS, as the email function.

### UX Planes
The following parts, describe the different planes and how I incorporated them into my project

#### Strategy Plane
The audience is geared towards new viewers of the show who are interested in getting to know more about Breaking Bad, fans who are looking to read up about some fun facts, for instance the locations where it was recorded, quotes from a character, and/or finding more information about a certain character. Read up about the episodes, and find an episode from a certain season.

I am making an interactive FAN site, about Breaking Bad, called breakingBadMe, with interactivity coming from several APIs, feeding into different parts of the site, it also incorporates a quiz, locations page, and the locations page uses leafletJS, as opposed to Google Maps.

The site will bring enjoyment, information on the series, and some quirky information which you could not find on other sites so easily.

The user/visitor will get an insight in Breaking Bad the series, Characters, places & episodes and also there is a contact form, in case something isn't working, they are able to contact me, or, they can contact me, to give their opinion about the site, or contact me in general.

I had planned the following as roadmap:
| #  | Opportunity/Problem |  Importance | Viability/Feasibility |
| ------------- | ------------- | ------------- | ------------- |
| 1  | Finding information about certain character(s)  | 5  | 3  |
| 2  | Finding information about certain episode(s)  | 3  | 1  |
| 3  | Random Quote / Character / death generator  | 5  | 5  |
| 4  | Google Maps with location pinpoints, to POI  | 5  | 5  |
| 5  | Funny things to know about the show  | 3  | 5  |
| 6  | Dark/light mode for the site  | 5  | 5  |
| 7  | Trivia game? Drag/drop game to test user knowledge  | 3  | 3  |

![image](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/otherFiles/viabilityFeasibility.png)

##### What can/could be covered?
I decided I could cover all aspects of the site, as most of the options fell inside of the last bracket, or the second bracket, thus, allowing me to incorporate each topic/option.

#### Scope Plane
In terms of features, I have been able to cover all aspects of the needed features. 

The users should get enjoyment and laughter out of the website, something that should be easy to navigate, and more so, fun to use/browse. It needed to connect users to Breaking Bad, and bring them value in terms of this subject, also, it had to be something more "special" compared to other Breaking Bad sites that are on the internet.

##### User Stories/scopes
| #  | Scenario |  Requirements |
| ------------- | ------------- | ------------- |
| 1 | As a visitor, I want to find information about a certain character | - Ability to click on a list of characters, to find more details about this certain character |
| 2 | As a visitor, I want to find information about (a) location(s) | - Ability to click on a locations page, to choose from a selection of locations, to view more detailed information about it |
| 3 | As a visitor, I want to play a game, or test my knowledge about the series | - Ability to go to a game/quiz, and test knowledge about the Series - Ability to read up about the Series before starting the game/quiz |
| 4 | As a visitor, and a dark theme user, I want to adjust the site, so that it suits my style/needs | - Ability to click on a button, and select light or dark theme, and it then saves that feature, inside the memory, allowing it to be returned at a later stage, and that feature still to be saved as preset |
| 5 | As a visitor, I want the site to be easy to navigate, and intuitive to use | - Open the site, either on mobile or larger view-window, and able to easily navigate the site due to intuitive design, and clear / well guided navigation |
| 6 | As a visitor, I want to be able to contact the owner, if something does not work | - Ability to go to a contact page, then fill in my details, and send it to the site owner |

#### Structure Plane
Information is organized in a tree-form structure, and it all links from the home-page to the next page and each page links back to the previous one, this is done from the menu on top, or from the burger menu, when on mobile-view windows.

![image](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/otherFiles/navigation.png)

I also included additional links to the **"trivia"** (`trivia.html`) page, from:
* Characters
* Episodes
* Places

As once this is read, it would be a good hint to link to the **"trivia"** (`trivia.html`) page, as they can then test their knowledge.

Later onwards, if needed/possible, we can integrate more options, but, an easy navigation, helps in good design flow and structure, and keeps users on the site.

#### Skeleton Plane


#### Surface Plane

### Features
#### Home
#### Characters
#### Episodes
#### Places
#### Trivia
#### Contact
#### Features left to implement

### Technologies Used
* [HTML5](https://en.wikipedia.org/wiki/HTML) - General website MarkUp
* [CSS3](https://en.wikipedia.org/wiki/CSS) - Styling for the site as a whole
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - Adding interactivity
* [Google Fonts](https://fonts.google.com/) - For the fonts used
* [Bootstrap5](https://getbootstrap.com/) - Framework used for the website
* [Font Awesome](https://fontawesome.com/) - All icons are taken from Font Awesome
* [jQuery](https://jquery.com/) - JavaScript library used
* [Photoshop](https://www.adobe.com/ie/products/photoshop.html?promoid=PC1PQQ5T&mv=other) - For changing image sizes, and saving them in the appropriate formats
* [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) - Used for general testing, fixing coding bugs, adjusting styling
* [Visual Studio Code](https://code.visualstudio.com/) - My main IDE for creating the site and JS / CSS
* [Git](https://git-scm.com/) - Local environment for version control
* [GitHub](https://github.com/) - Online version control, place to store data, and allow online visibility of the project

### Testing
#### User Story Testing
#### Manual testing across devices / Browsers
#### JavaScript
#### Unsolved Issues

### Version Control

### Deployment

### Credits

#### Code
##### HTML
* [Bootstrap5](https://getbootstrap.com/) - I used Bootstrap 5.0.0 BETA as my framework
* [Favicon-Generator](https://www.favicon-generator.org/) - Used to generate the favicon icon, and code to accompany the icon
* [Codeply | Skelly](https://www.codeply.com/p/P0KN7DNsEq) - Used example #1, and adjusted it to suit my site/needs, as I wanted to style the dark/lightmode button on the right, center Navbar-Brand and left the links to the site, this example showed exactly how to use the Bootstrap Navbar.


##### CSS
* [CSS-Tricks](https://css-tricks.com/perfect-full-page-background-image/) - For help with getting the main section image to align, centered and on each device.
* [W3schools](https://www.w3schools.com/css/css3_object-fit.asp) - Helped me with allowing images not to resize to much, on the random Character generator on the main page

##### JavaScript
* [Stack overflow](https://stackoverflow.com/questions/26709969/call-javascript-function-onchange-event-of-dropdown-list) - Used this as a partial solution to create my dropdown selection in the Characters page, adjusted it to suit my code, and need.
* [Stack overflow](https://stackoverflow.com/questions/18368319/toggle-css-sheets-on-click-with-javascript) - Used this code partially & adjusted with the help of the reference below, adjusted it to suit my needs/site
* [Prototypr BLOG](https://blog.prototypr.io/create-your-own-dark-mode-using-js-css-variables-and-localstorage-8b461864644b) - Did not exactly know how to tackle localStorage variables, but with the help of this site, I was able to make it work
* [The Breaking Bad API](https://breakingbadapi.com/) - Used to create / generate the API results for the Characters and Quote section on the index page, and also on the separate Characters page

#### Content
##### Media
* [Wallpaper Memory](https://wallpapermemory.com/desktop-backgrounds/tv-show-serial/breaking-bad) - For most Breaking Bad main section images
* Image for Viability/Feasibility/Importance - used from the course materials from [Code Institute](https://codeinstitute.net/)
* [Flaticon](https://www.flaticon.com/pattern/) - To create the patterned background for the dark/light theme
* [Noun Project](https://thenounproject.com/term/heisenberg/217221/) - Used to create my favicon ICON
* [Favicon-Generator](https://www.favicon-generator.org/) - Used to generate the favicon icon, and code to accompany the icon

##### Text
* [Ranker](https://www.ranker.com/app/search.htm?q=breaking%20bad) - Used to find lists for each season for the show, and accompanying texts for each episode, and order them according to rank from ranker.com

##### General
* [FANDOM](https://breakingbad.fandom.com/wiki/Colors) - Used to help me with finding colours for the site's light theme and dark theme.


### Acknowledgements
* My Mentor, who helped me a lot, and made time available, when needed: [Antonio Rodriguez](https://github.com/AkaAnto)
