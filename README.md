# ProductsGallery

This project is a web application built using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6. It serves as a gallery to display and manage products, providing a user-friendly interface for browsing and interacting with product data.

## Project Description

The **ProductsGallery** is an Angular-based application designed to showcase a collection of products. It includes features such as:

- Displaying a list of products with details.
- Interactive components for filtering or searching products.
- Responsive design for optimal viewing on various devices.

This project is ideal for learning Angular, exploring front-end development, or as a starting point for building more complex product management systems.

## Styling

This project uses [Tailwind CSS][https://tailwindcss.com/] for styling. Tailwind CSS was chosen for its utility-first approach, which allows for rapid and responsive UI development.

## API Integration

This project uses the [Fake Store API][https://fakestoreapi.com/products] to fetch and display product data. The API provides details such as product name, image, price, and description.

## Dynamic Routing

The product details page is implemented using **Angular routing**. Each product has a unique route (e.g., `/products/:id`), which is dynamically generated based on the product ID. Angular's `RouterModule` is used to handle navigation and retrieve the product ID from the URL.

## Optional Enhancements

- **Search Bar**: A search bar is implemented to filter products by name.
- **Loading States**: Loading indicators are displayed while fetching data from the API.

## Live Demo

Check out the live demo of the project here: [https://products-gallery-eight.vercel.app/#/products]

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
