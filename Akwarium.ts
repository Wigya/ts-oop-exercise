import { AkwariumKwarantanna } from "./AkwariumKwarantanna";
import { Fish } from "./Fish";
import { Gupik } from "./Gupik";
import { Krewetka } from "./Krewetka";

export class Akwarium {
    protected fishes: Fish[];
    private fillLevel: number;

    constructor(fishes: Fish[], fillLevel: number) {
        this.fishes = fishes;

        if (fillLevel <= 100 && fillLevel >= 0) {
            this.fillLevel = fillLevel;
        } else {
            throw new Error("Invalid fill level ");
        }
    }

    public nakarm(): void {
        this.fishes.map((fish) => {
            fish.updateGlod(20);
        })
    }

    public isSomeHungry(): Fish[] {
        return this.fishes.filter((fish) => fish.getGlod() < 50);
    }

    public isSomeIll(): Fish[] {
        return this.fishes.filter((fish) => !fish.getIsIll());
    }

    public fill(fillLevel: number): void {
        this.fillLevel = fillLevel;
    }

    public addFish(fish: Fish): void {
        this.fishes.push(fish);
    }

    public action(): void {
        this.fishes.map((fish) => {
            if (Math.random() > 0.5) {
                if (fish instanceof Krewetka) {
                    fish.setIsFiltering(!fish.getIsFiltering());
                } else if (fish instanceof Gupik) {
                    fish.setIsSleep(!fish.getIsSleep())
                }
            }
        })
    }

    public info(): void {
        this.fishes.map((fish) => {
            console.log(`wiek: ${fish.getWiek()}`)
            console.log(`glod: ${fish.getGlod()}`)
            console.log(`is ill? ${fish.getIsIll()}`)
            if (fish instanceof Gupik) {
                console.log(`Is sleeping? ${fish.getIsSleep()}`)
            } else if (fish instanceof Krewetka) {
                console.log(`Is filtering? ${fish.getIsFiltering()}`)
            }
        })
    }

    public wyslijNaKwarantanne(akwariumKwarantanna: AkwariumKwarantanna, fish: Fish): void {
        if (this.fishes.includes(fish)) {
            akwariumKwarantanna.addFish(fish);
            this.fishes = this.fishes.filter((fishItem) => fishItem !== fish);
        } else {
            throw new Error("Nie ma takiej ryby w akwarium")
        }
    }




}