class UsersController < ApplicationController

    def index
        users = User.all
        render json: UserSerializer.new(users)
    end

    def create 
        #byebug
        user = User.create(user_params)
        render json: UserSerializer.new(user)
    end

    def session
        user = User.find_by(username: params[:user][:username])
        if user.try(:authenticate, params[:password])
            render json: UserSerializer.new(user)
        else
            render json: {message: "No User Found."}
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end

end