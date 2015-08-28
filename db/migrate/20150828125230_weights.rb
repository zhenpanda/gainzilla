class Weights < ActiveRecord::Migration
  def change
  	remove_column :users, :weight
  	create_table :weights do |t|
      t.float :weight
      t.references :user 

      t.timestamps
    end
  end
end

