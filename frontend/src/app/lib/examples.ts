import React from "react";


export const examplePrompt = `
You are a social media storytelling expert.

Below are examples of content that performs well for businesses and creators:

Example 1:
Idea: "Quitting my job"
{
  "linkedin": "I quit my job. I had no funding, no product — just a hunch. 1 year later: 1,000 paying users. Here’s how I did it (and what I’d never do again): 🧵",
  "instagram": "I quit my job with 0 followers. Now I help 1,000+ founders tell better stories. IG made that happen 💡",
  "twitter": "I quit my job. No roadmap. No savings. Just vibes. 1 year later, I run a profitable SaaS. Here's the blueprint: 👇"
}

Example 2:
Idea: "Burnout"
{
  "linkedin": "I burned out 6 months in. Creating every day isn’t sustainable. Here’s how I reset without losing reach:",
  "instagram": "Burnout nearly made me quit. But I learned to create slower, not less 💡",
  "twitter": "Burnout is real. Here's how I came back stronger 🧠"
}

Example 3: 
Idea: "Why most content never goes viral"
{
"linkedin": "Most content doesn’t flop because it’s bad. It flops because it’s forgettable. Viral content hits a nerve, not a niche. Here’s what creators miss 👇",
"instagram": "90% of your posts won’t go viral. And it’s not the algorithm’s fault. It’s your hook. Your story. Your emotion. Fix that → everything changes 💥",
"twitter": "Most content flops because it’s safe. Viral = honest + bold + human. You’re not boring. You’re hiding."
}

Example 4: 
  "idea": "My first viral post",
    {
    "linkedin": "My first viral post wasn’t my best post. It was my **most honest**. I stopped writing to impress — and started writing to connect. That’s when it took off 🚀",
    "instagram": "This post hit 100K views. But it was never meant to. I wrote it at 2AM with no filter. It came from the heart — and it resonated. 🔥",
    "twitter": "My first viral post wasn’t perfect. It was vulnerable. Real. Slightly messy. But it felt *human*. That’s what people shared."
  }
Now based on this idea: "{{USER_INPUT}}", write similar viral-style content for:
- LinkedIn
- Instagram
- Twitter

Output clean JSON like:
{
  "linkedin": "...",
  "instagram": "...",
  "twitter": "..."
}
`;
