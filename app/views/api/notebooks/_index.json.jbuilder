json.array! notebooks do |notebook|
 json.id notebook.id
 json.title notebook.title
 json.description notebook.description
 json.numNotes notebook.notes.size
end
