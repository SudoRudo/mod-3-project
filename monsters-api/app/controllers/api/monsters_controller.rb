class Api::MonstersController < ApplicationController
    def index
        @monsters = Monster.all
        render json: @monsters, include:[:left_arm, :right_arm, :body, :leg, :head, :user], only:[:id, :name]
    end

    def show
        @monster = Monster.find_by(id: params[:id])
        render json: @monster, include:[:left_arm, :right_arm, :body, :leg, :head, :user], only:[:id, :name]
    end

    def create
        @monster = Monster.create(monster_params)
        render json: @monster
    end

    def update
        @monster = Monster.find_by(id: params[:id])
        @monster.update(monster_params)
        render json: @monster
    end

    def destroy
        Monster.destroy(params[:id])
    end

    private
    def monster_params
        params.require(:monster).permit(:name, :left_arm_id, :right_arm_id, :body_id, :leg_id, :head_id, :user_id)
    end
end
