class LeftArmsController < ApplicationController
    def index
        @left_arms = LeftArm.all
        render json: @left_arms
    end
end
