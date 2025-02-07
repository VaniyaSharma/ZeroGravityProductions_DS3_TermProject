AFRAME.registerComponent('player-move',{
    schema: {
        speed: {type: 'number', default: 5}
    },
    init: function() {
        this.keys = {};

        //Listen for event
        window.addEventListener('keydown', (e) => {
            this.keys[e.key.toLowerCase()] = true;
        });
        window.addEventListener('keyup', (e) => {
            this.keys[e.key.toLowerCase()] = false;
        });
    },
    tick: function (time, delta) {
        //get the physics body of the element.
        if (!this.el.body) {
            return;
        }
        //initialize horizontal velocity components
        var vx = 0;
        var vz = 0;
        var speed = this.data.speed;

        if(this.keys['w']) {
            vz -= speed;
        }
        if(this.keys['s']) {
            vz += speed;
        }
        if(this.keys['a']) {
            vx -= speed;
        }
        if(this.keys['d']) {
            vx += speed;
        }

        // Apply the horizontal velocity
        body.velocity.set(vx, body.velocity.y, vz);
    }
})