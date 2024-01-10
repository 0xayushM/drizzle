function makeActive(index) {
    var cards = document.getElementsByClassName('card');

    // Remove 'active' class from all cards
    for (var i = 0; i < cards.length; i++) {
      cards[i].classList.remove('active');
    }

    // Add 'active' class to the clicked card
    cards[index].classList.add('active');
  }

  function showData(buttonNumber) {
    // Update data based on the button clicked
    var dataDrizzle;
    var dataSizzle;
    switch (buttonNumber) {
      case 1:
        dataDrizzle = "Extra Virgin finishing oil made from olives that are picked early, when flavor is bold and antioxidants are highest. Made for eating, never heating.";
        dataSizzle = "Extra Virgin cooking oil made from mature, mid-season olives that yield a more mellow flavor. Use it every day, in every way.";
        break;
      case 2:
        dataDrizzle = "Harvested in October, before the olives have ripened fully. Picked by hand because young olives need a firm yank to loosen up.";
        dataSizzle = "Harvested in November and December, when the olives are more mature. They’re pretty laid back by this point, so it only takes a few shakes to get them off the branch.";
        break;
      case 3:
        dataDrizzle = "A little Drizzle goes a long way! Use it on and around things like ice cream, pesto, popcorn, salads, sandwiches or even directly on your tongue (we won’t tell).";
        dataSizzle = "If you would put it in or on top of an oven, use sizzle. Chicken Cutlets, Sheet Pan Veggies, Fried Rice, or even Chocolate Chip Cookies! You name it, Sizzle sizzles it.";
        break;
      default:
        dataDrizzle = "No data available";
        dataSizzle = "No data available";
    }

    // Update data display
    document.getElementById('dataDrizzle').innerText = dataDrizzle;
    document.getElementById('dataSizzle').innerText = dataSizzle;

    // Remove 'active' class from all buttons
    var buttons = document.getElementsByClassName('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }

    // Add 'active' class to the clicked button
    var activeButton = document.getElementsByClassName('button')[buttonNumber - 1];
    activeButton.classList.add('active');
  }