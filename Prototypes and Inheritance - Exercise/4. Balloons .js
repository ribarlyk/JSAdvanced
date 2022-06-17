function solve() {
    class Balloon {
        constructor(color, hasWeight) {
            this.color = color;
            this.hasWeight = hasWeight;
        }
    }
    class PartyBalloon extends Balloon {
        constructor(color, hasWeight, ribbonColor, ribbonLength) {
            super(color, hasWeight);
            this.ribbonColor = ribbonColor;
            this.ribbonLength = ribbonLength;
            this.ribbon1 = { color: ribbonColor, length: ribbonLength }
        }
        get ribbon() {
            return this.ribbon1
        }
    }
    class BirthdayBalloon extends PartyBalloon {
        constructor(color,hasWeight,ribbonColor, ribbonLength, text) {
            super(color,hasWeight,ribbonColor, ribbonLength)
            this.text1 = text;
        }
        get text() {
            return this.text1
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}
let classes = solve()
let testBalloon = new classes.Balloon("yellow", 20.5);
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
let ribbon = testPartyBalloon.ribbon;
console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon)