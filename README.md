# employee servicce UI

This is a test project to demonstrate employee management using with Angular 8+. It contains,
- Store, update, delete and retrieve employee data.
- Store/Update employee data.
- Assign/Change employee to department.
- Assign/Change employee to supervisor, salary scale and office related detail.
- Add/Update/Delete employee family member details.

## Get started

### Clone the repo

```shell
git clone https://github.com/ChathurangaVKD/employee-service-ui.git
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

The `npm start` command builds (compiles TypeScript and copies assets) the application into `dist/`, watches for changes to the source files, and runs `lite-server` on port `4200`.

Shut it down manually with `Ctrl-C`.

#### npm scripts

These are the most useful commands defined in `package.json`:

* `npm start` - runs the TypeScript compiler, asset copier, and a server at the same time, all three in "watch mode".
* `npm run build` - runs the TypeScript compiler and asset copier once.
* `npm run lint` - runs `tslint` on the project files.

## Tech Stack

- Angular 9
- Angular material UI
- Express
- NodeJs

## Running the application locally

There are several ways to run a Angular application on your local machine. 

```shell
ng serve
```

Also you can run as a node application

```shell
node server.js
```

## Deploying the application to Heroku

The easiest way to deploy the sample application to Heroku is to use the [Heroku CLI](https://dashboard.heroku.com/):

This will create and rest api:

* Heroku App: employee-services https://employee-services.herokuapp.com/

