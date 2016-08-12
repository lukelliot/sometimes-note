json.array! notebooks do |notebook|
 json.id notebook.id
 json.title notebook.title
 json.numNotes notebook.notes.size
end
