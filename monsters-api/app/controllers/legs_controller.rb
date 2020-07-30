class LegsController < ApplicationController
    def index
        @legs = Leg.all
        render json: @legs
    end
end
