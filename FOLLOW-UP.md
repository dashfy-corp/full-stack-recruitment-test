# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?

- react-bootstrap : for pre-made visual components
- react-world-flags : for nice country flag drawings
- react-router : for page routings
- axios : for api data retrieving

### Q) What's the command to start the application locally?

to start the app : `npm start`

to start the server :
"json-server --port 5000 --watch public\\db.json"

---

# General:

### Q) If you had more time, what further improvements or new features would you add?

This was a nice exercise ! There´s a lot of functionalities to add.

The most important - im my humble opinion - is to add the CRUD capabilites and querying.
After this is important to build a solid user logging system.
.. and integrate it to the rest of the large application.

### Q) Which parts are you most proud of? And why?

I liked the overall solution provided - with Navbars, About, and navigation between the pages.

And liked much the colorful avatars - that gave a nice feel to the screen.

### Q) Which parts did you spend the most time with? What did you find most difficult?

I spent a lot of time with the visual interface - because of my poor knoledge on the subject - and learned a lot.

Will do an extensive course of CSS on Udemy next.

I also had some unexpected trouble with presenting the Candidate Profile Infos of Proficiencies, Experiences and Education because i was unable to access these arrays of objects. I could console.log() the array - but couldn´t acess the array elements [0], [1] ... etc

Tested it in a pure JS environment and worked fine.

Made a lot of stackoverflow research - and saw some similar questions - but don´t found a working solution.

So, in the end I didn´t made this part of the application. I´m sorry - but my time was over !

Below is a link of a similar problem - there´s a lot of this in the Stack Overflow site.
https://stackoverflow.com/questions/38524580/accessing-object-within-array-in-reactjs

---

I also couldn´t have json-server working with the data.json file provided.

I made a workaround using db.json file instead.

I changed the structure of this file to match the structure of the sample files presented in the json-server website docs.

{
"candidates": [{
"id": 1,
"avatar": "https://robohash.org/fugitipsumnesciunt.png",
"name": "Arty Ivanovic",  
 "current_position": "Senior UI/UX Designer",
"phone_number": "(236) 7194795",
"city": "Carrasqueira",
"country": "Portugal",
"countryCode": "PRT",
"proficiencies": [{ <-------- Later I had problems accessing this arrays
"name": "Node.js"
....

### Q) How did you find the test overall? Did you have any issues or have difficulties completing? If you have any suggestions on how we can improve the test, we'd love to hear them.

I liked it very much ! finding the test very interesting and amusing.

I was a good learning and practicing opportunity.

As a sugestion, maybe its a good idea to add a simple formular request to edit information - like editing the candidate name only.
