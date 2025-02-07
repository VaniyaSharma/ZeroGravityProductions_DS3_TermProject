AFRAME.registerComponent('boundary-check', {
    schema: {
        minX: {type: 'number', default: -10},
        maxX: {type: 'number', default: 10},
        minZ: {type: 'number', default: -10},
        maxZ: {type: 'number', default: 10}
    },
    tick: function () {
        //get current position
        var pos= this.el.getAttribute('position');

        //Clamping the x and z values within the limits
        var clampedX = Math.max(this.data.minX, Math.min(this.data.maxX, pos.x));
        var clampedZ = Math.max(this.data.minZ, Math.min(this.data.maxZ, pos.z));

        //If out of bounds, update position
        if (pos.x !== clampedX || pos.z !== clampedZ) {
            this.el.setAttribute('position', {x: clampedX, y: pos.y, z:clampedZ});
        }
    }
});