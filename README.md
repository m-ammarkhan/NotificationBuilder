# NotificationBuilder
 This design task was assigned in the second week of my internship. Following are the requirnments of this task:

# Requirnments
    Created a standalone prototype based on Angular, HTML and CSS. Write a simple SPA where the notification module is included and can be tested in. The prototype is based on:
        ● Package/Dependency managers (NPM).

    The prototype includes the following concepts/features:
        ● Observables & RxJS 

    The following user stories were kept in account during the development:
        ● Create a basic notification module
        ● Create a login and register page for the User.
        ● Create a dashboard page which will list all the notifications of the logged-in User.
            o User can be able to Edit/Delete the notifications.
        ● Create an example page, where the module can be tested on
            o Input fields for header & body section
            o Category selector
            o Button to simulate the notification

    Minimal Requirements for Application
        ● The back-end is implemented in JavaScript using the NodeJs Express framework. (Completed)
        ● The user is able to create a profile and login to the application. (Completed)
        ● The user profiles is persistent in some form of database. (Completed)
        ● The front-end is implemented in Angular. (Completed)
        ● The notification module is displing the notifications as overlay in front of the page. (Completed)
        ● The notifications is not interrupting the user - they should be displayed in an area where the user notices the messages, but does not lose the focus on his work.
        ● The notifications does have a header and a body. (Completed)
        ● The notification module is supporting three different notification categories: "info", "warning" and "error" (Completed)
        ● The notifications does have a different appearance based on the categories. (Completed)
        ● The notifications is closable. (Completed)
        ● All the design decisions/explanatory parts of the solution is the part of a "README.md" file on the GitHub
        project. This is a private repository that is shared only with ‘xgrid-all’ user as a contributor. (Completed)

    Other Requirements (Design Decisions)
        ● The notifications with the category "info" is closing automatically after 90 seconds. (Completed)
        ● The notification module is displaying max 5 notifications at the same time. (Completed)
        ● If the max amount of notifications is reached, the notification module combines the oldest notification into
        one group, thus the max amount is satisfied again. (Completed)
        ● Documentation
            o Document the resulting module/code with your favorite documentation generator/tool. Try to document the code as good as possible, thus other developers might be able to work on your code too. (Completed)
        ● Travis CI / Circle CI integration. (Optional, works as a plus point)
        ● Dockerization of your application and a link of your application image on Docker Hub. (Optional, works as a plus point)
