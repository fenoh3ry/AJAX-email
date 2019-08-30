class EmailController < ApplicationController
  def index
  	@email = Email.all
  end

  def create
  	@email = Email.create!(object: Faker::Game.title, body: Faker::Movie.quote)
  	respond_to do |format|
  		format.html { redirect_to root_path }
  		format.js { }
  	end
  end

  def show
  	@email = Email.find(params[:id])

  	respond_to do |format|
  		format.html { redirect_to root_path }
  		format.js { }
  	end
  end
end
