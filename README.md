# Amazon Clone

For this project, I wanted to challenge myself and attempt to design a cloned version of the amazon store using React. This was quite a learning curve, but I was able to pull off something good and have added it here. For this react app, I start off with a header and home components. The header has the amazon logo for a click back to the homepage, a searchbar, a way for the user to create an account and sign in, and a shopping basket with a responsive number representing the current items in the basket. The homepage has purchasable items to be able to add to the user's shopping cart with a simple 'Add To Basket' button.

After the user is ready to checkout, they can click the basket icon in the header where they will be taken to a checkout page displaying the items they've chosen, a sum calculation of the number of items as well as the total cost, and a button to proceed to a payment page. The user can also remove items from their basket if they change their mind on an item or two. 

On the payment page, it displays their list of items like before with a section at the top with an address and at the bottom to input card information. 

Once the card information is typed in and the user clicks 'Buy Now', their payment will be processed and the user will be taken to the orders page where their purchase will be displayed like an invoice.

![](https://github.com/MarkMadness/AmazonClone-react/blob/main/showcase/showcase1.jpg)
![](https://github.com/MarkMadness/AmazonClone-react/blob/main/showcase/showcase2.jpg)

## Home and Header Components

The Header component will be present on almost every page of this application so the amazon logo has a click event to take the user back to the homepage and the basket icon has a click event to take the user to the checkout page. It also has a click event for the user to sign in and create an account.

The Home component has a background of a typical amazon design image with a linear fade downwards towards the Product components displaying the items available for purchase. Each Product component has its own input on title, rating, image, and come with an 'Add to Basket' button which triggers a backend function with firebase to add them to a data layer for the basket.

![](https://github.com/MarkMadness/AmazonClone-react/blob/main/showcase/showcase6.jpg)

The SignIn Component uses user authentication from react and firebase for the user to first create an account with an email and password. Once they do, they will return back to the homepage with the Sign In button on the header changed to say "Hello, 'user email'".

## Checkout and CheckoutProduct Components

![](https://github.com/MarkMadness/AmazonClone-react/blob/main/showcase/showcase3.jpg)

## Payment Component

![](https://github.com/MarkMadness/AmazonClone-react/blob/main/showcase/showcase4.jpg)

## Order Component

![](https://github.com/MarkMadness/AmazonClone-react/blob/main/showcase/showcase5.jpg)
