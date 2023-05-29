import { transition, trigger, query, style, animateChild, group, animate } from '@angular/animations';
export const routeTransitionAnimations = trigger('triggerName', [
    transition('One => Two, One => Three, One => Four, One => Five, One => Six,\
    Two => One, Two => Three, Two => Four, Two => Five, Two => Six,\
    Three => One, Three => Two, Three => Four, Three => Five, Three => Six,\
    Four => One, Four => Two, Four => Three, Four => Five, Four => Six,\
    Five => One, Five => Two, Five => Three, Five => Four, Five => Six,\
    Six => One, Six => Two, Six => Three, Six => Four, Six => Five', [
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