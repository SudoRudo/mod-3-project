class HeadsController < ApplicationController
    def index
        @heads = Head.all
        render json: @heads
    end

    def show
    end
end
