# Country Information App 🌍

This project is a simple web application that retrieves and displays country information based on the user's current geographic location. Built using HTML, CSS, and JavaScript, it fetches country data and dynamically updates the UI, including details of neighboring countries.

## Features 🚀

- **Geolocation**: Automatically detects your location using the browser's Geolocation API.
- **Country Information**: Displays detailed information about the current country, including:
  - Country name
  - Region
  - Population
  - Official languages
  - Currency
- **Neighboring Countries**: Fetches and displays data about neighboring countries (if available).
- **Error Handling**: Displays user-friendly error messages for issues like disabled location services or unavailable data.

## Technologies Used 🛠️

- **HTML**: To structure the application.
- **CSS**: To style the user interface and ensure responsiveness.
- **JavaScript**: For functionality, data fetching, and dynamic rendering.
- **APIs**:
  - [Nominatim Reverse Geocoding API](https://nominatim.org/): To find the country name based on geographical coordinates.
  - [REST Countries API](https://restcountries.com/): To fetch detailed information about the country and its neighbors.

## Screenshot 📸
![Capture](https://github.com/user-attachments/assets/294a29fb-77f0-4c84-9df3-e999ae6994a5)

## How It Works ⚙️

1. **Geolocation Detection**: 
   - The application uses the browser's Geolocation API to obtain the user's current coordinates.
   
2. **Country Information Retrieval**: 
   - The latitude and longitude are sent to the Nominatim API, which returns the user's current country name.
   - The country's name is used to fetch detailed information from the REST Countries API.

3. **Neighboring Countries**:
   - If the fetched country has neighboring countries, their information is retrieved from the REST Countries API and displayed.

4. **UI Rendering**:
   - Country data is dynamically added to the HTML structure, styled with CSS, and displayed on the page.

## Known Issues 🐛

- Neighboring countries may not display if the `borders` field in the REST Countries API response is empty or unavailable.
- Limited handling of API rate limits or network failures.

## Contributing 🤝

Contributions are welcome! Feel free to open issues or submit pull requests to enhance this project.

Feel free to reach out with suggestions or issues. Enjoy exploring the world with this app! 🌎
