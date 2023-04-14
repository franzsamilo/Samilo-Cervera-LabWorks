// Louie Cervera - enums general interface + interface atrributes and methods
enum Size {
    small = "small scale",
    normal = "normal scale",
    large = "large scale"
}

enum Upkeep {
    low = "low upkeep",
    medium = "medium upkeep",
    high = "high upkeep"
}

interface Structure {
    size: Size;
    cost: number;
    structuralIntegrity: string;
    monthlyEarnings : number;

    getType(): string

    getAnnual(): number
}

// Franz Samilo - class exclusive methods/attributes
class BurgerJoint implements Structure {
    size: Size;
    cost: number;
    structuralIntegrity: string;
    monthlyEarnings: number;
    healthValidity : boolean;
    burgerCount: number;

    public getType(): string {
        return `This is a ${this.size} Burger Joint with a total cost of ${this.cost} upon construction, and is currently in ${this.structuralIntegrity} state.`;
    } 

    public getAnnual(): number {
        return this.monthlyEarnings * 12
    }

    public makeBurger() : void {
        this.burgerCount++
    }
}

class Factory implements Structure {
    size: Size;
    cost: number;
    structuralIntegrity: string;
    monthlyEarnings: number;
    resourceBoxes: number;

    public getType(): string {
        return `This is a ${this.size} Factory with a total cost of ${this.cost} upon construction, and is currently in ${this.structuralIntegrity} state.`;
    } 

    public getAnnual(): number {
        return this.monthlyEarnings * 12
    }

    public shipOut(): number {
        return this.resourceBoxes--
    }

    public produce(): number {
        return this.resourceBoxes++
    }
}

class Hotel implements Structure {
    size: Size;
    cost: number;
    structuralIntegrity: string;
    monthlyEarnings: number;
    upkeep : Upkeep;


    public getType(): string {
        return `This is a ${this.size} Hotel Joint with a total cost of ${this.cost} upon construction, and is currently in ${this.structuralIntegrity} state.`;
    } 

    public getAnnual(): number {
        return this.monthlyEarnings * 12
    }

    public payUpkeepMonth(): number {
        let upkeepCost : number = 0;
        if (this.upkeep === "low upkeep"){
            upkeepCost = 1000
        } else if (this.upkeep === "medium upkeep") {
            upkeepCost = 5000
        } else if (this.upkeep === "high upkeep") {
            upkeepCost = 10000
        }
        return this.monthlyEarnings - upkeepCost
    }
}
