export class Action {
    // // commuting by bus
    // actionIdScoreMappings.Add(1, 50);
    // // commuting by bike
    // actionIdScoreMappings.Add(2, 100);
    // // plastic free 
    // actionIdScoreMappings.Add(3, 50);
    // // eco quiz
    // actionIdScoreMappings.Add(4, 25);
    // // planting
    // actionIdScoreMappings.Add(5, 300);
    // // donating
    // actionIdScoreMappings.Add(6, 200);

    getNumberByName(name: string){
        if(name == 'ride-bus') return 1;
        if(name == 'ride-bike') return 2;
        if(name == 'reusable-container') return 3;
        if(name == 'eco-quiz') return 4;
        if(name == 'plant-tree') return 5;
        if(name == 'donating-equipment') return 6;
        return 0;
    }

    formatAction(id: any){
        if(id == 1) return "took the bus.";
        if(id == 2) return "took the bike.";
        if(id == 3) return "is plastic free.";
        if(id == 4) return "did the eco quiz.";
        if(id == 5) return "is a plant master.";
        if(id == 6) return "donated some electronics."; 
        return "";
    }
}