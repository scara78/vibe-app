<div align="center">
  <br />
    <img width="1072" height="595" alt="vibe" src="https://github.com/user-attachments/assets/b8be7729-8980-4215-ab67-3b5bc5cf76ff" />
  <br />
   <div>
    <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=61DAFB&labelColor=white&color=%2361DAFB" />
    <img src="https://img.shields.io/badge/next.js-black?style=for-the-badge&logo=next.js&logoColor=black&labelColor=white&color=%23000000" />
    <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=3178C6&labelColor=white&color=3178C6" />
    <img src="https://img.shields.io/badge/shadcn%2Fui-black?style=for-the-badge&logo=shadcnui&logoColor=black&labelColor=white&color=%23000000" />
    <img src="https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4&labelColor=white&color=06B6D4" />
    <img src="https://img.shields.io/badge/openAI-%23412991?style=for-the-badge&logo=openai&logoColor=%23412991&labelColor=white&color=%23412991" />
    <img src="https://img.shields.io/badge/tRPC-%232596BE?style=for-the-badge&logo=trpc&logoColor=%232596BE&labelColor=white&color=%232596BE" />
    <img src="https://img.shields.io/badge/clerk-%236C47FF?style=for-the-badge&logo=clerk&logoColor=%236C47FF&labelColor=white&color=%236C47FF" />
  </div>
</div>

<h3 align="center">Vibe - Build something with AI</h3>


## 🤖 Introduction
Vibe is an AI-powered web app built with React 19, Next.js 15, Tailwind CSS v4, and Shadcn/ui. It uses the OpenAI API, tRPC for end-to-end type safety, Inngest for background jobs and agent workflows, Clerk for authentication and billing, and E2B cloud sandboxes for secure runtime execution.

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## ⚙️ Tech Stack</a>

- React 19
- Next.js 15
- TypeScript 
- TailwindCSS
- Shadcn
- OpenAI
- tRPC
- Clerk
- Inngest

**Cloning the Repository**

```bash
git clone https://github.com/kTz1/vibe-app.git
cd vibe-app
```

**Installation**

Install the project dependencies using npm:

```bash
npm run dev
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
#Database
DATABASE_URL=

# OpenAI
OPENAI_API_KEY=

# E2B
E2B_API_KEY=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=
```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Neon(database)](https://neon.com/), [OpenAI](https://openai.com/), [E2B](https://e2b.dev/), and [Clerk](https://clerk.com/),

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
