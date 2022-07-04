# API

The goal of this challenge is to check test automation skills in RestApi. The idea is the candidate can create automated tests for Rest requests using any test automation framework (MochaJs, PostMan, SoapUI, etc). 

## Table of Contents
- [Project](#project)
- [Getting Started](#installation)
  * [Prerequisites](#prerequisites)
  * [Project Setup](#install-project)
  * [Start Mock Server](#run-server)
- [Documentation of the mock server](#documentation)
  * [Get Books](#get-books)
    - [Filters](#filters)
    - [Sort](#sort)
    - [Operators](#operators)
  * [Get Books by ID](#get-byid")
  * [Create a new book](#post-book)
  * [Delete a book](#delete-book)
  * [Update a book](#update-book)
- [API Exercises](#api-exercises)
  * User Story Information
  * Exercises

## <a name="project">Project</a>

It is a full fake REST API that allows you to handle a list of books in memory. It has some books by default and you can also add, delete, update and list new books calling REST requests. All changes are persisted in memory until the server is restarted. It is using the node library [json-server](https://www.npmjs.com/package/json-server).


## <a name="installation">Getting Started</a>

### <a name="prerequisites">Prerequisites</a>

Required

* NodeJS 12 or higher
* Yarn

### <a name="install-project">Project Setup</a>
Use the package manager [yarn](https://phttps://yarnpkg.com/) to install the mock server.

```bash
yarn install
```

### <a name="#run-server">Start Mock Server</a>

```bash
yarn run-mockserver
```

You can open and browser and go to http://localhost:3001 to check that server is online. There is information about available resources.

## <a name="#documentation"> Documentation of the mock server</a>

#### <a name="get-books">Get Books: Retrieves all books</a>

``` GET {baseURL}/books ```

**Request**
* Headers
  - Content-Type: application/json

**Response**
* Status Code: 200
* Body: Array of Books. Below is an example:

```bash
[
  {
    "id": "1",
    "title": "The Complete Poetry Of Edgar Allan Poe",
    "format": "Paperback",
    "author": "Edgar Allan Poe",
    "language": "English",
    "pubYear": "1810",
    "description": "Explore the transcendent world of unity and ultimate beauty in Edgar Allan Poe's verse in this complete poetry collection.
    Although best known for his short stories, Edgar Allan Poe was by nature and choice a poet. From his exquisite lyric 'To Helen,'
    to his immortal masterpieces, 'Annabel Lee,' 'The Bells,' and 'The Raven,' Poe stands beside the celebrated English romantic poets Shelley,
    Byron, and Keats, and his haunting, sensuous poetic vision profoundly influenced the Victorian giants Swinburne, Tennyson, and Rossetti.
    Today his dark side speaks eloquently to contemporary readers in poems such as 'The Haunted Palace' and 'The Conqueror Worm,' with their
    powerful images of madness and the macabre. But even at the end of his life, Poe reached out to his art for comfort and courage,
    giving us in 'El dorado' a talisman to hold during our darkest moments--a timeless gift from a great American writer.",
    "rating": 3
  },
  {
    "id": "12",
    "title": "Fahrenheit 451",
    "format": "Paperback",
    "author": "Ray Bradbury",
    "language": "English",
    "pubYear": "1960",
    "description": "Guy Montag is a fireman. In his world, where television rules and literature is on the brink of extinction, firemen start fires rather than put them out. His job is 
     to destroy the most illegal of commodities, the printed book, along with the houses in which they are hidden. Montag never questions the destruction and ruin his actions produce,
     returning each day to his bland life and wife, Mildred, who spends all day with her television 'family.' But then he meets an eccentric young neighbor, Clarisse, who introduces him
     to a past where people didn’t live in fear and to a present where one sees the world through the ideas in books instead of the mindless chatter of television. When Mildred attempts
     suicide and Clarisse suddenly disappears, Montag begins to question everything he has ever known. He starts hiding books in his home, and when his pilfering is discovered, the
     fireman has to run for his life.",
    "rating": 4
   }
]
```

##### <a name="filters">Filters</a>

It has support to filter by any attribute of the object book. The filter has to be passed in the query string with the format **<key=value>** and it can filter using more than one attribute. 

The string search could be with a full-text or partial-text. For example:
* ```title=Fahrenheit 451```. It will retrieve all books with this exact value.
* ```title_like=Fahre```. It will retrieve all books that title starts with the value.

##### <a name="sort">Sort</a>

By default it will retrieve all objects without a specific order. It has support to sort the result passing **_sort=<attributeName>** and **_order=<value>** (ascending order by default) in the query string. For example:

Descending Order by rating: ```_sort=rating&_order=desc```

##### <a name="operators">Operators</a>

It has support to retrieve results between a range adding the operators  **_gte** (greater than or equal to) and **_lte** (less than or equal to) in attribute name.
For example: Retrieve all books with the rating is between 4 and 5 ```rating_gte=4&rating_lte=5```

#### <a name="get-byid">Get Book by ID: Retrieves a book by ID</a>
``` GET → {baseURL}/books/{id} ```

**Request**
* Headers
  - Content-Type: application/json

**Response**
* Status Code: 200
* Body: Book object. Below is an example:

```
{
    "id": "12",
    "title": "Fahrenheit 451",
    "format": "Paperback",
    "author": "Ray Bradbury",
    "language": "English",
    "pubYear": "1960",
    "description": "Guy Montag is a fireman. In his world, where television rules and literature is on the brink of extinction, firemen start fires rather than put them out. His job is 
     to destroy the most illegal of commodities, the printed book, along with the houses in which they are hidden. Montag never questions the destruction and ruin his actions produce,
     returning each day to his bland life and wife, Mildred, who spends all day with her television 'family.' But then he meets an eccentric young neighbor, Clarisse, who introduces him
     to a past where people didn’t live in fear and to a present where one sees the world through the ideas in books instead of the mindless chatter of television. When Mildred attempts
     suicide and Clarisse suddenly disappears, Montag begins to question everything he has ever known. He starts hiding books in his home, and when his pilfering is discovered, the
     fireman has to run for his life.",
    "rating": 4
 }
 ```

#### <a name="post-book">Create a new book</a>
``` POST → {baseURL}/books ```

**Request**
* Headers
  - Content-Type: application/json

* Request JSON Object Detail

| Parameters     | Type     | Description                 | Required |
| -------------- | -------- | --------------------------- | :-------:|
| id             | String   | Number or UUID              | N        | 
| title          | String   | Title                       | N        |
| format         | String   | Paperback, eBook, Hardback  | N        |
| author         | String   | Author Name                 | N        |
| language       | String   | English, Spanish            | N        |
| pubYear        | String   | Publication Year            | N        |
| description    | String   | Description                 | N        |
| rating         | Number   | Rating  (1 to 5)            | N        |

**Response**
* Status Code: 201
* Body: The book object stored

*Note 1: it validates that ID is not duplicated.*
*Note 2: it generates a random ID if it is not in the payload*

#### <a name="delete-book">Delete a book</a>
``` DELETE → {baseURL}/books/{id} ```

**Request**
* Headers
  - Content-Type: application/json

**Response**
* Status Code: 200
* Body: Empty object {}


#### <a name="update-book">Update a book</a>
``` PATCH  → {baseURL}/books/{id} ```

**Request**
* Headers
  - Content-Type: application/json

* Request JSON Object Detail

| Parameters     | Type     | Description                 | Required |
| -------------- | -------- | --------------------------- | :-------:|
| title          | String   | Title                       | N        |
| format         | String   | Paperback, eBook, Hardback  | N        |
| author         | String   | Author Name                 | N        |
| language       | String   | English, Spanish            | N        |
| pubYear        | String   | Publication Year            | N        |
| description    | String   | Description                 | N        |
| rating         | Number   | Rating  (1 to 5)            | N        |

**Response**
* Status Code: 200
* Body: The book object updated


## <a name="api-exercises">API Exercises</a>

### User Story

```text
As a user, I want to administrate my online bookshelf. The system has to have support to keep updated the information
related to books like title, format, author, language, description, publication year and rating. It must allow to insert,
delete and update book information.
It's also required to list books using some filters like title, format, etc.
```

#### Exercises
Do the following exercises using the description of the user story and the API documentation previously mentioned

1) Create a new text file and list all test cases that you would execute to test the story.
2) Prioritize and choose some candidates to be automated.

Below is an example of how you could list yours test cases.

| Test Name    | Description           | Priority |
| ------------ | --------------------- | -------- |
| Test Name    | Description of story. | Priority |


3) Create automated test selected in previous step. You should automate at least the high priority test cases.
4) Create a PR with your changes.

**Remember that you can choose any tool to automate your test cases but don't forget to add all information needed to execute them.**

Tips
* Follow the recommended best practices for the tool you have chosen.
* Consider your code as production code. 
* Be sure that all automated tests are executed without errors.
