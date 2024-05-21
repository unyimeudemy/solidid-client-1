# SOLID ID (Backend)

## ABOUT
In summary, the project is proposed solution for identity theft. It is a centralized identity verification platform 
that serves a single source for the identity of individual and organizations .

## MOTIVATION
The motivation for this project came after checking some statistics on identity theft.
Did you know that every **<span style="color: red;">3 seconds</span>**  there is a victim of identity theft in the United States?
And did you know that over **<span style="color: red;">$29 billion</span>** was stolen by identity thieves in 2022?

Actually, there are solutions out there but all of them seem to focus on rectification after
the damage as already been done. This is because no one can totally stop people's data from getting
into the wrong hands, but my solution aims to render it useless.

## HOW IT WORKS
If an individual or organization wants to verify the identity of a persons, the person will generate a 
one-time use verification token that the other party can use to fetch his/her details.

Users that are part of an organization can choose the appropriate profile and the other party will very 
if he/she is part of on an organization without seeing the users personal details.

Each time the identity of a user is used, a record of when and who did the 
verification is kept. 

## TECHNOLOGIES

<a>
    <img height="400px" src="https://solididbucket.s3.amazonaws.com/photos/Model+databases.png" alt="Jenkins logo"> 
</a>


This repository is the client and it is built with react.js . You can check out the server repository in 
[SolidID-Server](https://github.com/unyimeudemy/solidID-backend). 

- You can check out the live app on render.com via https://solidid-client.onrender.com/
- To run the app locally, use `yarn run start`.
- The app is currently using the CI/CD service from render.com