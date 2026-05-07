##FINAL PROJECT DOCUMENTATION

##Building my portfolio Website!

https://diegobrown025.github.io/index.html

For my final project I decided to create a small portfolio website that I can edit and add to over time. 

For inspiration I used your Portfolio website as a baseline and opened the source code to each of the pages provided. And proceeded to see how things were layed out in order to more properly understand how I am going to approach building this website, and then after I proceeded to use Claude Ai to guide me through the process.

I first asked claude in a very straightforward way, How do I create a website in HTML to where it responded with a fat block of code that was copyable, as shown in screenshots 1-2.

I then asked claude to separate that ask into different steps, as seen in screenshots 3-8.

To avoid any hallucinations I communicated to the ai that I would be using TextMate to host my html and css files, although I messed up the first time and unfortunately had to ask again if there were any differences in steps, which it provided me the answer, as seen in screenshots 9-10

After this process I then asked the ai to go into detail on step 4, since that would include how I am actually building the website. The code it gave me was formatted differently than normal and did not have a referenced .css file, something I wanted to create in order to have more of a consistent form of controlling color and display. After I then asked the ai to go in depth on what each part of the .css file was doing since I could not remember well. The ai then went into each block of code, separating it and offering a basic explanation of what it did and how I could change things. As shown in screenshots 11-19. For screenshot 13 that is the first website I got after copying and pasting the original block of code into my Index.html document.

As shown in screenshot 19 I had some basic errors with display for the text and color for my website, so I promptly corrected them before moving on to the next main question I had. How to create more sections so that I could have a proper looking home page. I asked Claude to help me create more sections, since I knew I wanted some of my pages to have multiple sections and then claude provided me with what I needed to adjust on my .css and .html files, while explaining what each parameter did in a basic way, as shown in screenshots 20-25.

After this I mostly kept asking Claude Questions about formatting and Realigning my sections so that they will be on the left of the page (changing margin left from auto to -200px)Screenshots 26-27.

At this point my website looked like my Home Page without any picture. And At the current time the only Files I had in my Website folder were the index.html, styles.css and the picture I wanted to layer next to my text boxes, aptly named Photo for Cover.png.

Unfortunately I reset the Claude conversation after this point, fortunately the questions I did not document needed to be asked again. Because of this I inputted the code I had written straight into the website again and asked how I would format my website so that the picture I wanted displayed next to the section boxes I had made prior as shown in screenshots 28-31.

This was also the first time Claude gave me code that hallucinated, as I wanted to keep the offset of my sections, however Claude undid it with the /fix margins/ section. It attempted to override the offset which is something I did not want, everything else functioned how I wanted to. I also removed the sticky parameter, as I wanted my photo to remain in the same spot.

It was at this moment that I reached an odd hurdle in my work. Since I was running my website off of my computer files, whenever I wanted to add an image, under inspect, the webpage would respond with the error relating to url safety. I asked the AI a few different questions that lead me to no avail until Claude reached the conclusion that since I was sending my image file from my computer, that the webpage labeled it as unsafe and would refuse to load it. After this error was resolved by using python to open a local server. I now had a website that was hosted on a server. I dont exactly know what this did besides allow me to see my files more easily on my website before putting it public. As seen in screenshots 32-39.

I had one more persistent issue after this where my filenames were not matching and I was getting 404 issues. At this point I had more of a handle on how to fix graphical issues on my website so I stopped using ai. After refreshing I saw that my current photo was uploaded on the website. 

After this I wanted to ask Claude how I could link other pages to my Index.html, I wanted to create a nice method of navigation where in the spots that were already detailed on my <nav> code block. So I asked Claude how I could create a website with multiple pages, where it then navigated me to create whatever .html files I wanted for the other pages of my website. After, I then asked How I could create multiple .css files, where it then told me to make multiple .css files. Since I wanted the website to have a different looking layout for my different pages. As shown in screenshots 40-46
	
For each page, as shown in screenshot 43 I copied and pasted the same Html block, which gave me a nice blank website with my text shifted to the left which I quite enjoyed since it would be easy to edit. I also used styles.ccs as a starting point since I understood what each code block would do, I would plug in each part I wanted to display on each page.

Now that I was passed the main point of work with the Index site, I started work on the details for the rest of the websites. I wanted my about me page to consist of one section with text wrapping around an image I would put on the right of the section. Claude then gave me the response seen in screenshots 47-51.

I then manually typed the differences that Claude told me to take care of rather than copy and paste since I wanted to make sure I only fixed what I needed to. Because of this I left other mistakes in my code that I fixed much later in the process.

It was at this point I became fixated in how to fix my bullet points, since they became misaligned with the sections and were clipping outside of the sections, causing them to become cut off. I proceeded to ask multiple questions to Claude where I was not providing enough information about the issue. I first wanted to fix this issue in my Contacts page, before I realized I could copy the < ul > block of code in the .css file to make the the bullet points fixed. While doing this and trying to transfer it to other pages I found another issue where I was basically breaking my html. It took a solid few questions before I finally uploaded both my .css files and the .html file and Claude helped me figure out that I needed to restructure MANY DIFFERENT SYNTAX ERRORS I HAD CREATED BY NOT COPY PASTING THE CODE STRAIGHT FROM THE WEBSITE. I felt like I had seen "unresolved '< /p>'" or "unresolved < /ul >" which was not only causing me issues with my display and bulletpoints but also issues with spacing that I could not resolve yet either. This part of the process was really frustrating but Im glad I got over it because work was not done. As Shown in screenshots 52-53, 56, 66-76

Meanwhile this was happening I gave up and decided to begin my journey of embedding links into my website so that I would be able to have a portfolio section of my portfolio website. I wanted to add a youtube video, mp3, mp4 of my dj set, and soundcloud link so that I could fanagle with different embed styles. I also hadnt figured out how to properly allow someone to email me either, so I wanted that embed in there as well. I first started with asking how I could get someone to easily email me. The answers at this point were starting to look more similar to what I had originally seen on your portfolio website, so it was at this point I began to heavily cross reference and type in my own links. For the email though I had to ask 2 questions to get what I really wanted, as shown in screenshots 54-55. Where I used the code provided in the box to use someones webpage to write an email to me, since what I originally had done relied on people setting up their computers email. I dont want apple touching my emails so I couldnt test if my link worked. After this short success I went back to bulletpoint pain as shown by the screenshots earlier.

At this point my brain was working scattershot and I wanted to learn how to properly embed a youtube video, since while I was modeling my embed after the ones found on "ouvre". The main mistake I had made was making the wrong link the one to be pulling from, as I had used the share and not the embed link in order to pull the video. As seen in screenshots 57-59.

I wanted to see after if it was complicated to embed a soundcloud file, but then this was when I discovered that websites themselves had proper embed files for html!!! HELL YEAH. I still asked ai about formatting because I did not want to mess anything up in my most complicated page so far. Screenshot 60.

At this point I was satisfied with my soundcloud link, so I moved on to wanting to link a direct mp4 file to my website. I didnt want to upload this set to the internet archive, especially after seeing how long it took, so this aspect of the screenshots was me learning how to use the .png file itself to be what is being drawn from. I also took the code that it told me to input in to my .css file and it was styled properly for me, I liked the size of the video. I also learned how to make the video do different things, like autoplay and be muted. I didnt want that though. Screenshots 61-63.

For Screenshots 64-65 I see that what I asked was not part of the screenshots, For the questions i inputted, please refer to Screenshot I FORGOT and Screenshot I FORGOT 2 as it has what I inputted. I became frustrated that due to an inspected 404 error I could not see the video I had on my website. It was a naming issue. god.

After this part as referenced before with the screenshot numbers, I tried to fix what was the issue with the bulletpoints on my index file and my "quick contact" section. Screenshots 66-76.

##During some of the later taken AI screenshots my prompts became less clear, so sometimes 
##the answers will display that I need to clean up certain parts of my code. I did it later.
##those parts of the prompts will keep popping up
#im sorry

After this point I was basically done with my website as my contact website was done and I only needed to upload 2 things to be able to be pulled off of the internet. The "Unreleased" track I put on my portfolio and my .mp4 dj set. For my track it was easy to upload to the internet archive, and for my dj set video I had to use handbreak to make it small enough to upload unto github without having to force people to get the large file manager in github.

In order to make it display from the internet archive I just copy and pasted the embed I got from there into the section block of code I labeled "Untitled 06" until I changed it to not be overly referential to Kendrick.

After this point it was all about creating the repository that I named diegobrown025.github.io as to not generate any confusion. I then dragged and dropped my portfolio folder into the repository and besides the issue I found with my video not uploading initially, everything else was pretty much how I laid it out as a locally sourced website.

I did do one more mistake of changing my index.html file to be named home. To the dismay of my friends who wanted to see my website. I fixed it promptly. And after this my website runs smoothly on computer, although adjustments need to be made to make it run well on phone.

I learned a lot from the process of asking Claude what I had to do to make this website, and now that I had a little bit of time with it I've learned a lot about how to change how my website is designed, the links I have uploaded. After working for a few hours with this I feel I am also at a point to where I could add more on my own and continue to tweak my website, to make it look more professional and to make it a little bit more personalized. I went into this assignment unconfident in what I could do with my website, and I was pleasantly surprised by what I could do at the moment, even if it was mainly guided by a large language model.






