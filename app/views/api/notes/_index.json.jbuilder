json.array! notes do |note|
  json.id note.id
  json.title note.title
  json.content note.content
  json.notebookId note.notebook_id
  json.notebook note.notebook
  json.created_at note.created_at
end
