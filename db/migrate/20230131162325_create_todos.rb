class CreateTodos < ActiveRecord::Migration[7.0]
  def change
    create_table :todos do |t|
      t.string :name
      t.string :description
      t.date :due_date
      t.boolean :review_required
      t.integer :priority

      t.timestamps
    end
  end
end
