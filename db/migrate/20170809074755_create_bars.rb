class CreateBars < ActiveRecord::Migration[5.0]
  def change
    create_table :bars do |t|
      t.string  :name
      t.string  :address
      t.string  :city
      t.string  :state
      t.string  :vicinity
      t.integer :rating
      t.string  :place_id

      t.timestamps
    end
  end
end
