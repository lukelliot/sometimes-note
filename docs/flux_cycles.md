# Auth Cycles
### Session API Request Actions
- [ ] signUp()
  * invoked in SignupForm onSubmit
  * POST Request; /api/users
  * receiveCurrentUser is success callback
- [ ] login()
  * invoked from Navbar onSubmit
  * POST request; /api/session
  * receiveCurrentUser is success callback
- [ ] logOut()
  * invoked from Navbar onClick
  * DELETE request; /api/session
  * removeCurrentUser is success callback
- [ ] fetchCurrentUser()
  * invoked from App in didMount
  * GET request; /api/session
  * receiveCurrentUser is callback

### Session API Response Actions
- [ ] receiveCurrentUser()
  * unvoked from API callback
  * stores currentUser in _currentUser in CurrentUserStore
- [ ] removeCurrentUser()
  * invoked from API callback
  * removes _currentUser from CurrentUserStore

# Error Cycles

### Errors API Response Actions
- [ ] setErrors
  * invoked from aPI callbacks on error for actions that generate POST requests
  * sets 'form' and _errors in the ErrorStore
- [ ] removeErrors
  * invoked from API callbacks on success for actions that generte POST requests
  * removes _errors for a given form in the ErrorStore

# Note cycles
### Request actions
- [ ] fetchAllNotes
  * invoked from NotesIndex 'didMount'/'willReceiveProps'
  * GET request; /api/notes
  * receiveAllNotes is callback
- [ ] createNote
  * invoked from new note button 'onClick'
  * POST /api/notes
  * receiveSingleNote is success callback
- [ ] fetchSingleNote
  * invoked from NoteDetail didMount/willReceiveProps
  * GET /api/notes/:id
  * receiveSingleNote is success callback
- [ ] updateNote
  * invoked from NoteForm onSubmit
  * POST /api/notes
  * receiveSingleNote is success callback
- [ ] destroyNote
  * invoked from a delete button 'onClick'
  * DELETE /api/notes/:id
  * removeNote is success callback

### Response Actions
- [ ] receiveAllNotes
  * invoked from API callback
  * Note store updates _notes and emits change to the components
- [ ] receiveSingleNote
  * invoked from API callback
  * Note store updates _notes[id] and emits change to comps.
- [ ] removeNote
  * invoked from API callback
  * Note store will remove _notes[id] and emit change to comps.


### Store Listeners

- [ ] NotesIndex component listens to Note store
- [ ] NoteDetail component listens to Note store

# Notebook Cycles
### Notebooks API Request Actions
- [ ] fetchAllNotebooks
  * invoked from NotebooksIndex didMount/willReceiveProps
  * GET /api/notebooks
  * receiveAllNotebooks is callback
- [ ] createNotebook
  * invoked from new notebook button 'onClick'
  * POST /api/notebooks is called
  * receiveSingleNotebook is callback
- [ ] fetchSingleNotebook
  * invoked from NotebookDetail didMount/willReceiveProps
  * GET /api/notebooks:id
  * receiveSingleNotebook  is the callback
- [ ] updateNotebook
  * invoked from NotebookForm onSubmit
  * POST /api/notebooks
  * receiveSingleNotebook is callback
- [ ] destroyNotebook
  * invoked from delete notebook button 'onClick'
  * DELETE /api/notebooks/:id
  * removeNotebook is success callback

### Notebooks API Response Actions
- [ ] receiveAllNotebooks
  * invoked from API callback
  * Notebook store update _notebooks, __emitChange
- [ ] receiveSingleNotebook
  * invoked from API callback
  * Notebook store updates _notebooks[id], __emitChange
- [ ] removeNotebook
  * invoked in API callback
  * Notebook store removes _notebooks[id], __emitChange

### Store Listeners
- [ ] NotebooksIndex component listens to Notebook store

# SearchSuggestion Cycles
- [ ] fetchSearchSuggestions
  * invoked from NoteSearchBar onChange when there is text
  * GET /api/notes is called with text param
  * receiveSingleSuggestions is set as the success callback
- [ ] receiveSearchSuggestions
  * invoked from API Callback
  * SearchSuggestion store updates _suggestions, __emitChange
- [ ] removeSearchSuggestions
  * invoked when text is deleted to empty string
  * NoteSearchBar onChange when empty
  * SearchSuggestion store reset _suggestions, __emitChange

### Store Listeners
- [ ] SearchBarSuggestions should listen to SearchSuggestion store
