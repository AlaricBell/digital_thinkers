## Project Setup

First, Install the dependencies:

```bash
npm i
# or
yarn
```

Make sure your `.env` variables are set and run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**API routes** are prefixed with `/api/*` and can be accessed on [http://localhost:3000/api/drivers](http://localhost:3000/api/drivers).

## Approach

- ### Design

  My aim was to create an atomic design structure where each element can be reintroduced in different context.
  To achieve that I decided to use CSS in JS solution with [Styled Components](https://styled-components.com/), that allowed me to define each individual element for generic use-case like in the `src\components\Layout` folder where the responsive layout was created by 3 individual component (_Container/Row/Column_).

- ### Modularity

  I was focusing on creating modular solutions for generic usecases as much as possible, these services can be imported from `src\lib`.
  Constants and type definitions can be imported from `src\types`.

- ### Database

  Due to limited time I had no opportunity to introduce a database to the project. At the moment the data is stored locally on the frontend on [Redux](https://redux.js.org/) and [Redux-Toolkit](https://redux-toolkit.js.org/) with the exception of placement changes at **startup** and **runtime** where I directly modified the JSON to add the `place` fields in order to access the changes on the backend. I had the option to just add another object to the mix and change it there in the hope of implementing a database later on but in the end it added some more complexity to the task, so I figured why not do that.

  Since the **Image URLs** can be calculated based on existing data, this field is completely provided by the backend and is not changed directly anywhere.
