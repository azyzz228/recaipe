## Inspiration
In recent decades, food allergy has become an increasing concern for families. There are profound physical and psychological burdens with people experiencing food allergies. Things like attending social events and even planning for everyday meals become difficult. Many of the daily interactions involving food we take for granted affect people with severe food allergic symptoms, and it should be handled with care to make the gradual transition.

We believe that with the power of AI, this can be solved if proceeded creatively. That's why we created **Recaipe** ✨

![x1](https://ipfs.infura.io/ipfs/QmSTMKBRdhq9dd2nDokhqsPHTN75Kr1cFvbRvh4gtMQWNr)

## What it does 🤔
- Making shopping for allergy-friendly items a little easier! 
- Empowering people with food allergies to tell their stories through unique, unconventional takes of recipes!
- Making safer, better choices for your dietary needs.
- Taking away your burden in allergy management by giving you resources: recipes, expiry dates info etc.
- NFTs marketplace to build a community around people with food allergies and their families.
- Teenagers and young adults might feel like they don't fit in because of their allergies.

![x1](https://ipfs.infura.io/ipfs/QmfN3r5DS6AJ53aFx1avS67YKJjECU7hxkGzP5736uTKkw)

![x1](https://ipfs.infura.io/ipfs/QmVhmJHvNeaMKuo1F96ZJwVgoniwwPFAgkC4KL5yDHbRb5)

## How we built it ⚙️

**Recaipe** is crafted with ❤️. The front-end is made in React.js with Tailwind CSS. The authentication is done via Firebase. The backend is running on AWS instance and for the feature extraction & classification, we're using Inception-v3 trained with ImageNet [refined hyperparameters & under fitted (x0.72)] as the dataset. Object Detection is performed via AWS Rekognition. The NFT marketplace is running on Tezos Blockchain & is also powered by IPFS for decentralized file hosting. We are also using a few 3rd party API's to generate food metrics & other nutritional facts from the user inputs.

These are the following AWS services that we have used in Recaipe :—
- *AWS API Gateway*
- *AWS Lambda*
- *AWS Rekognition*
- *AWS SecretsManager*
- *AWS S3 Bucket*
- *ECR and ECS*

![aws-snap](https://ipfs.infura.io/ipfs/QmTuLxKsYP3EFCcRKXDBJmDJW7wAbW4QPScK6eRmNGkRRG)

## Challenges we ran into 😤
**A lot!** As I previously mentioned, the whole execution was done from scratch, even the advent of ideas in our mind literally came during the opening ceremony from Joyce. We broke the timeline into small chunks & divided the tasks among us depending on priority. Joyce was the product manager for us. Aziz was primarily working on the Front-end while Jun was working on the integrations & backend. Besides, Pratyay worked on building the ML model & cooked the API. We faced most challenges while using those APIs when we were integrating the modules into one. Later on, Jun deployed those API's on AWS instances & Pratyay created the decentralized NFT marketplace using Tezos's Blockchain which is powered by IPFS. We also found the official documentation & the template that Tezos provides very useful. Last but not the least, it was a bit difficult for us to collaborate in a virtual setting but we somehow managed to finish the project on time.

---
## Design

We were heavily inspired by the revised version of **Double Diamond** design process developed by **UK Research Council**, which not only includes visual design, but a full-fledged research cycle in which you must discover and define your problem before tackling your solution.

![Double-Diamond](https://ipfs.infura.io/ipfs/Qmdy6iR3qoSRzrQrtRScVAdSmw9ECbmAXqE3mxMsU3AKNe)

> 1. **Discover**: a deep dive into the problem we are trying to solve.
> 2. **Define**: synthesizing the information from the discovery phase into a problem definition.
> 3. **Develop**: think up solutions to the problem.
> 4. **Deliver**: pick the best solution and build that.

This time went for the minimalist **Material UI** design. We utilized design tools like Figma,  Photoshop & Illustrator to prototype our designs before doing any coding. Through this, we are able to get iterative feedback so that we spend less time re-writing code.

![Figma prototypes](https://ipfs.infura.io/ipfs/Qmao9r1WuaURsW4wGVDWkD5STUbvWDTxdhZM1A3sT75EK3)

---
# Research 📚

Research is the key to empathizing with users: we found our specific user group early and that paves the way for our whole project. Here are few of the resources that were helpful to us —

- The excess costs of childhood food allergy on Canadian families, AACIjournal : https://bit.ly/3uYP2Pj
- Epidemiology and Burden of Food Allergy, NCBI.NIH : https://bit.ly/2WXrLAM & https://bit.ly/3BuhKKD
- Covid19 & Food Allergy : https://bit.ly/30fbCIj

♣ Datasets :- Recompiled from several Sources.

♣ References :- Publicly available articles.

**CREDITS**
- Design Resources : Freepik
- Icons : Icons8
- Font : Lufga / Recoleta / Manrope / Montserrat / Roboto
- https://bit.ly/3lsXjrS
- https://bit.ly/2YAWrIq

---

# Takeways
### Accomplishments that we're proud of ✨
We are proud of finishing the project on time which seemed like a tough task as we started working on it quite late due to other commitments and were also able to add most of the features that we envisioned for the app during ideation. Moreover, we learned a lot about new web technologies and libraries that we could incorporate into our project to meet our unique needs. We also learned how to maintain great communication among all teammates. Each of us felt like a great addition to the team. From the backend, frontend, research, and design, we are proud of the great number of things we have built within 24 hours. And as always, working overnight was pretty fun! :)

### What we learned 🙌
**Sleep is very important!** Jokes apart, tbh a lot of things, both summed up in technical & non-technical sides. For the technical part, we did face some serious issues while we're finetuning the hyperparameters. Handling CORS and other bugs were also a big challenge. We also gave our level best to make the UI/UX look solid which helped us learn more about different design-centric approaches! Not to mention, Stackoverflow was the gem for us while we're troubleshooting some complicated issues late-night.

### What's next for Recaipe 🚀
We just really want this project to create a real positive impact on humanity. We are planning to integrate some cosmetic features into the application to make the UI look more attractive & intuitive. We are also looking forward to improving machine learning model performances, and adding cross-platform support. Moreover, a lot of code needs to be refactored as we couldn't hit so much under 24 hrs. Overall, we hope that one day this project can be widely used globally to help ourselves as well as small businesses & startups amplify with ease.

**Note** — **API credentials have been revoked. If you want to run the same on your local, use your own credentials.**
