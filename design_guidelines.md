# LinguaQuest Design Guidelines

## Design Approach: Reference-Based (Children's Educational Gaming)

**Primary References:** Duolingo (gamification), Khan Academy Kids (child-friendly UI), PBS Kids Games (playful engagement)

**Core Principles:**
- Playful & Engaging: Every interaction should feel rewarding and fun
- Age-Appropriate: Large touch targets, simple navigation, clear feedback
- Multi-Sensory Learning: Visual + audio feedback for all actions
- Progress Celebration: Constant positive reinforcement

---

## Color Palette

### Vibrant & Playful System

**Primary Colors (World Themes):**
- Spanish World: 15 85% 55% (Warm Orange) + 340 75% 60% (Pink accents)
- French World: 220 80% 60% (Sky Blue) + 280 70% 65% (Lavender)
- Hindi World: 30 90% 55% (Golden Orange) + 340 80% 50% (Magenta)
- Japanese World: 350 85% 60% (Cherry Blossom) + 160 70% 50% (Jade Green)

**UI Foundation:**
- Background Base: 240 20% 98% (Light mode), 240 15% 12% (Dark mode cards)
- Success Green: 140 65% 50%
- Star Gold: 45 95% 60%
- Badge Purple: 270 70% 60%

**Contrast:** High contrast text on colorful backgrounds for readability

---

## Typography

**Fonts (via Google Fonts CDN):**
- Display/Headers: 'Fredoka' (rounded, friendly, weights 400-700)
- Body/UI: 'Nunito' (clean, legible, weights 400-600)
- Accent/Rewards: 'Baloo 2' (playful, celebratory)

**Scale (Mobile-optimized):**
- Hero Text: text-4xl to text-5xl (32-48px)
- Level Titles: text-2xl to text-3xl (24-30px)
- Body/Instructions: text-lg (18px)
- Buttons: text-xl font-semibold (20px)

---

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12 (p-4, gap-6, h-8, m-12)

**Mobile-First Grid:**
- Single column layouts for main content flow
- 2-column grids for level selection, mini-games (grid-cols-2 gap-4)
- Full-width cards with rounded-3xl borders
- Bottom navigation bar (safe-area-inset-bottom)

**Container Strategy:**
- Screen padding: px-4 py-6 (mobile), px-6 py-8 (tablet)
- Card spacing: gap-4 between elements
- Touch targets: minimum h-16 for buttons, h-20 for game cards

---

## Component Library

### Navigation
- **World Selector:** Full-screen carousel with large themed cards, swipe gestures
- **Bottom Tab Bar:** 4 icons (Worlds, Play, Journal, Profile) with active state indicators
- **Back Button:** Large (h-12 w-12) rounded-full with icon, top-left positioning

### Game Elements
- **Level Cards:** Rounded-3xl cards with gradient backgrounds, large numbers, 3-star display, lock icons for incomplete levels
- **Mini-Game Tiles:** Square cards (aspect-square) with icons, tilted slightly for playfulness (-rotate-2 to rotate-2)
- **Word Cards:** Flip animation, colorful borders (border-4), large text, image + word combination

### Rewards & Feedback
- **Star System:** Large animated stars (h-16 w-16), gold fill, pulse animation on earn
- **Badge Display:** Circular badges (rounded-full h-24 w-24), colorful borders, icon + label
- **Progress Bars:** Thick (h-4), rounded-full, gradient fills, animated width transitions

### Interactive Components
- **Buttons:** Large rounded-2xl, solid fills with world theme colors, text-white, shadow-lg
- **Drag-Drop Zones:** Dashed borders (border-dashed border-4), bg-opacity-20, visual drop feedback
- **Audio Buttons:** Circular (rounded-full h-16 w-16), speaker icon, ripple animation on press

### Data Display
- **Language Journal:** Card-based layout, stats display (grid-cols-2), vocabulary word lists with flags
- **Character Avatars:** Large circular images (h-32 w-32), colorful borders, unlockable accessories overlay

---

## Animations & Interactions

**Core Principles:** Celebrate every action, maintain engagement

**Essential Animations:**
- Star collection: Scale + rotate + opacity fade-in (duration-500)
- Level complete: Confetti burst, badge slide-in from top
- Card selection: Scale-105 + shadow-xl on tap
- Correct answers: Gentle bounce + green glow
- Incorrect answers: Shake animation (no punishment, just retry)
- Character reactions: Simple emoji/expression changes

**Transitions:**
- Screen changes: Slide transitions (left/right for worlds, up for modals)
- Card reveals: Stagger animations (delay-100, delay-200, delay-300)
- Progress updates: Smooth width transitions (transition-all duration-700)

---

## Visual Identity

### Character System
- **Mascot Design:** Friendly animal characters per world (owl for wisdom, dragon for Chinese/Japanese theme inspiration)
- **Style:** Round, soft shapes, large eyes, expressive faces, simple color palettes
- **Usage:** Appear in headers, success screens, provide hints

### Illustration Style
- **Vocabulary Images:** Bright, simple vector illustrations, consistent stroke width
- **World Backgrounds:** Gradient meshes with cultural motifs (subtle patterns)
- **Icons:** Rounded, outlined style (Heroicons outline), consistent 3-4px stroke

---

## Images

**Hero/Splash Screen:**
- Large character mascot illustration (full screen) with app logo overlay
- Colorful gradient background representing all language worlds
- "Start Learning" button at bottom

**World Selection:**
- Each world card features cultural imagery (Eiffel Tower for French, Taj Mahal for Hindi, etc.)
- Illustrated backgrounds, not photographic, to maintain playful aesthetic

**Game Screens:**
- Vocabulary items shown with colorful vector illustrations
- Mini-game backgrounds use themed patterns (geometric shapes, cultural elements)

---

## Accessibility

- High contrast ratios (WCAG AAA for children)
- Large touch targets (44x44px minimum)
- Audio feedback for all interactions
- Visual + audio cues for success/failure
- Consistent icon meanings across app
- Support for text scaling (responsive font sizes)

---

## Technical Considerations

**Performance:**
- Lazy load heavy illustrations
- Use icon fonts (Heroicons) via CDN
- Optimize animations (transform/opacity only)
- Implement smooth scroll behaviors

**Sound Design:**
- Use Web Audio API for sound effects
- Cheerful chimes for success
- Gentle click sounds for interactions
- No autoplay audio (user-initiated only)