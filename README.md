# The Affair Manager

This repo contains code for a command-line application to manage events (called "affairs" in the code), created as part of an assignment for CSCI 4602 at Austin Peay State University.

The below questions should be answered _in detail_ regarding your submission!

##### Reflect on how you determined the architecture of your application. What process did you use to determine which classes to define? #####
> I determined the architecture by trying to see the return values of modules. Based on the requirements I wanted to create a Member, Organization, and Affairs class to encapsulate certain data. This lead to some issues when trying to do queries because I wasn't properly returning string arrays. Overall, if I spent more time on this assignment I could get it function. 

Something that do not work at the modification methods (bugs out on trying to change a title) & the query functoin doesn't work. You can enter a blank query and it returns a whole list, also you can enter an unreleated query (i.g. query for a affair in organization list) and it still returns the whole list. I need to spend more time learning RegExp to better solve this problem.

Also, I included hidden functions (optoins 10, 11, 12) to display registered members, affairs, and organizatoins in the AffairManager class -- this allows us to check all members that are not in affairs, affairs that aren't in orgs, and all registered orgs. 


##### Did you receive help from any other sources (classmates, etc)? If so, please list who (be specific!). #####
> Github Docs (SSH keygen for local). Youtube (TypeScript functions/classes). Node Docs. Typescript Docs. 


##### Approximately how many hours did it take you to complete this assignment? #####
> Roughly 3-4 hours coding. 2-3 hours debugging. 1-2 hours refactoring/trying to stick to better design principles. I can definitely improve in the DRY & Solid concepts if I had more time.


##### On a scale of 1 (too easy) to 10 (too challenging), how difficult was this assignment? #####
> 5 - Assignment wasn't necessarily hard. But being new to good architecture, I had some design questions I had to consider. More so, 
my first exposure to a "codebase" of an actual implemented module. 


##### Did you encounter any problems in this assignment we should warn students about in the future? How can we make the assignment better? #####
> I think there should be options to show all registerd members, affairs, and organizatoins in an AM. 

