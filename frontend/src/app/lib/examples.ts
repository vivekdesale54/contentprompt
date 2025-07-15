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
Idea: "My first viral post",
{
"linkedin": "My first viral post wasn’t my best post. It was my **most honest**. I stopped writing to impress — and started writing to connect. That’s when it took off 🚀",
"instagram": "This post hit 100K views. But it was never meant to. I wrote it at 2AM with no filter. It came from the heart — and it resonated. 🔥",
"twitter": "My first viral post wasn’t perfect. It was vulnerable. Real. Slightly messy. But it felt *human*. That’s what people shared."
}

Example 5:
Idea: "How to Build a Startup"
{
"linkedin": "1️⃣ Build a Prototype
Facebook didn’t launch the perfect product. They tested, learned & iterated.
Create the smallest version that solves the core problem
Progress > Perfect

2️⃣ Experience a Problem Firsthand
The best way to build a durable business:
Understanding your customers so well you can Predict their needs & desires.
Live those needs yourself.

3️⃣ Validate the Opportunity
Use the “Why now?” framework to identify the most promising startup.
Look for ideas with strong “market pull”
– People eagerly waiting to buy.
A good idea at the wrong time is a bad idea.

4️⃣ Upgrade Your Team
As your startup evolves, so should your team.
Hire A-players who are ready to solve the challenges you’re facing.
The top team will win the big leagues.

5️⃣ Embrace Deep Work
Deep work is your time to work in your zone of genius – completely undistracted.
No meetings, no calls, no scrolling.
Just you and your work.

6️⃣ Hire a Chief of Staff
Delegating effectively is Key to unlocking genius-level work
They’ll handle operations, communication & special projects.
Without a coach, you can’t win the game.

7️⃣ Maximize User Happiness
Your product is only as good as how much people love using it.
Obsessively track your Net Promoter Score (NPS) and product “stickiness”
Happy users are your greatest growth path.

8️⃣ Scale Your Company
Build your Founder Flywheel.
Founders want every action to multiply the last. With a flywheel your business will scale itself.
Founders embrace compounding."

"instagram": "1️⃣ Build a Prototype
Facebook didn’t launch the perfect product. They tested, learned & iterated.
Create the smallest version that solves the core problem
Progress > Perfect

2️⃣ Experience a Problem Firsthand
The best way to build a durable business:
Understanding your customers so well you can Predict their needs & desires.
Live those needs yourself.

3️⃣ Validate the Opportunity
Use the “Why now?” framework to identify the most promising startup.
Look for ideas with strong “market pull”
– People eagerly waiting to buy.
A good idea at the wrong time is a bad idea.

4️⃣ Upgrade Your Team
As your startup evolves, so should your team.
Hire A-players who are ready to solve the challenges you’re facing.
The top team will win the big leagues.

5️⃣ Embrace Deep Work
Deep work is your time to work in your zone of genius – completely undistracted.
No meetings, no calls, no scrolling.
Just you and your work.

6️⃣ Hire a Chief of Staff
Delegating effectively is Key to unlocking genius-level work
They’ll handle operations, communication & special projects.
Without a coach, you can’t win the game.

7️⃣ Maximize User Happiness
Your product is only as good as how much people love using it.
Obsessively track your Net Promoter Score (NPS) and product “stickiness”
Happy users are your greatest growth path.

8️⃣ Scale Your Company
Build your Founder Flywheel.
Founders want every action to multiply the last. With a flywheel your business will scale itself.
Founders embrace compounding."

"twitter": "A business without a central system will crumble under pressure.

1️⃣ Build a Prototype
Facebook didn’t launch the perfect product. They tested, learned & iterated.
Create the smallest version that solves the core problem
Progress > Perfect

2️⃣ Experience a Problem Firsthand
The best way to build a durable business:
Understanding your customers so well you can Predict their needs & desires.
Live those needs yourself.

3️⃣ Validate the Opportunity
Use the “Why now?” framework to identify the most promising startup.
Look for ideas with strong “market pull”
– People eagerly waiting to buy.
A good idea at the wrong time is a bad idea.

4️⃣ Upgrade Your Team
As your startup evolves, so should your team.
Hire A-players who are ready to solve the challenges you’re facing.
The top team will win the big leagues.

5️⃣ Embrace Deep Work
Deep work is your time to work in your zone of genius – completely undistracted.
No meetings, no calls, no scrolling.
Just you and your work.

6️⃣ Hire a Chief of Staff
Delegating effectively is Key to unlocking genius-level work
They’ll handle operations, communication & special projects.
Without a coach, you can’t win the game.

7️⃣ Maximize User Happiness
Your product is only as good as how much people love using it.
Obsessively track your Net Promoter Score (NPS) and product “stickiness”
Happy users are your greatest growth path.

8️⃣ Scale Your Company
Build your Founder Flywheel.
Founders want every action to multiply the last. With a flywheel your business will scale itself.
Founders embrace compounding.

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
