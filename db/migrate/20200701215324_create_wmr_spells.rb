class CreateWmrSpells < ActiveRecord::Migration[6.0]
	def change
		create_table :wmr_spells do |t|
			t.string :name, null: false, unique: true
			t.string :display_name, null: false
			t.string :to_cast, null: false
			t.string :range, null: false

			t.belongs_to :game
			t.belongs_to :wmr_army			
		end
	end
end
