#User stories – Who are Your Users, What do they Want, and Why?

In recent months, there's been a growing focus on cases of police brutality. Most social media platforms are rampant with bias (either pro or con police). Good Cop Bad Cop hopes to bring a balanced perspective to the debate. It allows citizen watchdogs to report on both positive and negative actions conducted by the police in one place. If successful, it would incentivize police departments to take proactive steps to have more "positive" incidents rather than negative.


#Screenshot

![Alt text](http://imgur.com/diht95x)


#Technologies Users, Unsolved Problems, Major Hurdles Overcome:

At first, I intended to build my first MEAN stack app. Using current windspeeds overlaid on a map, project aeolus would be an app that would help a UK sales team better identify likely buyers of residential wind turbines. https://github.com/karldonus/projectAeolus Unfortunately, achieving basic CRUD was plagued with numerous sandpits. The WOW MET (uk weather) api wasn't very user-friendly and the documentation was subpar. Too many unfamiliar moving parts were in play simultaneously for this project. I spent my Monday trying to connect the Mongo with angular. With my lack of background in mongo, it made getting a grasp on mongoose and then later mongojs challenging. After achieving CRUD on Tuesday night, I ran into the issue with deciphering how to integrate the angular syntax for mapbox. On Wednesday morning, I decided to pivot to an entirely new stack AND project. That was a mistake.

My new app would be built on the meteor.js framework. At DevFestDC, it was lauded the next generation framework. The initial to-do tutorial was deceptively easy. My biggest meteor-related hurdle would be the documentation. While there's plenty of documentation, the youth of meteor is its downfall. Most meteor examples on stackoverflow responses or video tutorials were deprecated or simply no longer supported. For example the dependency routes, were replaced by iron:routes. Passing of methods between server/client were handled entirely differently now vs. a six months ago. Adding layers of complexity (e.g. validation, user authentication, templating, and non-autopublish measures) gave ample opportunities to stumble. A simple deployment corrupted my local bcrypt file. Errors are less telling than in ruby on rails or even node/express. Bottom line is that I love meteor. However, until the meteor community matures, a coder needs to be careful of seismic shifts in convention that could radically change the behavior of a legacy meteor app.

Due to a mid-week pivot, I'm left with an app that only achieves basic CRUD. I'm disappointed by my lack of progress. However, I'm excited about the possibility of expanding the functionality of this app before the meet-and-hire. Specifically, I'm looking at allowing people to map their location of their police activity report. I want to allow embeded video through links. I want to dynamic content pulling from the twitter api (searching thru #policebrutality and the positive equivalent). I want police department profiles that use d3 to visualize incident stats. I want this to be redone as a mobile-first site and a wrapped app. This app could have tremendous potential, if done right.

#Installation Instructions for Dependencies:
To run locally, please install meteor.js. No need to npm install any dependencies. Within the goodCopBadCop folder execute "meteor" in the console to launch app. To access the database independently, execute "meteor mongo".

#Link to your Wireframes:
Please see planning folder.
