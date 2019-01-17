# Purchase Summary Mockup

## How to run app

* From CLI :
  * Make sure Expo CLI tool is installed locally (npm install expo-cli)
  * Clone Git repository (https://github.com/connorpmullins/purchase_summary)
  * run npm install to make sure all dependencies are installed locally
  * run the command 'expo start' from your CLI
    * Note: You can optionally specify '--ios' or '--android' after expo start commmand.

* From Snack :
  * we'll see. Not sure yet.


## Requirements
* Key UI elements:
  * The “Pickup savings” tooltip
  * The “See Item details” expander
  * The “Apply Promo code” expander
  * The user should be able to enter a promo code “DISCOUNT” and on applying it, see a 10% discount reflect in the purchase summary. Use Redux for this.
  * Please refrain from using existing react components out there to help building this (bootstrap etc.). For the pricing data, you can hard code it to an object/json and read from it.
  * If using React web - build your UI on CodeSandbox: https://codesandbox.io/s/new and share the URL when ready
  * Feel free to use your own workflow too if easier and upload your project files to a GitHub repo along with instructions for loading it up and testing on my end.
  * If using React native – Feel free to use your own workflow and share the Github url for the project along with instructions for loading it up and testing on my end.
  * I have heard https://snack.expo.io/ is another good option too (similar to codesandbox)
  * Reusability of component is a key factor to consider. You’ll be evaluated based on code correctness and quality.
  * You can reproduce this interface by going to walmart.com and adding this chair to Cart and going to Checkout page. You don’t have to go through with the order to see this UI.
  * If you choose “Pickup” option in Checkout, you’ll see the “Pickup Savings” tooltip on the right as well.
  * For the “See Item details” item image - feel free to use the images on the Walmart.com (or) any placeholder image.
  * Clicking on “See Item Details” toggles open/close all the items’ details (not individually)
* Bonus Points
  * If the UI is responsive and works fine across different resolutions (mobile/desktop - scaling by % of page width). You can ignore this if using React Native.
  * If there are unit tests for components with interactions.
