import { Injectable } from '@angular/core';

export interface Paper {
  title:        string;
  description:  string;
  venue:        string;
  year:         string;
  authors:      string;
  url:          string;
}
 
export interface Project {
  title:       string;
  description: string;
  route:       string;
}
 
export interface ArtPiece {
  title:       string;
  year:        string;
  image:       string;
  id:          string;
}


@Injectable({
  providedIn: 'root',
})
export class Data {
 
  papers: Paper[] = [
    {
      title:       'Automated Debugging of Deep Text Classifiers',
      description: 'A model which replaces the human feedback process and automatically reduces irrelevant features in deep text classifiers, performing comparably to state-of-the-art models that use human feedback.',
      venue:       'Canadian AI',
      year:        '2024',
      authors:     'Shamir Khandaker, MD Aminul Islam, Gabriel C. Trahan',
      url:         'https://assets.pubpub.org/56ttmv86/ISLAM-51716779231001.pdf'
    },
    {
      title:       'SuperiorLoss: An Intuitive Loss Function for Robust Curriculum Learning',
      description: 'A new loss function combining current loss and standard deviation of convoluted data, enabling curriculum learning that outperforms state-of-the-art models on CIFAR-10 and CIFAR-100.',
      venue:       'Canadian AI',
      year:        '2024',
      authors:     'Shamir Khandaker, MD Aminul Islam, Gabriel C. Trahan',
      url:         'https://assets.pubpub.org/a4wo0wa1/ISLAM-21716779651373.pdf'
    },
    {
      title:       'When do Convolutional Neural Networks Stop Learning?',
      description: 'A hypothesis analyzing data variation across CNN layers to anticipate near-optimal learning capacity, saving 58.49% of computational training time on average across six CNN variants and three datasets.',
      venue:       'arXiv',
      year:        '2024',
      authors:     'Sahan Ahmad, Gabriel C. Trahan, MD Aminul Islam',
      url:         'https://arxiv.org/abs/2403.02473'
    }
  ];
 
  projects: Project[] = [
    {
      title:       'Dr. Sudoku',
      description: 'A Sudoku puzzle generator and solver built with a constraint satisfaction approach.',
      route:       'dr-sudoku'
    },
    {
      title:       'Quizzler',
      description: 'A trivia quiz application with dynamic question loading and score tracking.',
      route:       'quizzler'
    }
  ];
 
  art: ArtPiece[] = [
    {
      title: 'Snake Noir',
      year:  '2022',
      image: 'images/drawings/snake.jpg',
      id:    'snake'
    },
    {
      title: 'Cyclops Robot',
      year:  '2020',
      image: 'images/drawings/Cyclops.jpg',
      id:    'cyclops'
    },
    {
      title: 'Smiley Spider',
      year:  '2019',
      image: 'images/drawings/Suicide Spider.jpg',
      id:    'spider'
    }
  ];
 
  getLatestPapers(n: number): Paper[] {
    return this.papers.slice(0, n);
  }
 
  getLatestProjects(n: number): Project[] {
    return this.projects.slice(0, n);
  }
 
  getLatestArt(n: number): ArtPiece[] {
    return this.art.slice(0, n);
  }


}
