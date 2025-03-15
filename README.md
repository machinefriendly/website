# Machine Friendly Website

This is the official website for Machine Friendly, built using [The Monospace Web](https://github.com/owickstrom/the-monospace-web) framework.

## Local Development

To run the website locally, simply open the `index.html` file in your browser:

```bash
# Using your default browser
open index.html

# Or specify a browser
firefox index.html
chrome index.html
```

## Hosting on GitHub Pages

This website is designed to be hosted on GitHub Pages. Follow these steps to set it up:

1. Create a GitHub repository for this website (e.g., `machinefriendly.github.io` or any other name)
2. Push this code to the repository:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/yourrepository.git
git push -u origin main
```

3. Go to your repository settings on GitHub
4. Navigate to the "Pages" section
5. Under "Source", select the branch you want to deploy (usually `main`)
6. Click "Save"

GitHub will provide you with a URL where your site is published (typically `https://yourusername.github.io/yourrepository`).

## Custom Domain Setup

To use a custom domain (machinefriendly.com):

1. In your GitHub repository, go to Settings > Pages
2. Under "Custom domain", enter `machinefriendly.com` and click "Save"
3. GitHub will create a CNAME file in your repository

### DNS Configuration

You'll need to configure your domain's DNS settings:

#### Option 1: Apex Domain (machinefriendly.com)

Add these A records pointing to GitHub's IP addresses:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

#### Option 2: www Subdomain (www.machinefriendly.com)

Add a CNAME record:
```
CNAME  www  yourusername.github.io.
```

#### Option 3: Both Apex and www

Configure both of the above, and add another CNAME record:
```
CNAME  @  yourusername.github.io.
```

Wait for DNS changes to propagate (can take up to 24 hours). GitHub will automatically secure your custom domain with HTTPS.

## Maintenance

To update the website:

1. Make your changes locally
2. Commit and push to GitHub:

```bash
git add .
git commit -m "Update website content"
git push
```

GitHub Pages will automatically rebuild and deploy your site.
