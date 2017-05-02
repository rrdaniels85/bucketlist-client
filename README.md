[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

## About iCarpe Diem - Bucketlist Application
iCarpeDiem is an application that allows individuals to create a “Bucketlist”. The user's bucketlist is a list of items that the user wants to accomplish before they die. Once a user signs up, and then signs in, they can create, update, and remove list items. Each list item is required to have a description, category, and status. Immediately upon signing in, the application retrieves all that user’s list items and displays them to the user.

## Link to Live application

-   [iCarpeDiem Application](https://rrdaniels85.github.io/bucketlist-client/)

## Link to Bucketlist API for iCarpe Diem

-   [Bucketlist API](https://github.com/rrdaniels85/bucketlist-api)

## Dependencies

Install with `npm install`.

-   [Webpack](https://webpack.github.io)
-   [Bootstrap](http://getbootstrap.com)
-   [Handlebars.js](http://handlebarsjs.com)

## Technologies Used
-   [imgur](http://imgur.com/) - For storing images used with my app and storing wireframes.
-   [googledocs](https://www.google.com/docs/about/) - For storing my user stories.
- JavaScript, HTML, CSS, SASS, Ruby on Rails, Handlebars, Boostrap

## Wireframes


## User Stories



## Project Planning & Develeopment Process

Before writing any code, I made sure to enagage in a thorough planning process. I sketched out an initial set of wireframes and wrote some basic user stories. I then determined which relationships that I wanted to exist in my app and documented them in an ERD. I then determined the order that I wanted to complete sections of the project in. I knew that first I wanted to set up my project API. Once I could get my API functioning correctly, I then would create a very basic front-end in my client repository. Then, I would ensure that the front-end could properly connect to the back end. Once that was completed, I would work to create a more sophisticated user interface with Boostrap.

When developing my API, I knew that I first needed to determine the relationships between tables. I knew that each user would have many list items which meant a one to many relationship. I documented this in the form of an ERD. However, first, I scaffolded out my 'goals' table. In the table, each goal represents a user's bucketlist item. When I initially built out the table, I did not connect it to the user table. I wanted to first set it up and confirm it was working on its own. Then, I did a migration to create a foreign key that tied that goals to a specific user. I then updated my controller and other files to reflect this new relationship.

After I had verified everything was functioning as desired on the back end, I began work on my client repository. I created a basic HTML page structure for my various form fields. I then confirmed that I could connect these front end forms with my back end. Given that I knew I wanted to render a list to the user upon sign-in, I decided to utilize a handlebars template. I rendered a user's list with handlebars and also each list item's associated update, and delete buttons (and their respective modals). It was initially challenging to figure out how to get handlebars to work the way that I wanted it to. While the overview we did in class was helpful, I still had to look at a number of online resources and discussions to figure out the functionality that I desired.

Once I had everything correctly hooked up with the back end, I then turned my focus to the user interface. I tried to incorporate some additional Bootstrap into this project to make my UI look a little cleaner and more organized. As I worked through this, I ended up updating my wireframes to reflect my new vision for the UI. After completing the UI work on this project, I definitely feel more comfortable with Bootstrap than I did during the first project.

Finally, after I had gotten all my functionality working and developed a cleaner user interface, I did some manual testing of my application and had classmates, family members, and friends test it as well.

## Unsolved Issues
-   I wanted to incorporate a bootstrap carousel of images on the home page but did not have time to perfect it. The carousel would have had pictures of people completing bucketlist items (ex. skydiving, snorkeling, etc.). I had issues with displaying images at a consistent size without distortion. That is something that I would like to add to a future iteration.
-   I also wanted to eventually give users the ability to add upload images associated with each Bucketlist item but was unable to incorporate that within the time constraints.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
