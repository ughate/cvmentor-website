# CV Mentor website starter

This is a responsive static website for cvmentor.in. It uses HTML, CSS, and vanilla JavaScript and can be hosted free on Cloudflare Pages.

## Before publishing
1. Open `index.html`.
2. Replace `91XXXXXXXXXX` in the WhatsApp link with your WhatsApp number (country code + number, no `+`, spaces, or dashes).
3. Confirm `hello@cvmentor.in` is an email address you can receive mail at. If not, replace it.
4. Review package prices and service descriptions. Prices are editable sample prices.
5. Add your privacy policy and actual business contact details before collecting resumes.

## Deploy with GitHub + Cloudflare Pages
1. Create a GitHub repository named `cvmentor-website`.
2. Upload `index.html`, `style.css`, and `script.js` to the repository root.
3. Sign in to Cloudflare and open Workers & Pages.
4. Create a Pages project and connect the GitHub repository.
5. Use the root directory `/`. Since this is plain HTML, no build command is required. If Cloudflare asks for a build command, leave it blank; set output directory to `/` or the project root as the interface allows.
6. Deploy. Cloudflare will provide a temporary `*.pages.dev` URL.

## Connect GoDaddy domain
For the easiest initial setup, connect `www.cvmentor.in` first:
1. In Cloudflare Pages > your project > Custom domains > Set up a domain, add `www.cvmentor.in`.
2. Cloudflare will show the exact CNAME target for your project, typically `<your-project>.pages.dev`.
3. In GoDaddy > Domain Portfolio > cvmentor.in > DNS, add a CNAME:
   - Type: CNAME
   - Name: `www`
   - Value: the exact Pages target shown by Cloudflare
   - TTL: default
4. Wait for Cloudflare to verify the domain and issue HTTPS.

For the root domain `cvmentor.in` (without www), Cloudflare Pages requires Cloudflare to manage the domain's DNS/nameservers. You can either:
- Move DNS management to Cloudflare and add the apex domain in Pages, following Cloudflare's guided setup; or
- Keep GoDaddy DNS and use GoDaddy domain forwarding from `cvmentor.in` to `https://www.cvmentor.in` if forwarding is available for your account.

**Do not change nameservers until you are ready.** If you use email on this domain, preserve its MX, SPF, DKIM, and DMARC records during any DNS migration.

## Local preview
Open `index.html` directly in your browser. For a local server, use VS Code Live Server.

## Important
This is a static brochure website. It does not securely collect resume uploads or process payments. Use a trusted form/payment provider and publish a privacy policy before collecting customer documents or payment.
