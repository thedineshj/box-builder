class BoxBuilder {

    constructor() {
        // Box count
        this.boxCount = 0;
        // Boxes container element
        this.boxesContainer = document.querySelector("div.boxes-container");
        // Box count indicator element
        this.boxCountContainer = document.querySelector("div.box-count-container");
        // initial font size of box count indicator element
        this.boxCountFontSize = 1.5;
        // the factor at which font size increases or decreases
        this.fontFactor = 0.5;
        // when there are no boxes , it shows a text description
        this.noBoxesIndicator = document.querySelector("p.no-boxes");

    }



    addBox() {

        /*

        1 . hide text desription
        2 . increment box count
        3 . increase font size
        4 . display number of boxes
        5 . create new element
        6 . append box number to the element.
        7 . append newly created element to the box container element

        */

        this.noBoxesIndicator.classList.add("hide");
        this.boxCount = this.boxCount + 1;
        this.boxCountFontSize = this.boxCountFontSize + this.fontFactor;
        this.boxCountContainer.style.fontSize = `${this.boxCountFontSize}em`;
        this.boxCountContainer.innerHTML = this.boxCount;
        let box = document.createElement("div");
        box.appendChild(document.createTextNode(this.boxCount));
        this.boxesContainer.appendChild(box);
    }
    removeBox() {

        /*
        if there are no boxes,
        make sure hitting on remove box button,
        won't make box count negative.
        */

        if (this.boxCount == 0) {
            this.noBoxesIndicator.classList.remove("hide");
            this.boxCountContainer.innerHTML = "";
            return;
        }

        /*

        1 . decrement box count
        2 . decrease font size
        3 . display number of boxes
        4 . access last child element of the box container element
        5 . remove it from the box container element

        */
        this.boxCount = this.boxCount - 1;
        this.boxCountFontSize = this.boxCountFontSize - this.fontFactor;
        this.boxCountContainer.style.fontSize = `${this.boxCountFontSize}em`;
        this.boxCountContainer.innerHTML = this.boxCount;

        let box = this.boxesContainer.lastChild;
        this.boxesContainer.removeChild(box);

        /*

       if box count becomes zero,
       instead of displaying box count as 0,
       display text description as 'No boxes .....'
        */
        if (this.boxCount == 0) {
            this.noBoxesIndicator.classList.remove("hide");
            this.boxCountContainer.innerHTML = "";
        }
    }

    initialize() {
        /*
        onclick event is added to add button
        */
        document.querySelector("button#add-box").onclick = (e) => {
                this.addBox();
            }
            /*
            onclick event is added to remove button
            */
        document.querySelector("button#remove-box").onclick = (e) => {
            this.removeBox();
        }
    }

}


let b = new BoxBuilder();
b.initialize();


/*
 A fun class,
 automatically clicks on add box button n times,
 where n is an integer generated randomly.
 onclick event executes and adds boxes.
 Reminder : onclick event is set in above class
*/
class automateBuilder {
    constructor() {
        this.addButton = document.querySelector("button#add-box");
        this.demoStart = document.getElementById("demo");
        this.boxRange = {
            min: 10,
            max: 50
        };
    }
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    initialize() {
        this.demoStart.onclick = () => {
            for (let i = 0; i < this.getRandomInt(this.boxRange.min, this.boxRange.max); i++) {
                this.addButton.click();
            }
        }
    }
}

let ab = new automateBuilder();
ab.initialize();
