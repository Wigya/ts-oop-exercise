import { Akwarium } from "./Akwarium";
import { Fish } from "./Fish";

export class AkwariumKwarantanna extends Akwarium {
    private glowneAkwarium: Akwarium;
    constructor(fishes: Fish[], fillLevel: number, glowneAkwarium: Akwarium) {
        super(fishes, fillLevel);
        this.glowneAkwarium = glowneAkwarium;
    }

    public zwrocZKwarantanny(): void {
        this.fishes.map((fish) => {
            this.glowneAkwarium.addFish(fish)
        })
        this.fishes = [];
    }
}