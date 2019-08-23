// Enemies our player must avoid ========Delete
var Enemy = function() {
    // Variables applied to each of our instances go here, ========Delete
    // we've provided one for you to get started ========Delete


    // x pos
    // y pos


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
