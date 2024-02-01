# nodejs-typescript-api-server

nodejs-typescript-api-server


# Quick Start


# Installation and Start Server

```
npm install
brew install jq
npm run start
```


# Test endpoint is running

```
curl http://localhost:3000/
```


# Create a New Book (POST)

```
curl -X POST http://localhost:3000/books \
-H "Content-Type: application/json" \
-d '{"title": "The Hobbit", "author": "J.R.R. Tolkien"}'
```


# Read All Books (GET)

```
curl http://localhost:3000/books | jq
```

# Read a Single Book (GET)

```
curl http://localhost:3000/books/1 | jq
```

# Update a Book (PUT)

```
curl -X PUT http://localhost:3000/books/1 \
-H "Content-Type: application/json" \
-d '{"title": "The Hobbit", "author": "J.R.R. Tolkien Updated"}'
```

# Delete a Book (DELETE)

```
curl -X DELETE http://localhost:3000/books/1
```
