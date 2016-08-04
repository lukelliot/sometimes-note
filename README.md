This Evernote clone will attempt to emulate the core features of the web-app
found at http://www.evernote.com. These features include:

  - [ ] The ability for users to create and login to newly created accounts.

  - [ ] A working demo of the app, sans ability to save, and unique homepage for guest users

  - [ ] Production README contained in the current Rails directory

  - [ ] Hosting on Heroku

  - [ ] Notes
    * emulate the same color scheme and styling of the original web-app
    * provide rich-text form for entering text notes
    * react components that will create, delete, show, update, copylink, star, and share Notes
    * Sidebar
        - list view of all Notes by Notebook
        - preview each note with the first three lines, date, and title
    * Appropriate note 'seeds' to test application
    * can be marked as 'done'

  - [ ] Notebook
    * allows user to organize notes with a ubiquitous title for their 'Notebook'
    * Sidebar
      * list of all Notebook titles, options for:
        * share
        * shortcut
        * delete
      * Trash component opens Sidebar exclusively accessed by Notebook Sidebar containing all notes that have been deleted, NOTE: when Notebooks are deleted the Notebook's notes will be moved to the Trash, the Notebook title and it's relevant data is destroyed.
    * necessary seed data

  - [ ] Tags
    * allow users to arbitrarily associate different Notes from different Notebooks using keywords
    * component will be located at the tops of Note edit/create form.
    * component will respond to being clicked on for highlight and deleted with backspace, and will automatically highlight the last made tag,
    * autocompletion for tags with matching substrings
    * tags disappear when focused in the rich-text editing form
    * necessary seed data
    * Sidebar
        - list alphabetically
        - tag name and the number of notes tagged
        - search bar for tag
        - add a tag

  - [ ] Rich-Text
    * features rich-text editing for ease of user's use and immediate visual formatting
    * I don't actually know that much about Rich-text editing, so I'll have to investigate more before finishing this



# Documentation

###### Links
- [API Endpoints](./docs/api_endpoints.md)
- [Components and Routes](./docs/components_routes.md)
- [DB Schema](./docs/db_schema.md)
- [Flux Cycles](./docs/flux_cycles.md)

###### Wireframes
- [Homepage][1]
- [Main Notes page][2]
- [Create New Notebook/Tag Component][3]
- [Notebook Drawer Component][4]
- [Tags Component][5]
- [Search Component][6]
- [User Signin/Signout/Signup][7]

[1]:(./docs/wireframes/homepage.jpg)
[2]:(./docs/wireframes/notes_main.jpg)
[3]:(./docs/wireframs/create_new_nb_tag.jpg)
[4]:(./docs/wireframes/notebook_comp.jpg)
[5]:(./docs/wireframes/tags_comp.jpg)
[6]:(./docs/wireframes/search_comp.jpg)
[7]:(./docs/wireframes/user_signup_signin.jpg)

# Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days, W1 W 6pm)

###### Objective: Functioning rails project with front-end Authentication

- create new project
- create User model
- authentication backend setup
- create StaticPages controller and root view
- set up webpack & flux scaffold with skeleton files
- setup APIUtil to interact with the API
- set up flux cycle for frontend auth
- user signup/signin components
- blank landing component after signin
- style signin/signup components
- seed users

### Phase 2: Notes Model, API, and components (2 days, W1 F 6pm)

###### Objective: Notes can be created, read, edited and destroyed through the API.

 - create Note model
 - seed the database with a small amount of test data
 - CRUD API for notes (NotesController)
 - jBuilder views for notes
 - test out API interaction in the console.
- implement each note component, building out the flux loop as needed.
 - NotesIndex
 - NoteIndexItem
 - NoteForm
 - save Notes to the DB when the form loses focus or is left idle after editing.
 - style notes components
 - seed notes


### Phase 3: Notebooks (2 day, W2 Tu 6pm)

###### Objective: Notes belong to Notebooks, and can be viewed by notebook.

- create Notebook model
- build out API, Flux loop, and components for Notebook CRUD
- validates notes requires a notebook
- moving notes to a different notebook
- viewing notes by notebook
- create flux loop component to hold notebook drawer
- create drawer animation
- integrate Rich text editor for Notes Form using Quill.js
- Use CSS to style new components
- Seed Notebooks

###### Phase 3 adds organization to the Notes. Notes belong to a Notebook, which has its own Index view.

### Phase 4: Tags (1 days, W2 W 6pm)

###### Objective: Notes can be tagged with multiple tags, and tags are searchable.

- create Tag model and join table
- build out API, Flux loop, and components for:
  - fetching tags for notebook
  - adding tags to notebook
  - creating tags while adding to notebooks
  - searching notebooks by tag
- Creat drawer component for tags to live in
- hide drawer when focused on main notes page, and reveal when sidebar button is clicked
- Style new elements
- Seed tags and tag the seeded Notebooks

### Phase 5: Dynamic animations and Integration of all components (1 days, W2 Th 6pm)

###### objective: Integrate all components into one single page, dynamic app.

- integrate animations with drawers and make sure all components work in tandem on main notes page

### Phase 6: - Pagination / infinite scroll for Notes Index (1 day, W2 F 6pm)

###### objective: Add infinite scroll to Notes Index

- Paginate Notes Index API to send 20 results at a time from backend
- Append next set of results when user scrolls and is near bottom
- Make sure styling still looks good
- Ensure we have enough seeded notes to demo infinite scroll

### Bonus Features (TBD)


- Changelogs for Notes
  * Front end store or backend store?
- Multiple sessions
  * create backend for multiple sessions
  * figure out how to make cookies work
- Reminders **(Bonus)**
  * uses calendar and time to set reminder for note to be completed

- Search **(Bonus)**
  * Search through notes for blocks of text using regex
  * search bar allows search through all notebooks or by specific notebook
  * searches all content of notes
  * on "GET" request it returns notes in 'Notes Sidebar' view with relevant search text highlighted in the note

- Auto-Save **(Bonus)**
  * will autosave after a set interval
  * because notes and notebooks are titled upon creation auto-save will never have to prompt user to save, it will already know to save to the associated created file

- Syntax Highlighting **(Bonus)**
  * in addition to normal text editing, I'd like to include syntax highlighting to make the clone into a text editor for coders
  * will include 'Atom-like' features like numbered rows, text-wrap, indent, etc.

- Auto-Complete for Code Languages **(Bonus)**
  * I have no idea if this is doable or how I would implement this

- Github API integration **(Bonus)**
  * enable the ability for users to push code files to github through the Evernote API
