class KnightAttack {
	constructor(game) {
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/knight/Attack2.png"), 0, 0, 125.5, 100, 6, 0.1);

	};

	update() {

	};

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, 25, 25);
	};
};