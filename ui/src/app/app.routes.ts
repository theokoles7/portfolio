import { Routes }       from '@angular/router';

// Pages
import { AboutPage }    from './pages/about-page/about-page';
import { ArtPage }      from './pages/art-page/art-page';
import { ContactPage }  from './pages/contact-page/contact-page';
import { CvPage }       from './pages/cv-page/cv-page';
import { DrSudokuPage } from './pages/dr-sudoku-page/dr-sudoku-page';
import { ErrorPage }    from './pages/error-page/error-page';
import { HistoryPage }  from './pages/history-page/history-page';
import { MainPage }     from './pages/main-page/main-page';
import { ProjectsPage } from './pages/projects-page/projects-page';
import { QuizzlerPage } from './pages/quizzler-page/quizzler-page';
import { ResearchPage } from './pages/research-page/research-page';

export const routes: Routes = [
    {path: "about",     component: AboutPage,       children: [
        {path: "cv",        component: CvPage},
        {path: "history",   component: HistoryPage},
        {path: "", redirectTo: "cv",        pathMatch: "full"},
    ]},
    {path: "art",       component: ArtPage},
    {path: "contact",   component: ContactPage},
    {path: "projects",  component: ProjectsPage},
        {path: "projects/dr-sudoku", component: DrSudokuPage},
        {path: "projects/quizzler",  component: QuizzlerPage},
    {path: "research",  component: ResearchPage},
    {path: "",          component: MainPage},
    {path: "**",        component: ErrorPage},
];
