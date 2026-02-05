I first chose the refrain I wanted to hear which was 
"Come, Butterfly  
It's late-  
We've miles to go together"

And then used the code we were taught in class,to have a voice that my computer generates say the haiku. The code mentioned can be found below: [https://github.com/rdwrome/261sp26/tree/4365a91fa74d248b791078e55c4022f0bdc53b6d/01Git%26Shell#code-along-1]

I inputted the code into Terminal, however my line looked like this:

'say -v "Samantha" "Come, Butterfly. Its late. We've Miles to go together." -o Haiku.aiff'

However for the assignment I knew I needed to generate this file in my Haiku folder of my github repository.
I needed to change the location of where my file was generated.
Since I went into terminal and did not change my directory level, I should be navigating through my hard drive at the moment, to check this I search my computer for Haiku.aiff, the file i just made.
I actually found it there but more specifically in the Users Folder under my User folder.
I then use another command we were taught in class 'cd', which can be found here:

[https://github.com/rdwrome/261sp26/tree/4365a91fa74d248b791078e55c4022f0bdc53b6d/01Git%26Shell#command-line] 

to change my directory to the Haiku folder found in my github repository.
In order to do this I input the command and then I drag my folder into terminal, resulting in a line of code looking like:

'cd /Users/diego-brown/Documents/GitHub/ITP/Haiku' 

After seeing my directory change into Haiku, I retyped the sequence to generate the file

'say -v "Samantha" "Come, Butterfly. Its late. We've Miles to go together." -o Haiku For HW.aiff'

I check to see if my repository was updated, which I see that it had, and although my intent was to change the name, it actually gave the file a nice little 'for HW' at the end which made sure I differentiated it from the file generated pre changing directory.

I saved and pushed the updates to the origin and the Haiku now shows up in the folder in my repository.