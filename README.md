## Requirements

- PostgreSQL 9.6
- Ruby 2.5
- bundler 1.16 (or higher if available)
- yarn 1.9 (or higher if available)

## Setup

Start PostgreSQL and update the database uri:

```
$ $EDITOR .env
```

Install the app dependencies:

```
$ gem install bundler
$ brew install yarn

$ bundle install
$ yarn install
```

Setup the database:

```
bundle exec rake db:create db:migrate db:seed
```

Start the server:

```
bundle exec rails server
```

## Tests

To run all tests:

```
bundle exec rspec
```

## Background

Open the webapp:

```
$ open http://localhost:3000
```

Sign in as:

email: `bob@example.com`
password: `password`

## Task

Display the comments on the post detail page (/posts/:id).


- The top-level comments by the followees of the current user should appear first, the
  other top-level comments should appear in reverse chronological order
- The comments should contain the name of the user, the actual text of the
  comment and their replies

Backend:

- The sorting of the comments should be performed on database level

Frontend:

- The comments should be rendered with React.js

Criteria:

*Getting to a working solution is most important*. After that we look for:

- Performance
- Tests
- Best practices
