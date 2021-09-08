# NotificationBuilder
 This design task was assigned in the second week of my internship. Following are the requirnments of this task:

# Introduction
 This challenge is used to check your knowledge with modern web technologies with focus on:
    ● HTML 5
    ● CSS 3
    ● JavaScript (ES 5 / 6)
    ● Angular2+
    ● Observables & RxJS
    ● State Management (NgRx)
    ● NodeJs/Express
    ● MongoDB(Preferable), Firebase

# Task Description
 The goal of this coding challenge is to create an Angular Library Project which can be used to show notification messages within a SPA. Those notifications should be used to display information which gives visual feedback to the user, but does not disturb them at the current work. One example would be a chat application, where the notification module displays a slight notification that someone has logged in. The module should be encapsulated, thus it could be shared across multiple projects. The final result should be included into a nice example page, where the features of the notification module can be tested in.
 
    Create a standalone prototype based on Angular, HTML and CSS. Write a simple SPA where the notification module is included and can be tested in. The prototype should be based on:
        ● Package/Dependency managers - like NPM/bower
        ● and others if you like to have your own toolkit.

    The prototype should also include the following concepts/features:
        ● Observables & RxJS
        ● State Management (NgRx)

    The following user stories must be catered during the development:
        ● Create a basic notification module
        ● Create a login and register page for the User.
        ● Create a dashboard page which will list all the notifications of the logged-in User.
            o User can be able to Edit/Delete the notifications.
        ● Create an example page, where the module can be tested on
            o Input fields for header & body section
            o Category selector
            o Button to simulate the notification

    Minimal Requirements for Application
        ● The back-end should be implemented in JavaScript using the NodeJs Express framework.
        ● The user should be able to create a profile and login to the application.
        ● The user profiles should be persistent in some form of database.
        ● The front-end should be implemented in Angular.
        ● The notification module should display the notifications as overlay in front of the page.
        ● The notifications shouldn't interrupt the user - they should be displayed in an area where the user notices the messages, but does not lose the focus on his work.
        ● The notifications should have a header and a body.
        ● The notification module should support three different notification categories: "info", "warning" and "error"
        ● The notifications should have a different appearance based on the categories.
        ● The notifications should be closable.
        ● Test
            o Write unit tests to check the functionality of your application. Reduce the test cases to the main services/controllers. Ensure that the test coverage within these is about 80%. Try to use test tools/runners like Jasmine and Karma.
        ● All the design decisions/explanatory parts of the solution should be part of a "README.md" file on the GitHub
        project. This should be a private repository that is shared only with ‘xgrid-all’ user as a contributor.

    Other Requirements (Design Decisions)
        ● The notifications with the category "info" should be closed automatically after 90 seconds.
        ● The notification module should display max 5 notifications at the same time.
        ● If the max amount of notifications is reached, the notification module should combine the oldest notification into
        one group, thus the max amount is satisfied again.
        ● Documentation
            o Document the resulting module/code with your favorite documentation generator/tool. Try to document the code as good as possible, thus other developers might be able to work on your code too.
        ● Travis CI / Circle CI integration. (Optional, works as a plus point)
        ● Dockerization of your application and a link of your application image on Docker Hub. (Optional, works as a plus point)
