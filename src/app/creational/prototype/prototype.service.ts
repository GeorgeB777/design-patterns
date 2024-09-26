export interface Widget {
  clone(): Widget;
  render(): void;
}

export class ConcreteWidget implements Widget {
  constructor(public name: string, public settings: any) {}

  clone(): Widget {
    return new ConcreteWidget(this.name, { ...this.settings });
  }

  render(): void {
    console.log(`Rendering widget: ${this.name}`);
  }
}

// Usage
const originalWidget = new ConcreteWidget('Widget1', {
  color: 'blue',
  size: 'large',
});
const clonedWidget = originalWidget.clone();

originalWidget.render(); // Output: Rendering widget: Widget1
clonedWidget.render(); // Output: Rendering widget: Widget1
