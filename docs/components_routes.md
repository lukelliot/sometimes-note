### Components

- Router -> App
  - Navbar
  - NotebooksIndex
    - Search
    - NotebookIndexItem
    - NotebookForm
  - LoginForm
  - SignupForm
  - NotesIndex
    - NoteForm
    - NoteIndexItem
    - NoteDetail
      - NoteTags
      - NoteEditArea
  - TagsIndex
  - NotebookIndex

### Routes

- component: App path: '/'
    - component LoginForm path: '/login'
    - component SignupForm path: '/signup'
    - component: NotesIndex path: 'index'
    - component: NotesIndex path: 'notebooks/:notebookId'
      - component: NoteDetail path: 'notes/:noteId'
    - component: NotesIndex path: none
      - component: NoteDetail path: 'notes/:noteId'
    - component: TagsIndex path: /tags
    - component: NotebookIndex path: /notebooks
    - component: AccountSettings path: ?

For Routes that have no notebookId, NotesIndex will render all notes as default (NotesIndex Route)
