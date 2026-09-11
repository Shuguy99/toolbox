# ToolBox — Free Online Developer Tools

Static website with free, browser-based developer and productivity tools. Zero server required.

## Tools included
- QR Code Generator
- Password Generator (Web Crypto API)
- Word & Character Counter
- JSON Formatter & Validator
- Base64 Encoder / Decoder

## Deploy to Vercel (recommended)
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy from the toolbox directory
cd toolbox
vercel

# 3. Follow the prompts — select your account and default settings
```

## Deploy to GitHub Pages
1. Push this `toolbox/` folder to a GitHub repository
2. Go to Settings > Pages
3. Set source to the root branch
4. Your site will be live at `https://<username>.github.io/<repo>/`

## Deploy to Netlify
1. Drag and drop the `toolbox/` folder at https://app.netlify.com/drop
2. Done — you get a live URL instantly

## Monetization (AdSense)
1. Create a Google AdSense account at https://adsense.google.com
2. Submit your site for review (needs ~20+ pages of content for approval)
3. Replace the AdSense placeholder in `index.html` with your publisher ID
4. Ads appear between content sections — revenue comes from organic search traffic

## SEO Tips
- Submit `sitemap.xml` to Google Search Console
- Add your site to Google Search Console and Bing Webmaster Tools
- Focus on long-tail keywords: "free online QR code generator no signup"
- Add new tools regularly to increase indexed pages and traffic

## Project structure
```
toolbox/
├── index.html              Main landing page
├── robots.txt
├── sitemap.xml
├── css/
│   └── style.css           Global styles (dark theme)
├── js/
│   ├── app.js              Shared utilities (copy, toast)
│   ├── qrcode.min.js       QR code library
│   ├── qr-code.js          QR tool logic
│   ├── password.js         Password generator logic
│   ├── counter.js          Word counter logic
│   ├── json-formatter.js   JSON formatter logic
│   └── base64.js           Base64 encoder/decoder logic
└── tools/
    ├── qr-code.html
    ├── password-generator.html
    ├── word-counter.html
    ├── json-formatter.html
    └── base64.html
```