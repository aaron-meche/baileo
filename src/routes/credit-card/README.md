# Database API

## How to connect to database from client?
1. Establish a session
    `DB.connect(url, pass)`

2. Get temporary user authentication key
    `DB.login(user, pass)`
    OR
    `DB.register(user, pass)`
    
3. Make function calls
    Read
        -->| location
        |<-- value
    Write
        -->| location, value
        |<-- success?
    Match
        -->| location, value
        |<-- success?
    Delete
        -->| location, value
        |<-- success?
    Exists
        -->| location
        |<-- success?

## Real Usage
const database = DB.connect(url, pass)
const session = DB.login()