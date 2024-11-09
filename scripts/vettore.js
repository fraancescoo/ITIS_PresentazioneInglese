class Vector2 {
    /**
     * @type {number}
     */
    x;
    /**
     * @type {number}
     */
    y;

    /**
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * @param {Vector2} vec 
     */
    add(vec) {
        this.x += vec.x;
        this.y += vec.y;
        return this;
    }

    /**
     * @param {Vector2} vec 
     */
    subtract(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        return this;
    }

    /**
     * @param {Vector2|number} vec 
     */
    multiply(vec) {
        if(vec instanceof Vector2) {
            this.x *= vec.x;
            this.y *= vec.y;
        }else {
            this.x *= vec;
            this.y *= vec;
        }
        
        return this;
    }

    /**
     * @param {Vector2|number} vec 
     */
    divide(vec) {
        if(vec instanceof Vector2) {
            this.x /= vec.x;
            this.y /= vec.y;
        }else {
            this.x /= vec;
            this.y /= vec;
        }
        
        return this;
    }

    /** TODO: Ricordati di aggiungere altre funzioni */
}