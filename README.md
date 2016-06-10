### Website Performance Optimization###

As part of Udacity's Front-End Web Developer Nanodegree, a website was provided with a range of performance related issues. The inefficient application's JavaScript, CSS, and asset delivery was optimised (sometimes with the help of Gulp) leading it to achieve a PageSpeed score of 95 for mobile and 97 for desktop. Simply by opening `index.html` in the root directory we can run the application containing the links to various other webpages including `pizza.html` which initially suffered from inefficiencies in browser rendering. In `views/js/main.js`, the following changes were made to produce a consistent 60FPS for scrolling and less than 5ms time to change pizza sizes:

#### First: Scrolling

First, the updatePositions function creates visual changes so where it is called on line 525 and 544, we have added a requestAnimationFrame so that it is run at the optimal time.

Second, on line 533 we have reduced the number of `<img>` elements representing moving Pizzas to append to the DOM from 200 to 25, you only need so many to fill the screen.

Third, in relation to the actual UpdatePositions function starting on line 495, instead of accessing the DOM every time we call it, we created a global array referenced to elements with class 'mover' outside of it. We refactored some of the code involving calculating the scrollTop because that only needs to be done once rather than in a loop. We also separated our layout reads and style changes to avoid the risk of FSL.

Fourth, in `views/css/style.css` we have made changes to the styling rules applying to elements with class 'mover', so that they are on their own composite layer and reducing the paint work each frame.

#### Second: Resize Pizzas

First, we are always accessing the element with class 'randomPizzaContainer' so on line 441 we called it just once and stored it in a variable.

Second, a series of layout reads were done in the loop on line 445, these only need to be done once since the size of the Pizzas are the same, so this was refactored.

Third, the calculate dx function is convoluted and unnecessary; we refactored this so that the size is calculated solely using the SizeSwitcher function.

#### How to Test

1. Run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights.