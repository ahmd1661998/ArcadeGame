// Enemies our player must avoid ========Delete
var Enemy = function() {
    // Variables applied to each of our instances go here, ========Delete
    // we've provided one for you to get started ========Delete


    // x pos
    // y pos

    this.x = 0;
    this.y = 0;
    

    // The image/sprite for our enemies, this uses ========Delete
    // a helper we've provided to easily load images ========Delete
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game ========Delete
// Parameter: dt, a time delta between ticks ========Delete
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter ========Delete
    // which will ensure the game runs at the same speed for ========Delete
    // all computers. ========Delete

    //if enemy is not passed boundary
        // move forward
        // Increment x by peed * dt
    // else
        // Reset pos to start
};

// Draw the enemy on the screen, required method for game ========Delete
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}; 

// Now write your own player class ========Delete
// This class requires an update(), render() and ========Delete
// a handleInput() method. ========Delete

// Hero class

    //==> constructor

        //==> properties
            //==> x pos
            //==> y pos
            //==> sprite images

        //==> Methods
            //==> Update position
                //==> Check collision here
                    //==> Did player x and y collide with enemy?
                //==> Check win here?
                    //==> Did player x and y reach final tile?

            // Rander 
                // Draw player spirte on current x and y coord position

            // Handle keyboard input
                //Update player's x and y property aording to input
            
            // Reset Hero
                // Set x nd y to starting x and y

//PlayerClass
class Hero {

    //constructor
    constructor() {
        //properties => add X coord, Y coord, sprite image
        this.sprite = 'images/char-boy.png';
        this.step = 101;
        this.jump = 83;
        this.startX = this.step * 2;
        this.startY = (this.jump * 5) -20;
        this.x = this.startX;
        this.y = this.startY;
    }

    // Draw player spirte on current x and y coord position
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    /**
     * Update her's a and y proberty according to input
     * 
     * @param {srtring} input - Direction to travel
     */

    handleInput(input) {
        switch(input) {
            case 'left':
                if (this.x > 0) {
                    this.x -= this.step;
                }
                break;
            case 'up':
                if (this.y > this.jump) {
                    this.y -= this.jump;
                }
                break;
            case 'right':
                if (this.x < this.step * 4) {
                    this.x += this.step;
                }
                break;
            case 'down':
                if (this.y < this.jump * 4) {
                    this.y += this.jump;
                }
                break;
        }
    }

}

const player = new Hero();


// Now instantiate your objects. ========Delete
// Place all enemy objects in an array called allEnemies ========Delete
// Place the player object in a variable called player ========Delete



// This listens for key presses and sends the keys to your ========Delete
// Player.handleInput() method. You don't need to modify this. ========Delete
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
