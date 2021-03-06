# breakingbadme
## Milestone #2 study project, an homage to Breaking Bad!

[Visit the site on GitHub.io - breakingBadMe](https://michaeldijk.github.io/breakingbadme/)

This is a website created as a homage to a series, that is dear to my heart, I wanted to create a fan-site, covering what I've learned so far in my studies, and, also, making it interactive for the visitors, with JavaScript, CSS and HTML.

The site is created with a Mobile first approach, but, works great on larger viewwindows / computers as well. It covers interactivity from the front-page to the Trivia page, to the Characters page, and to the contact page.

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
    * [404](https://github.com/michaeldijk/breakingbadme#404)
    * [Features left to implement](https://github.com/michaeldijk/breakingbadme#features-left-to-implement)
* [Technologies Used](https://github.com/michaeldijk/breakingbadme#technologies-used)
* [Testing](https://github.com/michaeldijk/breakingbadme#testing)
    * [User Story Testing](https://github.com/michaeldijk/breakingbadme#user-story-testing)
    * [Manual testing across devices / browsers](https://github.com/michaeldijk/breakingbadme#manual-testing-across-devices--browsers)
    * [HTML](https://github.com/michaeldijk/breakingbadme#html)
    * [Lighthouse testing](https://github.com/michaeldijk/breakingbadme#html-lighthouse-testing)
    * [CSS](https://github.com/michaeldijk/breakingbadme#css)
    * [JavaScript](https://github.com/michaeldijk/breakingbadme#javascript)
    * [Unsolved issues](https://github.com/michaeldijk/breakingbadme#unsolved-issues)
* [Version Control](https://github.com/michaeldijk/breakingbadme#version-control)
* [Project barriers & Solutions](https://github.com/michaeldijk/breakingbadme#project-barriers--solutions)
    * [Project barriers & Solutions - General](https://github.com/michaeldijk/breakingbadme#project-barriers--solutions---general)
* [Deployment](https://github.com/michaeldijk/breakingbadme#deployment)
* [How to run this project locally](https://github.com/michaeldijk/breakingbadme#how-to-run-this-project-locally)
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

I wanted to included additional links to the **"trivia"** (`trivia.html`) page, from each other page, but decided this was to "crowded", and removed the links.

Later onwards, if needed/possible, we can integrate more options, but, an easy navigation, helps in good design flow and structure, and keeps users on the site.

#### Skeleton Plane
I've used [Bootstrap5, BETA2](https://getbootstrap.com/) as the framework, and the design has been created with a "mobile first" option. I've worked my way up from mobile to desktop view.

Click the respective links below, to see wireframing for each page, I added this to a separate file, to show them all in one page, and avoiding overcluttering the main `README.md`
* [Wireframes](https://github.com/michaeldijk/breakingbadme/blob/main/WIREFRAMES.md)

#### Surface Plane
I'm colour-blind, so picking the right colours is sometimes a bit tricky. Nonetheless, it has worked out very well, as I have two different colour schemes for the site:
* Dark themed colours
* Light themed colours

With the help of [FANDOM](https://breakingbad.fandom.com/wiki/Colors), I was able to get the colours for the site, and with the help of [CONTRAST CHECKER](https://contrastchecker.com/), I was able to find the right contrast ratio's for the colours used.

##### Dark theme
![image](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/surface/darkthemeColours.png)
* Font/text colour: DFD4C5
* Background colour: 1D1D1A
* Background accent colour: 182D23
* Contrast Checker, using background-colour and text:
![image](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/surface/darkthemeColoursRatio1.png)
* Contrast Checker, using accent-colour and text:
![image](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/surface/darkthemeColoursRatio2.png)

##### Light theme
![image](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/surface/lightthemeColours.png)
* Font/text colour: 0B0B0A
* Background colour: AFDAA9
* Background accent colour: 4AECE0
* Contrast Checker, using background-colour and text:
![image](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/surface/lightthemeColoursRatio1.png)
* Contrast Checker, using accent-colour and text colour:
![image](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/surface/lightthemeColoursRatio2.png)

### Features
The site incorporates many different features, and, the use of several APIs, to create the features available. Below, is a description per page, and the features each page contains.

#### General
* Dark/Light theme: each page contains a button to change the theme from light to dark, or vise versa, and the default theme is the dark theme. Upon changing the theme, it then is captures on `localStorage`, and saved with a preset of `key: theme` and `value: lightstyle` or `darkstyle`.
* Random background image: Each page contains a random background image, and these images are cycled through from one to four. Both dark theme and light theme, have four separate images, it cycles through, depending on the style the user choose from.
* main image, is set to a height of `85vh` to allow an introduction of the section below it, this indicates there is more content below. I originally wanted to use a scroll down icon, which moved, but, this would take away from the overall asteatic of the site.
* Each page, has an introductory text, in the main image.

#### Home
* Random Character: This is a feature, that when the user wants to read up about a character, they can press the button **Click here, for another Character** and it will then generate a new character in the field available. The random character then shows several details: Occupation, Nickname, Portrayed by, and it includes an image from the character (if available).
* Random Quote: This is a feature, that when the user wants to read up about a quote, they can press the button **Click here, for another quote** and it will then generate a quote, randomized. It then shows two things: The quote itself, and who said it. It also generates an image of the author (if available).
* Link to the trivia quiz: there is a link at the bottom of the main section, which goes directly to the **"Trivia"** (`trivia.html`) page.

#### Characters
* The characters page, makes use of the same array, that was used on the **"Home"** (`index.html`) page, but instead of randomizing it, it generates a list in dropdown, where the user/visitor can choose from. Once a character is selected, it generates several options: an image, the nickname, birthday (if known), if they are dead or alive, when the series finished, occupation, which seasons they appeared in and who portrayed them in the series.
* The characters introduction, also has a random character name, in it, so each time the page loads, it then changes the name, in the intro text: "There are some characters you just won't forget anymore... Like [name comes here]".

#### Episodes
* All the episodes are displayed in an accordion style list. It goes per season, and inside the seasons, they are further displayed in an accordion style, per episode.

Each season, is categorized in ranking, from [Ranker](https://www.ranker.com/app/search.htm?q=breaking%20bad)'s site, and they are ordered from high to low sccores, so not from one to episode 13.

#### Places
* I incorporated several places where Breaking Bad has been recorded, and, you can select from a dropdown, and, it then populates a map, with location, and further, it also adds an image and small description about the location itself.

This page further changes according to view-window, and larger windows, have a different view, with image on left besides the map, and description below it.

#### Trivia
* The trivia page, incorporates a trivia game, this game was originally found on a codepen, and I've added the correct references to the code, in both my readme, and the script itself. I further enhanced this script, by including a reset option, different functions, added a pop-up to explain the game features, and the different difficulty levels.

#### Contact
* The contact page, has a contact section, where users can send a request, or, just send in feedback. The contact form, is incorporated with emailJS, and, it sends a pop-up, once the form is processed, that it's send out.

#### 404
* Created a custom 404 page, to cover errors, if ever there is one, and, to allow same styling within the rest of the site, if error is present.

#### Features left to implement
* No features left to implement, all features are implemented as we wanted too.

### Technologies Used
* [HTML5](https://en.wikipedia.org/wiki/HTML) - General website MarkUp
* [CSS3](https://en.wikipedia.org/wiki/CSS) - Styling for the site as a whole
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - Adding interactivity
* [Google Fonts](https://fonts.google.com/) - For the fonts used
* [Bootstrap5, BETA2](https://getbootstrap.com/) - Framework used for the website
* [Font Awesome](https://fontawesome.com/) - All icons are taken from Font Awesome
* [jQuery](https://jquery.com/) - JavaScript library used
* [Photoshop](https://www.adobe.com/ie/products/photoshop.html?promoid=PC1PQQ5T&mv=other) - For changing image sizes, and saving them in the appropriate formats
* [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) - Used for general testing, fixing coding bugs, adjusting styling
* [Visual Studio Code](https://code.visualstudio.com/) - My main IDE for creating the site and JS / CSS
* [Git](https://git-scm.com/) - Local environment for version control
* [GitHub](https://github.com/) - Online version control, place to store data, and allow online visibility of the project

### Testing
The following section, describes how the site and it's features have been tested, to make sure it works across the different view-windows and browsers.

#### User Story Testing
I created a separate markdown file, for the user story testing, please click the following link:
* [User Stories](https://github.com/michaeldijk/breakingbadme/blob/main/USERSTORIES.md)

#### Manual testing across devices / Browsers
I tested the site with different devices and browsers, see my notes below, for each test:
* Mobile: I discovered while testing on Mobile, that Android worked well, with the main `mainImageRow` styling, where I added `background fixed`, but this function doesn't work well on iOS devices, therefore implemented a fix found on [Stack overflow](https://stackoverflow.com/questions/24154666/background-size-cover-not-working-on-ios)
* Opened the site on different browsers: Chrome, Safari, Opera, Edge, to make sure all the functions where working and visuals where displaying correctly.
1. Opened the site on each browser, and checked each function off one by one on each browser.<br>
([Brave](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/testing/browsers/brave.png) || [Chrome](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/testing/browsers/chrome.png) || [Edge](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/testing/browsers/edge.png) || [FireFox](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/testing/browsers/firefox.png) || [opera](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/testing/browsers/opera.png) || [Vivaldi](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/testing/browsers/vivaldi.png))
2. I did this, by going into each page, and tested each section one by one
    1. I noticed that Firefox, was the quickest of my manual testing, but, overall the experience was quite similar

#### HTML
##### Code validator
When I completed my HTML code, I carried out a validation test, by using [W3C Markup Validation Service](https://validator.w3.org/), which is a worldwide recognized validator created by the WWC, that allows checking HTML and XHTML code, to check if the markup was documented correctly, and to correct any errors found.

***`index.html`:*** [2 Errors](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/testing/htmlValidator/index.png)
1. **Error: Bad value 20px for attribute width on element img: Expected a digit but saw p instead.** <br>
I removed this icon, as it was not great for user experience, as I only targetted it at first for the dark theme, and it would have meant I needed to target it also for the light theme, together with the images and all the other options that was present, decided to take it out of the site.
2. **Error: Bad value for attribute width on element img: The empty string is not a valid non-negative integer.**<br>
I removed the empty `width=""` property, this solved this error.

***`characters.html`:*** [3 Errors](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/testing/htmlValidator/characters.png)
1. **Error: Stray end tag p.** <br>
`</p>` was positioned before the closing `</select>`, which caused it to show as a straying tag, positioned it after, this fixed the error.
2. **Error: Bad value for attribute width on element img: The empty string is not a valid non-negative integer.** <br>
Removed the empty `width=""` property, which solved this error.
3. **Error: Stray end tag div.** <br>
Removed the straying tag, which solved the error.

***`episodes.html`:*** [1 Error](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/testing/htmlValidator/episodes.png)
1. **Error: Stray end tag div.** <br>
Removed the straying div, which solved this issue.

***`places.html`:*** [2 Errors](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/testing/htmlValidator/places.png)
1. **Error: Stray end tag div.** <br>
Fixed error by removing straying tag.
2. **Error: Stray end tag div.** <br>
Fixed error by removing straying tag.

***`trivia.html`:*** [2 Errors](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/testing/htmlValidator/trivia.png)
1. **Error: End tag section seen, but there were open elements.** <br>
Fixed this error, by fixing error number two.
2. **Error: Unclosed element div.** <br>
Fixed this error, by adding a closing div on line #117, and section moved to line #118.

***`contact.html`:*** No errors found.

##### HTML Lighthouse Testing
![image](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/testing/lighthouse/lighthouseScore.png)
Lighthouse testing came up with certain low values, these values are present due to high quality images, to mitigate lower loading times, I implemented a loader function, with this the site only becomes visible now, when the site has been fully loaded.

Some of the loading times are also caused by the CSS files of bootstrap and font awesome, which cannot be prevented.

#### CSS
* Naming conventions: Made a mistake with the button class I created, as I named it `btnDarkstyle`, but this naming, did not suit both CSS styling, so it's renamed to `btnLightDarkstyle`.

##### Code validator
***`lightstyle.css`:*** [We found the following errors (1)](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/testing/cssValidator/lightstyle.png)
1. **Parse Error ... }** <br>
There was an empty media-query, which I didn't remove, removed it, and since, the errors has been removed as well. No further errors found.

***`darkstyle.css`:*** [We found the following errors (1)](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/testing/cssValidator/darkstyle.png)
1. **Parse Error ... }** <br>
There was an empty media-query, which I didn't remove, removed it, and since, the errors has been removed as well. No further errors found.

#### JavaScript
##### Code Validator
When I completed my JavaScript code, I carried out a validation test, by using [JSHint](https://jshint.com/), which is a code validator, for JavaScript, to discover and resolve any potential errors which could be present in your code.

***`charactersQuoteScript.js`:*** [Seven warnings, Six undefined variables, four unused variables](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/testing/jsValidator/charactersQuoteScript.png)
1. **Six warnings resolved, which refer to ES6** <br>
As I used ES6 JavaScript, I had to add `/*jshint esversion: 6 */` to my code, as comment on top. Since adding this, there was one warning left.
2. **Missing semicolon.** <br>
Resoved this error, by adding a semicolon at the end of line #65.
3. **Six undefined variables** <br>
Resolved these errors, by adding empty variables on top, to allow them to be used/overwritten in my code later, when accessed, and assign them default values.
4. **Four unused variables** <br>
These are not needed to be resolved, as these variables (functions), are loaded in `index.html`, with `onload`, or called on when a button is pressed.

***`charactersScript.js`:*** [Nine warnings, Five undefined variables, Three unused variables](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/testing/jsValidator/charactersQuoteScript.png)
1. **Five warnings resolved, which refer to ES6** <br>
As I used ES6 JavaScript, I had to add `/*jshint esversion: 6 */` to my code, as comment on top. Since adding this, there where four warnings left.
2. **Unnecessary semicolon** <br>
Resolved this by removing a semicolon on line #25.
3. **Missing semicolon** <br>
Resolved this by adding a semicolon on line #41.
4. **Unnecessary semicolon** <br>
Resolved this by removing a semicolon on line #44.
5. **Missing semicolon** <br>
Resolving this by adding a semicolon on line #58.
6. **Undefined variable charactersArray** <br>
This variable is defined in the script `charactersQuoteScript.js`, and this is loaded in the HTML document, therefore it reports it as empty, as it's not available directly in the script itself.
6. **Undefined variable option** <br>
Resolved this by adding an empty variable on top, to allow to be used/overwritten in my code later.
6. **Undefined variable charactersJsInsert** <br>
This variable is defined in `charactersQuoteScript.js`, which is loaded in as well.
6. **Undefined variable randomIndex** <br>
This variable is defined in `charactersQuoteScript.js`, which is loaded in as well.
6. **Undefined variable randomCharacter** <br>
This variable is defined in `charactersQuoteScript.js`, which is loaded in as well.
6. **Unused variable loadCharsSelector** <br>
This function is used as callback to loadChars in `charactersQuoteScript.js`
6. **Unused variable charactersDropdownSelection** <br>
This function is used on the dropdown selection field, to create the list of characters.
6. **Unused variable charactersRandomInput** <br>
This function is used as callback to loadChars in `charactersQuoteScript.js`

***`closingMenus.js`:*** [One warning, One undefined variable](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/testing/jsValidator/closingMenus.png)
1. **Undefined variable, which is due to use of JQuery** <br>
Resolved this by adding `/*globals $:false */` to the top of my script, to let it know I'm using JQuery, on checking in JSHint.
1. **Missing semicolon** <br>
Fixed this error, by adding the semicolon on line #5.

***`emailForm.js`:*** [One undefined variable, One unused variable](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/testing/jsValidator/emailForm.png)
1. **Undefined variable emailjs** <br>
This is the parameter that is used for the form script, and we cannot assign an empty variable to it in global, therefore this error remains, but it's the intended way of the script.
1. **Unused variable sendMail** <br>
This is used in `contact.html` on submission of the form.

***`episodes.js`:*** [One undefined variable](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/testing/jsValidator/episodes.png)
1. **Undefined variable, which is due to use of JQuery** <br>
Resolved this by adding `/*globals $:false */` to the top of my script, to let it know I'm using JQuery on checking in JSHint.

***`leafletscript.js`:*** [51 warnings](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/testing/jsValidator/leafletscript.png) & [continued](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/testing/jsValidator/leafletscript1.png)
1. **42 warnings resolved, which refer to ES6** <br>
As I used ES6 JavaScript, I had to add `/*jshint esversion: 6 */` to my code, as comment on top. Since adding this, there where nine warnings left.
2. **Nine warnings, which are caused due to leafLet JS** <br>
These warnings could not be solved, as this is the way markers are added / coded, when adding it to the map.
3. **Undefined variable, due to leafLet JS** <br>
`L`, is a value specified in the leafLet JS documentation, that markers are assigned using `L.marker`, therefore this undefined variable is present.
3. **Unused variable selectPlace** <br>
This variable is used when using the select dropdown in the page, and it is adjusted with changing the selection option.

***`themeswitcher.js`:*** [51 warnings](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/testing/jsValidator/leafletscript.png) & [continued](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/testing/jsValidator/leafletscript1.png)
1. **11 warnings resolved, which refer to ES6** <br>
As I used ES6 JavaScript, I had to add `/*jshint esversion: 6 */` to my code, as comment on top. Since adding this, there was one warning left.
2. **Warning unnecessary semicolon** <br>
Resolved this error, by removing the unnecessary semicolon.
2. **Unused variable toggleDarkLightTheme** <br>
This variable is called on, when pressing the dark/light theme button
2. **Unused variable randomBackground** <br>
This variable is called on with onload, when page loads, to randomly create a background.

***`quiz.js`:*** [20 warnings and seven unused variables](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/testing/jsValidator/quiz.png)
1. **17 warnings resolved, which refer to ES6** <br>
As I used ES6 JavaScript, I had to add `/*jshint esversion: 6 */` to my code, as comment on top. Since adding this, there are three warnings left.
1. **Unnecessary semicolon** <br>
On line #49, there was a semicolon, which was not necessary, removed it, fixed this error.
1. **Unnecessary semicolon** <br>
On line #54, there was a semicolon, which was not necessary, removed it, fixed this error.
1. **Forgot to remove debugger mode** <br>
This error was fixed by removing the debugger mode, since, error was resolved.
1. **Unused variables** <br>
The variables which are advised to be unused, are called on, in the HTML code, which is generated through the buttons and functions.

***`loader.js`:*** [One undefined variable](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/testing/jsValidator/loader.png)
1. **Undefined variable, which is due to use of JQuery** <br>
Resolved this by adding `/*globals $:false */` to the top of my script, to let it know I'm using JQuery on checking in JSHint.

##### JavaScript Testing
Testing of my project has been done manually, as I wasn't confident yet with Jasmine testing. I am getting more confident, in putting it to practice, but as this project was constraint with time, I wanted to not make mistakes, and decided to go with manual testing instead.

Each function and JavaScript code that I wrote, I added console log, to log the outputs of the code to the console, to confirm the function was giving the accurate details.

Each testing session usually involved:
1. Reloading the page multiple times, while console in DevTools was open, to confirm the loading happened correctly and accurately.
2. I also manually called on each function, to see if the output of that function in the console, confirmed the right details, and, this allowed me to adjust my code and scripts, to accept the correct values when called on
3. When writing the scripts and functions, I added several `console.log` lines, to confirm the output of each function, before removing the `console.log` line itself.
This allowed me to confirm that when for instance, on the `characters.html` page, the random character name was loaded in, it logged to console. In the beginning when this didn't work, I had to add it as a callback to the original script. I also added several alert functions, to catch the error, if the script was broken.
4. Intentionally, when the script was written, I "broke" the script, so it would go to the else statement, showing it was erroring the code, meaning it didn't work. Then adjusting it back to the correct way, confirmed the code worked.
5. On the `index.html` page, the Random Quote generator, I added two `console.log` statements, one for the value: `name`, and one for the value: `author`.<br>
`console.log("compare ", character.name, charName, character.name.localeCompare(charName));` & `console.log("compare else name:", character.nickname, charName, character.nickname.localeCompare(charName));`<br>
I then knew, my code worked, because it outputted a "0" for value matching, on either option.
6. For the theme switcher, I opened DevTools and looked at multiple options, one was that I looked under "application" and then "Local Storage", to confirm it was present in "Local Storage". I also performed several tests using console.log, to confirm the right keyword was stored.
7. For the `places.html` page, I created a dropdown list, added one value, and then ran through the values. At first it added all my markers, and not changed / removed the previous one, but this was quickly resolved by adding `markerXXX.remove();` to the script, which solved this issue.
8. For the `quiz.html`, I ran through debugger mode, which the original writer of the unadjusted code inserted, I then added a debugger to my own parts, and console logged it, to confirm it was giving the appropriate values when selecting a difficulty level, and, the deductions where working as intended. Once this was confirmed, the game worked, and removed the debugger code, and also the console logs, and then pushed it to my repo.

This is how I attacked all my scripts, and, tested and re-run them multiple instances, and console logged them fully, until I understood the correct handling of my code, and, was happy with the results, before removing any remaining `console.log()` statements.

#### Unsolved Issues
* No unsolved issues at present.

### Project barriers & Solutions
* I had some issues how to go over different backgrounds, with the two style options that I created. Together with the help of [Stack overflow](https://stackoverflow.com/questions/31277685/change-background-image-of-a-div-everytime-page-refresh) - I was able to implement this into my site. I then added an if else statement to find out if it was either on light theme or dark theme, and then adjusted the images accordingly.
* I also didn't fully understand the use of localStorage, but with the help of [Prototypr Blog](https://developer.mozilla.org/en-US/) - I was albe to understand how to implement this option, and adjusted it accordingly. 
* I created some interfaces that worked together with [The Breaking Bad API](https://breakingbadapi.com//) - At first, I was constantly reloading the API and it's array's, but with the help of my Mentor, I was able to tackle this, and save it into array's and work from those array's instead
* I found it difficult to create the dropdown field at first with the data from the array, but with the help of [Stack overflow](https://stackoverflow.com/questions/26709969/call-javascript-function-onchange-event-of-dropdown-list) - I was able to implement this, and adjust it to my needs

##### Project barriers & Solutions - General
* At the beginning, I had issues with understanding JavaScript. I started the project about a month ago, and wanted to cover almost (if possible) all aspects of each project, that was given as examples. With this in mind, I have been able to make a great site, with great features and UX. It follows UX principles, albeit the load is a little bit longer than I would have wanted, but this is due to large images, and solved with a "loader"
* There where times, where I found that I didn't understand anything, i.e. the leafletJS map, but perserverence and working through the leaflefJS documentation has helped tremendously, and, with help of the Code Institute documentation, I was able to implement an if else, else if statement, to run through the markers
* I am very pleased and happy with the results, and the website has all the features that I wanted to implement.

### Version Control
[Git](https://git-scm.com/) was used as local repository, and [GitHub](https://github.com/) as a remote repository.

The process followed for using Git and GitHub is as followed:
1. ***Select New repository on GitHub's main page, once logged in***<br>
![image](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/versionControl/newRepo.png)
2. ***Fill in the needed details: Repo name, description, add Readme file, add gitignore***
3. ***Click on "Create Repository, to generate the new repo***
4. ***Click on "Code" and copy the HTTPS link***<br>
![image](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/versionControl/copyLink.png)
2. ***Open VS-Code and select "clone repository..."***<br>
![image](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/versionControl/vsCodeCloneRepo.png)
2. ***Select a folder to save the cloned Repo***<br>
![image](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/versionControl/selectFolder.png)
2. ***VS-Code will then confirm the repo has been cloned, and you can open the workspace, to start working***<br>
![image](https://raw.githubusercontent.com/michaeldijk/breakingbadme/main/assets/readMeFiles/versionControl/confirm.png)

#### Version Control notes
Some of my commits to GitHub are to long, and I've read the following post, on avoiding this, and why it's important to have "short and consice commits". Unfortuantely I read this to late, but will implement this going forward. [Chris Beams - Git Commit](https://chris.beams.io/posts/git-commit/).

### Deployment
The project was developed using a local IDE, and with the integration of git, which allowed me to push each change towards my GitHub Repository.
This project has been deployed on GitHub pages.

#### How to deploy this on GitHub
1. Login into GitHub.
1. From the list of available repositories, the correct repository was chosen: michaeldijk/breakingbadme
1. Once the repository was opened, Settings was selected from the third menu on the top, this is the icon with the gear wheel.
1. Once in the Settings page, scrolled down to the bottom, where it mentions GitHub Pages.
1. The correct source was then selected, this was set to Master Branch, as we haven’t made any other branches after this one.
1. Once Master Branch was selected, the page was then automatically refreshed and under GitHub Pages you will then see: " Your site is published at https://michaeldijk.github.io/breakingbadme/”
1. After the link was retrieved under the GitHub Pages section, the repository index was then updated to reflect the correct link on top, and to do so, the following steps where performed:
	1. On the repository index, we selected Edit just below the second menu on top right.
	1. The correct Repository name was then added with its corresponding GitHub.io link

### How to run this project locally
To clone this project to a local IDE of your choice you would have to follow the steps below, using GitHub:
1. Open GitHub, and navigate to the repository page michaeldijk/ms1
1. Under the repository name, click "Code”
1. In the Code pop-up window, you select “HTTPS” but, this should be the default selection, copy the clone URL for the repository
1. Open Git Bash in your local IDE
1. Change the working directory to the directory where you want the cloned directory to be made
1. Type `git clone`, and then paste the URL that you've retrieved in step 3. `git clone https://github.com/michaeldijk/breakingbadme.git`
1. You then press Enter. Your local clone will be created. 
```
$ git clone https://github.com/michaeldijk/breakingbadme.git
Cloning into 'breakingbadme'...
remote: Enumerating objects: 221, done.
remote: Counting objects: 100% (221/221), done.
remote: Compressing objects: 100% (149/149), done.
remote: Total 863 (delta 118), reused 172 (delta 72), pack-reused 642
Receiving objects: 100% (863/863), 14.23 MiB | 18.06 MiB/s, done.
Resolving deltas: 100% (433/433), done.
```
1. After receiving confirmation that clone was "done", you can then open/work on the files that are downloaded to the folder of your choosing, you can also open the directory through your local IDE, and work on it from there onwards.
1. You can afterwards, push this to a different branch, on the repository, in case you want to provide additional code towards my the downloaded project.

### Credits
I have used several sources to contribute to solutions, and all sources that was used are attributed in my code. None of the solutions found, have been copied, but rather used as a starting point, to create my own code with the guidance of the solutions provided.

#### Code
##### HTML
* [Bootstrap5, BETA2](https://getbootstrap.com/) - I used Bootstrap 5.0.0 BETA as my framework
* [Favicon-Generator](https://www.favicon-generator.org/) - Used to generate the favicon icon, and code to accompany the icon
* [Codeply | Skelly](https://www.codeply.com/p/P0KN7DNsEq) - Used example #1, and adjusted it to suit my site/needs, as I wanted to style the dark/lightmode button on the right, center Navbar-Brand and left the links to the site, this example showed exactly how to use the Bootstrap Navbar.
* [Codepen | Sanne van Tongelen](https://codepen.io/savant/pen/gbaveO) - Used this quiz example, and adjusted it to suit my site/needs, as I wanted to create a quiz as addition to my other options (API integration (leafletJS maps / breakingbad API)), this example showed exactly how to create a simple quiz. I then incorporated a difficulty level, option, a modal to explain the options / use, and a restart at the end of the game, for both win & loosing. Code has been atributed correctly.

##### CSS
* [CSS-Tricks](https://css-tricks.com/perfect-full-page-background-image/) - For help with getting the main section image to align, centered and on each device.
* [W3schools](https://www.w3schools.com/css/css3_object-fit.asp) - Helped me with allowing images not to resize to much, on the random Character generator on the main page
* [Stack overflow](https://stackoverflow.com/questions/24154666/background-size-cover-not-working-on-ios) - Helped with fixing the main heading image, which was set to fixed, and this caused it to not be visible correctly on iOS, with the help of this page/solution, I solved this issue

##### JavaScript
* [Stack overflow](https://stackoverflow.com/questions/26709969/call-javascript-function-onchange-event-of-dropdown-list) - Used this as a partial solution to create my dropdown selection in the Characters page, adjusted it to suit my code, and need.
* [Stack overflow](https://stackoverflow.com/questions/18368319/toggle-css-sheets-on-click-with-javascript) - Used this code partially & adjusted with the help of the reference below, adjusted it to suit my needs/site
* [Prototypr BLOG](https://blog.prototypr.io/create-your-own-dark-mode-using-js-css-variables-and-localstorage-8b461864644b) - Did not exactly know how to tackle localStorage variables, but with the help of this site, I was able to make it work
* [The Breaking Bad API](https://breakingbadapi.com/) - Used to create / generate the API results for the Characters and Quote section on the index page, and also on the separate Characters page
* [Stack Overflow](https://stackoverflow.com/questions/31277685/change-background-image-of-a-div-everytime-page-refresh) - This page helped me solve my background changer. I wanted to change it on reload, and this helped me, adjusted code, and changed it appropriately to make it work with my own site.
* [MDN Web Docs](https://developer.mozilla.org/en-US/) - This has been a great help, in solving and understanding Javascript functions / statements / and other information I needed to find.

#### Content
##### Media
* [Wallpaper Memory](https://wallpapermemory.com/desktop-backgrounds/tv-show-serial/breaking-bad) - For most Breaking Bad main section images
* Image for Viability/Feasibility/Importance - used from the course materials from [Code Institute](https://codeinstitute.net/)
* [Flaticon](https://www.flaticon.com/pattern/) - To create the patterned background for the dark/light theme
* [Favicon-Generator](https://www.favicon-generator.org/) - Used to generate the favicon icon, and code to accompany the icon
* [Giphy](https://giphy.com/gifs/breaking-bad-money-HhWG41ntlV6UM) - Used for the loader, the Breaking Bad Money teller
* [Conde Nast Traveller](https://www.cntraveller.com/gallery/where-is-better-call-saul-filmed) - Used image from Twisters restaurant
* [Breaking Bad Locations](https://www.breakingbad-locations.com) - Used image from Better Caul Saul's business
* [Roadtrippers](https://maps.roadtrippers.com/trips/10314584) - Used for the remainder of locations images

##### Text
* [Ranker](https://www.ranker.com/app/search.htm?q=breaking%20bad) - Used to find lists for each season for the show, and accompanying texts for each episode, and order them according to rank from ranker.com

##### General
* [FANDOM](https://breakingbad.fandom.com/wiki/Colors) - Used to help me with finding colours for the site's light theme and dark theme.
* [coolors](https://coolors.co/) - Assisted in fiinding the right colour pallete
* [CONTRAST CHECKER](https://contrastchecker.com/) - Assisted in finding the right balance from foreground / background colours

### Acknowledgements
* My Mentor, who helped me a lot, and made time available, when needed: [Antonio Rodriguez](https://github.com/AkaAnto)
