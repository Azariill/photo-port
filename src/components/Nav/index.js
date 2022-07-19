import React from 'react';

// these will be the different headings for the webpage navigation
const categories = [
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ];

  function categorySelected(name) {
    console.log(`${name} clicked`)
  }

  // returns navigation bar code
function Nav(){
    return(
        <header>
        <h2>
            <a data-testid="link" href="/">
                <span role="img" aria-label="camera"> 📸</span> Oh Snap!
            </a>
        </h2>
    {/*  This is the main components of nav bar */}
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a data-testid="about" href="#about">
                About me
              </a>
            </li>
            <li>
              <span>Contact</span>
            </li>
        {/*  This is the nav buttons getting mapped out */}
            {categories.map((category) => (
              <li className="mx-1" key={category.name}> <span onClick={() => categorySelected(category.name)} >{category.name}</span></li>
            ))}
          </ul>
        </nav>
      </header>
    );
};

export default Nav;