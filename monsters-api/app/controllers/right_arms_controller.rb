class RightArmsController < ApplicationController
    def index
        @right_arms = RightArm.all
        render json: @right_arms
    end
end
