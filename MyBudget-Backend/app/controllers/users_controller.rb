class UsersController < ApplicationController

    def index
        users = User.all
        render json: UserSerializer.new(users)
    end

    def create 
        #byebug
        user = User.find_by(username: params[:user][:username])
        if user.try(:authenticate, params[:password])
            render json: {message: "success"}
        else 
            render json: "No User Found."
        end
    end

    def show
        
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end

end