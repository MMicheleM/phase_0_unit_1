#### Include an inline screenshot of your codeschool's points from the profile page:

  <img = "http://imgur.com/JbbhYHH" />





<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  
  * Realtime editing of HTML and CSS 

    The Elements tab/panel. For HTMl you can edit what appears on the left side of the interface (the DOM/tree structure.) For CSS you click on the element you're interested in modifying and then can manipulate the CSS in the right panel - editing either parent or child element as appropriate.   
  
  * Javascript Debugging 

    Use the Console tab/panel. Once you've isolated the error then the Source tab/panel comes into play. Clicking the script in the Console will open it in the Source tab and allow you to evaluate it with the use of the pause, continue and step-in/out of current function buttons. Which is also where you can deactivate breakpoints and pause on exceptions. [All of this quickly reached a point where I was a bit lost on the scripting chat but I think I have a decent foundational understanding on the nuts and bolts of the tools for debugging.]
  

  * Performance Optimization 
    
    You'd want to look at the Network tab/panel to see the various resources that are requested/downloaded and then identify any that are taking longer than expected. The Audits tab/panel lets you "Reload Page and Audit on Load" giving you good actionable items (e.g. Optimize order of styles and scripts, put CSS in document head, Remove unused CSS rules, etc.) You'd also go to the Timeline tab/panel and record/analyze your site/page/application - which gives you rendering performance results. You have sub-nav for Events, Frames and Memory to help guide you in optimization. After determining the cause(s) of your slowdown you then use the Profile section (at which point I get a bit lost and would need more experience with the tool to be able to further explain any of it.)
 

* What's the quick key for your OS to spawn the Dev Tools inspector?
  
    Command+Option+I


* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
  
    #0B0F11

  * Tweak the background color to white.
  
    Changed color in html element to #FFFFFF (body inherits)

  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  
    At first I added a height tag under width in sidebar ID which did not seem to change anything.  Originally did not change height of logo itself as that's not how I read the directive. But when I saw the same screenshot (two items below this one) I realized that the intent was to change the piece with the logo image and so went back and changed it from 115px to 85px.

  * Roll over the navigation links.  When you hover over them, they disappear.  Let's change the hover color to black instead.
  
    Clicked the hover box to force the state and changed value from #FFF to #000000

  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
    
    Command+Shift+3 (plus maximized browser) = active browser (or Command+Shift+4 gives you camera and you can select what you what to capture in 
    screenshot.)

  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)
  
    <img src="http://imgur.com/83WymRZ" />


* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
  
    Because the text is actually part of an image (http://www.postmachina.com/images/home_bg.gif) even though it also appears in the HTML. What I can't explain is why you'd bother putting the text in the HTML paragraph tags. But the dead giveaway is that the rest of the text doesn't appear within the paragraph tags.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 

      Largest image (on the page) is a picture of NY's Broadway that's in rotation in the featured events section of the front page. 

  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
  
      You'd find it by going to the Network tab/panel, loading page, filtering for images and sorting by size (or just sorting on size and finding largest image.)  http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png - it's 316KB


* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?
      
      Optimize the images. Would reduce size by 885.9KB (or a 39% reduction)


