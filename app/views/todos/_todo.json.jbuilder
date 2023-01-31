json.extract! todo, :id, :name, :description, :due_date, :review_required, :priority, :created_at, :updated_at
json.url todo_url(todo, format: :json)
