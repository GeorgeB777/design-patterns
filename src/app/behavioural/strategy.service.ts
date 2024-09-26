// Define the strategy interface
interface SortStrategy {
    sort(items: any[]): any[];
}
  
// Implement concrete strategies
class SortByName implements SortStrategy {
    sort(items: any[]): any[] {
        return items.sort((a, b) => a.name.localeCompare(b.name));
    }
}

class SortByDate implements SortStrategy {
    sort(items: any[]): any[] {
        return items.sort((a, b) => a.date - b.date);
    }
}

  // Context class
class ItemListComponent {
private sortStrategy: SortStrategy;

constructor() {
    // Default strategy
    this.sortStrategy = new SortByName();
}

setSortStrategy(strategy: SortStrategy) {
    this.sortStrategy = strategy;
}

sortItems(items: any[]) {
    return this.sortStrategy.sort(items);
}
}
  