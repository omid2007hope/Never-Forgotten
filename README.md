# Never Forgotten

Minimal starter with:

- `Frontend/`: Next.js app router + Tailwind CSS
- `Backend/`: Express API

## Run locally

1. Install dependencies from the project root:

```bash
npm install
```

2. Start both apps:

```bash
npm run dev
```

3. Open `http://localhost:3000`

The frontend proxies `/api/*` requests to the backend on `http://localhost:4000` by default.

## Environment files

- `Frontend/.env.local`
- `Backend/.env`

## Brand direction

**Name:** Never Forgottens
**Tagline:** *Honor the legends. Preserve the stories.*

**Style:**
Premium military memorial + modern digital magazine
Think: respectful, cinematic, bold, disciplined, readable

## Color palette

* **Military Green:** `#2F4F3A`
* **Deep Olive:** `#1F3326`
* **Command Gold:** `#C9A44C`
* **Muted Gold:** `#E1C97A`
* **Off White:** `#F7F3EA`
* **Charcoal:** `#111111`
* **Soft Gray:** `#D9D9D9`

Use **green as the base**, **gold for premium accents**, and **off-white for reading surfaces**.

## Typography

* **Headings:** Cinzel, Merriweather, or Playfair Display
* **Body:** Inter, Source Sans 3, or Lato
* **Labels / buttons:** Rajdhani or Oswald

This gives you:

* memorial / legacy tone in headings
* modern readability in article text
* military sharpness in UI labels

## Website structure

### 1. Header / Navbar

Top fixed navbar:

* Logo left: **Never Forgottens**
* Center or right nav:

  * Home
  * Legends
  * Daily Edition
  * Photo Archive
  * Stories
  * Submit a Tribute
  * About
* CTA buttons:

  * **Login**
  * **Sign Up**

Extra thin top strip above navbar:

* “Daily Military Legends Magazine”
* email icon + “Get today’s edition by email”

## 2. Hero section

Large cinematic hero with faded military photograph background.

Layout:

* Left side:

  * category badge: **TODAY’S LEGEND**
  * big headline
  * 2-line subheadline
  * short intro paragraph
  * buttons:

    * **Read Today’s Story**
    * **Join Daily Email**
* Right side:

  * framed featured portrait/photo
  * small metadata card:

    * Name
    * Branch
    * Years
    * Medal / distinction

Example hero copy:
**Chesty Puller: The Marine Corps Icon Who Refused to Break**
*A daily magazine honoring the warriors, leaders, and sacrifices that shaped American military history.*

## 3. Daily email signup block

Directly below hero.

Card layout with gold border:

* heading: **Get the Daily Edition**
* subtext: “One legendary military story every morning.”
* fields:

  * Email address
* options:

  * Daily digest checkbox
  * Weekly archive checkbox
* button:

  * **Subscribe**

Good newsletter UX usually makes the value proposition explicit and keeps the form light, which is why this section should be short, visible, and repeated again lower on the page. ([Mailchimp][2])

## 4. Featured grid

Three-card editorial section:

* **Main Feature**

  * large image
  * headline
  * excerpt
  * “Read Story”

* **Battlefield Memory**

  * medium image
  * short title

* **Photo of the Day**

  * strong archival image
  * caption
  * “Open Gallery”

## 5. Legends categories

Grid of clickable categories with icon + image overlay:

* Army
* Marines
* Navy
* Air Force
* Coast Guard
* Medal of Honor
* Special Operations
* WWII
* Vietnam
* Modern Heroes

Card style:

* dark image overlay
* gold label
* hover zoom
* clean white text

## 6. Latest posts / magazine feed

A clean news-magazine style post feed:

Each post card includes:

* thumbnail photo
* title
* short excerpt
* author or archive source
* date
* read time
* tag

Post types:

* Story
* Tribute
* Photo Essay
* Veteran Voice
* Daily Brief

This is where users can browse **text + photo posts**.

## 7. Tribute / post submission

A dedicated section for community posting.

Title:
**Post a Tribute**

Fields:

* Full name
* Email
* Title of tribute
* Story text
* Upload photo
* Branch selection
* Relation:

  * Veteran
  * Family
  * Supporter
  * Historian
* Submit button

Add moderation note:
“Every submission is reviewed before publication.”

## 8. Photo archive section

Masonry gallery or 3-column photo wall:

* archival portraits
* military moments
* memorial photos
* ceremony photos

Hover effect:

* image darkens
* title + year appear
* “View Story”

## 9. Login / Sign up UX

Keep it very simple.

### Login modal/page

* Email
* Password
* Remember me
* Login button
* Forgot password
* Continue with Google

### Sign up modal/page

* Full name
* Email
* Password
* Confirm password
* checkbox: Subscribe to daily edition
* Sign Up button

Best approach:
merge membership and newsletter onboarding:
when user signs up, they can automatically opt into the daily email during registration. Membership-oriented editorial templates often combine account creation with content access and email retention flows. ([Webflow][3])

## 10. Footer

Rich footer with:

* logo
* short mission statement
* quick links
* social links
* newsletter mini-form
* legal:

  * Privacy
  * Terms
  * Submission Policy

Footer quote:
**“No legend fades when the story is preserved.”**

---

# Homepage wireframe

## Above the fold

* Top strip
* Navbar
* Hero image + featured legend
* CTA buttons
* Daily email form

## Mid page

* Featured stories grid
* Categories
* Latest posts
* Photo archive

## Lower page

* Submit a tribute
* Weekly highlighted legend
* newsletter CTA again
* footer

---

# UX priorities

## 1. Respect first

This site should not feel like a gossip news portal.
Spacing, typography, and imagery should feel ceremonial and respectful.

## 2. Reading comfort

Use:

* max content width around `1200px`
* article text width around `680–760px`
* generous line-height
* strong contrast

## 3. Strong image storytelling

This brand will live through **portraits, uniforms, medals, battle-era photographs, memorial visuals**.

## 4. Repeated conversion points

You want:

* sign up in navbar
* sign up in hero
* sign up mid-page
* sign up in footer

That pattern is consistent with newsletter-centric site design and improves visibility without forcing the user into a single conversion moment. ([Mailchimp][2])

---

# Suggested homepage sections in exact order

1. Top announcement bar
2. Navbar
3. Hero feature
4. Daily email signup
5. Featured stories
6. Categories
7. Latest posts
8. Photo archive
9. Submit a tribute
10. Secondary CTA banner
11. Footer

---

# UI component style

## Buttons

Primary:

* gold background
* dark text
* rounded-lg
* bold uppercase label

Secondary:

* transparent
* green border
* white or green text

## Cards

* dark green or off-white backgrounds
* thin gold border
* subtle shadow
* image on top, text below

## Inputs

* off-white background
* olive border
* gold focus ring

## Badges

* small uppercase
* gold fill or outline
* labels like:

  * DAILY EDITION
  * LEGEND
  * ARCHIVE
  * FEATURED
