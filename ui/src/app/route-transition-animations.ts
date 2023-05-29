import { transition, trigger, query, style, animateChild, group, animate } from '@angular/animations';
export const routeTransitionAnimations = trigger('triggerName', [
    transition('One => Two, One => Three, One => Four, One => Five, Two => Three, Two => Four, Two => Five, Three => Four, Three => Five, Four => Five, Five => Four, Five => Three, Five => Two, Five => One, Four => Three, Four => Two, Four => One, Three => Two, Three => One, Two => One', [
        style({position: 'relative'}),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100%'
            })
        ]),
        query(':enter', [style({right: '-100%', opacity: 0})]),
        query(':leave', animateChild()),
        group([
            query(':leave', [animate('.5s ease-in-out', style({opacity: 0 }))]),
            query(':enter', [animate('.5s ease-in-out', style({opacity: 1 }))])
        ]),
        query(':enter', animateChild())
    ])
]);