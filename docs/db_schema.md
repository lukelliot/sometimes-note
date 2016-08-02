# **Evernote DB Schema**
Notes
  * integer :id, null: false, primary
  * string :title, null: false
  * text :body, null: false
  * integer :author_id, null: false
  * integer :notebook_id, null: false
  * boolean :archived, null: false, default: false

Notebooks
  * id
  * integer :author_id, null: false
  * string :title, null: false
  * string :description

Tags
  * id
  * string :name, null: false

Taggings
  * id
  * integer note_id, null: false
  * integer tag_id, null: false

Reminder
  * id
  * integer :user_id, null: false
  * integer :note_id, null: false
  * datetime :date, null: false
  * string :type, null: false
  * integer :prev_id, null: false

Users
  * string :username, null: false, indexed, unique
  * string :session_token, null: false, indexed, unique
  * string :password_digest, null: false
