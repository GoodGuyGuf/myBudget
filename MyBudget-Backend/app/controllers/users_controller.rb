class ExpensesController < ApplicationController

    def create 
        user = User.create(user_params)
        render json: user
    end

    def show
        user = User.find_by_id(params[:id])

        if user
            render json: user
        else 
            render json: "No User Found."
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end

end