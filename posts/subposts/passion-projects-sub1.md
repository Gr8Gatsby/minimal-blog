Prompt:

“I have a travel itinerary with several hotel stays, organized by options. Each option includes multiple hotels across different dates, with details like hotel name, room type, check-in date, check-out date, and geographic coordinates (latitude and longitude). Here is a screenshot showing the basic structure and data of these options.

I would like an interactive HTML page that meets the following requirements:

#### Map Visualization
- Use Leaflet to create a dynamic map showing all hotel locations for the selected option.
- Plot each hotel as a circular marker, color-coded uniquely for each hotel.
- Connect each hotel in sequence with a dashed line, representing the travel route.
- Place stop numbers near each marker, with a semi-transparent background and enough offset so they don’t overlap the marker, even when zoomed out.
- Show a tooltip for each marker with the hotel name, room description, check-in, and check-out dates.
- Allow the map to adjust offsets dynamically for better visibility at different zoom levels.
#### Calendar Visualization
- Add a calendar below the map displaying the full month that contains the travel dates.
- Highlight check-in to check-out dates for each hotel with color-coded backgrounds, matching the colors used for markers on the map.
- Show the hotel name only on the check-in day for each stay, without text overflow.
- Keep day numbers aligned to the top left of each calendar cell and ensure that hotel names are left-aligned under the day number.
#### Option Selector
- Include a dropdown menu to switch between different itinerary options.
- Update both the map and the calendar instantly based on the selected option.
#### Styling and UI
- Use a modern, professional style, with rounded corners for elements, a clean font (such as Roboto), and soft shadows.
- Apply responsive design principles to adjust the layout and font sizes for smaller screens.

Here’s a sample of the data structure for each option:

```json
{
    "1": [
        { "name": "OUTRIGGER Reef Waikiki Beach Resort", "description": "King room with seaview", "coordinates": [21.278905, -157.832289], "checkIn": "2024-11-16", "checkOut": "2024-11-20" },
        { "name": "Courtyard by Marriott Oahu North Shore", "description": "King room with seaview", "coordinates": [21.6436, -157.9231], "checkIn": "2024-11-20", "checkOut": "2024-11-22" },
        { "name": "Aston Maui Kaanapali Villas", "description": "Junior Suite with courtyard view", "coordinates": [20.9310, -156.6927], "checkIn": "2024-11-22", "checkOut": "2024-11-26" }
    ]
}
```

Please ensure the HTML is modular and the JavaScript is structured so that I can easily add new options and update data without needing extensive code changes.

I want this to be a well-polished, user-friendly, and professional experience.”