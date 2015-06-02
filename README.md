# zhub-info-business-card
Copyright 2015 Rex Addiscentis

http://zhub.info

http://addiscent.com

This project started as a technical study of how to do a "fade" of page
elements.  There is more than one way to do that.  The fades on this
website page are accomplished using JQuery.

After learning to do that, the project evolved into something else,
as projects often do.  It then became a study of how to make a page responsive.
This web site is made responsive and mobile-friendly by using @media queries.

Now, zhub.info is a simple one-page web site for basic "web presence".
The zhub.info web site is the Internet equivalent of handing a business card to
someone.  It's purpose is simply to give the recipient your name, what you do,
how to contact you, and an optional menu item for click-through to another web
site.

You may use this web site as a template, and modify it for your own use.  To use
it: download it, install it onto your web server, modify its content to
customize as desired, enjoy.  As an example, doing straightforward text content
changes and a background image change is all that is necessary to convert the
zhub.info site for personalized use by Ian Hofmann-Hicks,
http://ian-hofmann-hicks.zhub.info.

There are no elaborate services required of your web server, only the ability
to deliver HTML/CSS/JS files and related asset files.  The browser requirements
are basic as well: HTML5/CSS3/Javascript/JQuery. However, if proxies in your
network prevent Internet access to CDN servers, e.g., for font files, those
fonts or other content likewise may not render on the web page as desired.

Before customizing, establish a good development baseline by generating a
working installation.

Installation, (the short form):

  1.  Download the release version zip file of this project.
  2.  Unzip the files (keep sub-directory structure) somewhere into your
      public_html or /var/www or equivalent HTTP server's document root.
      Unless you already know that it won't be a problem, you probably should
      not root it directly into your HTTP server's doc root; put it in a
      sub-dir by itself so it doesn't conflict with other existing/future web
      sites files.
  3.  Point your domain/sub-domain name, (or IP address), at the root directory
      of your new web site.
  4.  Verify successful installation.  It should view as at http://zhub.info.
      If so, you are now finished with basic installation, and you can proceed
      to customization.

To customize:

  5.  Edit the index.html file for content; search for locations tagged "CEP",
      (common edit points), and change that content to what you wish, to show
      your name, about you, your contact info, etc.
  6.  Optionally, replace the "background.jpg" file in the assets subdir with
      one of your choice.  There are many nice high resolution photos available
      on the web, free, "as in beer", and free, "as in speech".  As a starting
      point, many "free" photos are available at https://stocksnap.io/.
  7.  If you do not wish to use the menu item which allows navigation to a web
      site, simply remove that related code in the index.html file.

If you have any comments or questions, you may contact
Rex Addiscentis, raddiscentis@addiscent.com.
