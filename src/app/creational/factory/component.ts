import { Component, inject } from '@angular/core';
import { FactoryService } from './factory.service';
import { AService } from './a.service';
import { BService } from './b.service';

@Component({
    selector: 'app-creational-factory',
    template: `
        <h2>Factory</h2>
    `,
    styles: [],
    standalone: true,
    providers: [
        
        {
            provide: FactoryService,
            useFactory: () => {
                const isProduction = true;
                if(isProduction) {
                    return new AService();
                } else {
                    return new BService();
                }
            },
            deps: []
        }
        
    ]
})
export class FactoryComponent { 
    private service = inject(FactoryService);

    data$ = this.service.getData();
}