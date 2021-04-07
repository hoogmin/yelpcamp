# YelpCamp
## *An app for posting, reviewing, and sharing campgrounds*

This repository is my own version of the YelpCamp web application.
I would like to credit [Colt Steele](https://github.com/Colt) for being
the origin of the idea for this app. This version of YelpCamp was completely
written from scratch by me and I learned a lot from it. This version of the
application is not an exact one-to-one replica of what is in the course. The
below points should be noted:

1. Many variables/functions/etc are named differently for easier understanding or just my own preference. For example, using
Joi I prefixed my shemas with `joivalid` to more easily distinguish them from my mongoose schemas.
2. This application relies on environment variables for third-party services, such as mapbox. You will need
to provide your own credentials for `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_KEY`, `CLOUDINARY_SECRET`, and `MAPBOX_TOKEN` 
in a local file named `.env`.
3. I didn't implement additonal deployment related code since I wasn't planning on hosting it anywhere, so this version is only meant to run locally (localhost).
4. While this is a fully functional web app, it is important to remember that it is unpolished and still contains many bugs that have yet to be fixed (and probably won't be).
5. This app uses MongoDB so you will need to have it installed for the application to work properly.

All in all, this project took me a couple weeks at my pace. I used many resources to
complete this project with the primary one being Colt Steele's course. Strangely enough, despite following the tutorial pretty
closely, I still encountered strange errors that were never shown and so I had to fix them. If there was one thing I got from
this experience, its that when it comes to errors/bugs it is always the small things that get you! This is all I have to say
here. Thanks for checking out this repository and thank you to [Colt Steele](https://github.com/Colt) for his resources.

# License
ISC License, see `LICENSE` file for details