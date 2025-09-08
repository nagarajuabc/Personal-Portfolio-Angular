import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Todo App',
      description:
        'A simple and intuitive Todo App to help you organize tasks. Easily add,and track your daily goals in one clean interface.',
      image: 'assets/images/todo-app.png',
      link: 'https://rociogarrido.github.io/hotel-app/',
    },
    {
      title: 'Fruit Quantity Visualization Dashboard',
      description: 'Designed and implemented bar and pie charts to represent fruit quantity data using intuitive visual formats for quick comparison and proportional analysis.',
      image: 'assets/images/datatoimage.png',
      link: 'https://rociogarrido.github.io/cooking-planner/',
    },
    {
      title: 'Shopping cart',
      description:
        'E-commerce application made with React, TypeScript and Material-UI',
      image: 'assets/images/shopping-cart.jpg',
      link: 'https://rociogarrido.github.io/shopping-cart/',
    },
  ];
}
