Sequence diagram for creating a new note in  the single page web application version as described here: https://fullstackopen.com/en/part0/fundamentals_of_web_apps#forms-and-http-post

```mermaid

sequenceDiagram
    participant browser
    participant server

    Note right of browser: POST request contains the note and timestamp in JSON format.

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: Note created - HTTP status code 201
    deactivate server
```

The event handler replaces the form submit functionality.  This creates a new note, adds it to the notes list, rerenders the note list on the page and sends the new note to the server.