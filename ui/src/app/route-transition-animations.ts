import { transition, trigger, query, style, animateChild, group, animate } from '@angular/animations';
export const routeTransitionAnimations = trigger('triggerName', [
    transition('1=>*, 2=>*, 3=>*, 4=>*, 5=>*, 6=>*, 7=>*,\
    2a=>1, 2a=>3, 2a=>4, 2a=>5, 2a=>6, 2a=>7, 2a=>2b,\
    2b=>1, 2b=>3, 2b=>4, 2b=>5, 2b=>6, 2b=>7, 2b=>2a,\
    4a=>1, 4a=>2, 4a=>3, 4a=>5, 4a=>6, 4a=>7, 4a=>4b, 4b=>4c,\
    4b=>1, 4b=>2, 4b=>3, 4b=>5, 4b=>6, 4b=>7, 4b=>4a, 4b=>4b,\
    4c=>1, 4c=>2, 4c=>3, 4c=>5, 4c=>6, 4c=>7, 4c=>4a, 4c=>4b', [
        style({position: 'relative'}),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100%'
            })
        ]),
        query(':enter', [style({opacity: 0})]),
        query(':leave', animateChild()),
        group([
            query(':leave', [animate('.5s ease-in-out', style({opacity: 0 }))]),
            query(':enter', [animate('2s ease-in-out', style({opacity: 1 }))])
        ]),
        query(':enter', animateChild())
    ])
]);