
# **Project Prompt: Platform-Specific Tower Defense Game as a PWA**

## **Objective**
Build a modular, extensible Tower Defense game as a Progressive Web Application (PWA) using modern JavaScript (ES6+), HTML5, and CSS. The project will feature rich gameplay mechanics, flexible defense systems, and platform-specific maps optimized for mobile and desktop players. Each platform will provide unique map experiences, effectively creating two versions of the game while maintaining a shared core.

---

## **Core Features**
1. **Gameplay Basics:**
   - Multiple waves of enemies per level, increasing in difficulty.
   - Multiple levels with distinct layouts and challenges.
   - Enemies aim to steal treasure and return it to their spawn point.
   - Airborne enemies with freeform movement and ground enemies with path-based movement.
   - Defenders (players) must use different defense mechanisms to protect treasure.

2. **Defense Systems:**
   - Towers and traps are the main defense mechanisms.
   - Each defense has **three modes** to target specific enemy types:
     - **Ground-Only Mode:** Targets ground-based enemies along the path.
     - **Air-Only Mode:** Targets airborne enemies with freeform movement.
     - **Ground-and-Air Mode:** Targets both types but with reduced efficiency compared to specialized modes.
   - Players can dynamically switch defense modes during gameplay to adapt to enemy waves.
   - Defenses are upgradable during the game, with enhancements like increased damage, range, or attack speed.

3. **Victory Conditions:**
   - **Win Condition:** Keep the majority of the treasure intact.
   - **Perfect Score:** Preserve all treasure (100%).
   - **Partial Score:** Lose some treasure but prevent enemies from taking the majority.

4. **Scoring System:**
   - Three-star rating system per level:
     - **3 Stars:** Perfect score.
     - **2 Stars:** Minor treasure loss.
     - **1 Star:** Just enough treasure saved to win.

---

## **Platform-Specific Map Considerations**

### **1. Mobile-Friendly Maps**
- Smaller grid sizes: **10x10 to 15x15**.
- Compact layouts to reduce scrolling and fit smaller screens.
- Shorter paths and fewer spawn points for quick gameplay sessions.
- Optimized UI for touch interactions (e.g., larger buttons and easier drag/drop for placing defenses).
- Lower performance overhead for less powerful devices.

### **2. Desktop-Friendly Maps**
- Larger grid sizes: **20x20 to 30x30**.
- Expansive layouts with more paths and complex strategies.
- Longer play sessions with greater enemy waves and defenses to manage.
- Enhanced visuals to leverage desktop capabilities.
- Full-screen UI with keyboard/mouse support for precision.

---

## **Dynamic Map Switching**
The game will detect the player’s platform and load the appropriate version of the map:

- **Detection Logic:** Use JavaScript’s `navigator.userAgent` or CSS media queries to identify the player’s platform.
- **Option to Switch:** Display a message like:
  - "This map is optimized for mobile. Would you like to try the desktop version?"
  - "This map is optimized for desktop. Would you like to try the mobile version?"

---

## **Example Map Configuration**

### **Mobile Map JSON (`map1_mobile.json`):**
\`\`\`json
{
  "mapId": "map1_mobile",
  "name": "Forest Ambush (Mobile)",
  "gridSize": [10, 10],
  "treasureLocation": { "x": 7, "y": 5 },
  "spawnPoints": [
    { "id": "north", "x": 3, "y": 0 }
  ],
  "paths": [
    {
      "id": "path1",
      "spawnId": "north",
      "points": [
        { "x": 3, "y": 0 },
        { "x": 3, "y": 5 },
        { "x": 7, "y": 5 }
      ]
    }
  ],
  "airborneZones": [
    { "x1": 0, "y1": 0, "x2": 10, "y2": 10 }
  ]
}
\`\`\`

### **Desktop Map JSON (`map1_desktop.json`):**
\`\`\`json
{
  "mapId": "map1_desktop",
  "name": "Forest Ambush (Desktop)",
  "gridSize": [20, 20],
  "treasureLocation": { "x": 15, "y": 10 },
  "spawnPoints": [
    { "id": "north", "x": 5, "y": 0 },
    { "id": "east", "x": 19, "y": 10 }
  ],
  "paths": [
    {
      "id": "path1",
      "spawnId": "north",
      "points": [
        { "x": 5, "y": 0 },
        { "x": 5, "y": 5 },
        { "x": 10, "y": 5 },
        { "x": 15, "y": 10 }
      ]
    },
    {
      "id": "path2",
      "spawnId": "east",
      "points": [
        { "x": 19, "y": 10 },
        { "x": 15, "y": 10 }
      ]
    }
  ],
  "airborneZones": [
    { "x1": 0, "y1": 0, "x2": 20, "y2": 20 }
  ]
}
\`\`\`

---

## **User Experience**

### **1. Platform Detection**
- Automatically load the appropriate map version based on the detected platform.
- Example:
  - Mobile: `map1_mobile.json`
  - Desktop: `map1_desktop.json`

### **2. Switch Option**
- If the player switches versions, dynamically reload the game with the alternate map file.
- Use a button in the UI to toggle maps (e.g., "Switch to Desktop Map").

### **3. Replay Value**
- The desktop and mobile versions of maps will have distinct designs, offering different strategies.
- Encourage players to try both versions for a new experience.

---

## **Game Design Impacts**

### **1. Level Selector**
- Show distinct icons for mobile and desktop versions of the same level.
- Example:
  ```
  Level 1 (Mobile) - Completed 3 stars
  Level 1 (Desktop) - Not Played
  ```

### **2. Development Workflow**
- For every map, create two JSON files:
  - `mapX_mobile.json` for mobile.
  - `mapX_desktop.json` for desktop.

### **3. Scoring and Progression**
- Track stars separately for mobile and desktop versions of levels.
- Allow independent unlocking (e.g., a player might unlock a new mobile level but still need to pass the desktop equivalent).

---

## **Technologies for Platform-Specific Features**

### **1. Platform Detection**
- Use JavaScript:
  \`\`\`javascript
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  const mapFile = isMobile ? 'map1_mobile.json' : 'map1_desktop.json';
  \`\`\`
- Or use CSS media queries for UI adjustments:
  \`\`\`css
  @media (max-width: 768px) {
    /* Mobile-specific styles */
  }
  \`\`\`

### **2. Dynamic Map Loading**
- Load map JSON dynamically based on the detected platform or user choice:
  \`\`\`javascript
  fetch(mapFile)
    .then(response => response.json())
    .then(mapData => initializeGame(mapData));
  \`\`\`

---

## **Extensibility Considerations**
1. **Modular Codebase:**
   - Organized into directories for clarity and extensibility:
     ```
     /components  (Web Components for UI elements)
     /api         (APIs for loading levels, enemies, defenses)
     /maps        (Map JSON files)
     /utils       (Pathfinding, collision detection)
     /assets      (Sprites, sounds)
     ```

2. **APIs for Maps, Enemies, and Defenses:**
   - Example `Map API`:
     \`\`\`javascript
     class Map {
       constructor(jsonData) {
         this.gridSize = jsonData.gridSize;
         this.treasureLocation = jsonData.treasureLocation;
         this.spawnPoints = jsonData.spawnPoints;
         this.paths = jsonData.paths;
         this.airborneZones = jsonData.airborneZones;
       }

       getShortestPath(spawnId) {
         // Logic to calculate the shortest path to the treasure
       }
     }
     \`\`\`

3. **Performance Optimization:**
   - Render maps and enemy movement on `<canvas>` for smooth animations.
   - Use sprite sheets and lazy-loading for assets.
