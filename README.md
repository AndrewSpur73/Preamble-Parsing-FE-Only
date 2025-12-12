This app allow users to enter any text they please (including the United States Preamble) and invoke a counting function by clicking on an analyze button. This counting function returns a count of how many words begin with 't', how many end with 'e', and how many begin with 't' and end with 'e'. The results will appear below the box and re-render every time the button is clicked. This app is deployed on Netlify and can be accessed by anyone. 


https://github.com/AndrewSpur73/Preamble-Parsing-FE-Only.git
https://preambleparsing.netlify.app/


Some of the issues I ran into include the following: 
- I originally forked the template from GitHub and forgot to change the file name. I had to change the name on GitHub, then go back into my GitBash and update the GitHub pull/push origin within the file.
- I was struggling to think of all possibilities so I utilized ChatGPT to cover all possible conversions that a user may input into the text box so that an error does not occur.
- I initially was trying to utilize a simple "for Loop", but realized React was not happy with it. I updated it to a .forEach array method to loop through every word in the text box.
- I went back and forth with how much CSS/HTML I wanted to change, but decided in the end to keep it clean and simple and allow my code to shine.
- I coded a few changes on main after being thrown off by creating a single page application for the first time in a while.
