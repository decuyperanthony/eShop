<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <!-- <img src="https://i.pinimg.com/originals/53/8d/cf/538dcf36d870ccf8853eda04b4461cc6.png" alt="Logo" width="auto" height="150"> -->
    <!-- <img src=".github/img/logo.png" alt="Logo" width="80" height="80"> -->
  </a>

  <h3 align="center">EShop Backend and Client</h3>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project


### Built With

* [Node](https://nodejs.org/dist/latest-v12.x/docs/api/)
* [React](https://fr.reactjs.org/)
* [Redux](https://redux.js.org/)
* [Express](https://expressjs.com/fr/)
* [Postgres](https://www.postgresql.org/)
* [Sqitch](https://sqitch.org/) => migration database
* [React Boostrap](https://react-bootstrap.github.io/)




<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* node
* yarn

### Installation

1. Clone the repo
```sh
git clone https://github.com/decuyperanthony/eShop
```

2. Database
```sh
database : Postgres
name : "yourName"
```
3. Migration database
```sh
cd server/migration
```
- insert your database name in sqitch.conf
```sh
sqitch deploy
```
4. To init server
```sh
cd server
cp .env.example .env
npm install
npm start
```
5. To init client
```sh
cd client
yarn
yarn start
```



<!-- CONTRIBUTING -->
## Contributing
really ? :)



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Anthony de Cuyper - [linkedin](https://www.linkedin.com/in/anthony-de-cuyper/) - decuyperanthony@gmail.com

Project Link: [https://github.com/decuyperanthony/eShop](https://github.com/decuyperanthony/eShop)