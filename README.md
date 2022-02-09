### Yardzen Budget Calculator

## Thought process
While building this calculator, my main goals were to:

*-build excellent UI design*

*-use modular, reusable components*

*-comment on my code explaining my thought process and choices*


I started by creating my React app and trying to connect to Firebase. Since I had not using Firebase before, this is what I was the most concerned about. After lots of Google-ing to see how other people had connected to their Firebase, I decided that I must be struggling because I was unable to view the databse myself. (This is usually something that helps me a lot as I am a very visual learner.)

**Instead of spending too much time on this**, I decided to work on creating my React app. I knew I wanted components so I created components called:
- **Header**
- **Budget** *(users enter their budget here and that number gets sent back to the parent, App.js)*
    - This updates onChange instead of onSubmit, which I might have changed to make it a little nicer for UI.
    - I tried using preventDefault() to stop it from updating if the user pressed Enter after inputting the budget, I would have fixed this or changed this around if I had more time to spend on this project.
- **ItemsList** *(A list of items are displayed here, users can select the high or low (or both) prices of each item. This gets sent back to the parent, App.js)*
    - This list is rendered on load, but starts off disabled until the user has entered a number for their budget.
    - Since I had trouble with Firebase, I created a mock local JSON file using the item format described in the task description:
    ```
    "items" collection interface
    Each document in the collection looks like this:
    interface Item {
        type: string;
        name: string;
        lowPrice: number;
        highPrice: number;
    }
    ```
- **BudgetBar** *(I thought it would be cool to create a 'progress bar'-esque component to show users how much of their budget they had left and to let them know once they had gone over-budget)*
    - This updates whenever the user updates their budget or their item selections.
    - If over-budget, the progress bar turns red and the text changes from telling the user how much they have left in their budget to telling the user how far over-budget they are.



## What I would have done differently or improved on:

- The task asked to give an estimated price **range** of the items selected, however I just allowed users to choose between low and high price. While thinking about this and planning my code, I wasn't entirely sure how this would look (especially since I was unable to accses the database), so I went with checkboxes of low and high prices.
In a different setting **I would have asked teammates/team leads exactly what they wanted regarding this aspect of the calculator** *(can the user choose from every item available? Should there be a scale? Should the calculator show two numbers: the sum of all lowest prices of selected items and the sum of all highest prices of selected items?)*

- I would have **grouped the lists by type** somehow, as requested in the instructions. I was struggling to figure out the best way to map by type, and I also wasn't sure how the data in Firebase was categorized. Originally I thought of creating an array, adding item.type if it wasn't already in the array, and rendering the item under a subtitle called (item.type), however I thought this would get messy if the data wasn't already categorized by type.

- I did not get a chance to write formal tests. I am relatively new to TDD and have not written tests for React before, but the tests I would have written were:
    -To make sure that the budget inputed by the user was:
        -in fact an integer opposed to text or symbols
        -handle it better if the user input a decimal (ex: $1099.99) *(currently the code rounds the number to a whole dollar amount if there is a decimal)*
    -To make sure that the user really did want to choose both the low-priced option and the high-priced option (if they checked both boxes)
    -Test the budget bar to make sure it was always correct
    -Test the budget and total cost prices to make sure they are always accurate
