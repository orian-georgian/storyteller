```markdown
# Storyteller App

This web application allows users to explore a collection of stories. The app is hosted at [Storyteller App](https://orian-georgian.github.io/storyteller/).

## Local Setup

To run the app locally, follow these steps:

1. Clone this repository to your local machine.
2. Install the necessary dependencies using npm:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Mock Data

For mock data, this application utilizes [mockapi.io](https://www.mockapi.io/), a service for creating mock APIs. However, it's important to note that the pagination feature from mockapi.io does not retrieve the total count when paginating. As a result, the pagination functionality might not work as expected when filtering the stories.

## Features

- Sorting: Implemented a sorting feature to organize stories based on different criteria.
- Filtering: Users can filter stories based on various parameters to find the desired content.
- Pagination: Although the pagination feature is integrated, it might not work perfectly due to limitations in the mock data provider.
- Design: The application's design was built from scratch to provide an engaging and user-friendly interface.
