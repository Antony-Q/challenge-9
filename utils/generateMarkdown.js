function renderLicenseBadge(license) {
  let licenseType = license.license;
  let yourLicense = ''
  if (licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    license.license = "N/A"
  }
  return yourLicense;
};

const generateMarkdown = data => {

  return `# ${data.title}

    ## license
    ${data.license}
  
    ## Description 
    ${data.description}
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## Installation 
    ${data.installation}
    
    ## Usage 
    ${data.usage}
   
    ## Contributors 
    ${data.contributors}
    
    ## Tests
    ${data.tests}

    ## How to Contribute
    ${data.contributing}
    
    ## Questions
    If you have any questions about this project, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
  `;
};


// use for importing Markdown in index 
module.exports = generateMarkdown;