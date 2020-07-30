class BodiesController < ApplicationController
    def index
        @bodies = Body.all
        render json: @bodies
    end
end
