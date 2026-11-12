# HireLoop Client

Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui (Base UI version, not Radix).

## Commands

- `npm run dev` / `npm run lint` / `npm run build`

## Rules

- TypeScript only, never use `any`
- Code lives in `src/`: components/, lib/, hooks/, types/
- Server Components by default, use 'use client' only when needed
- Use shadcn components first (`npx shadcn@latest add <name>`), do not build custom ones
- Do not edit files in `src/components/ui/` unless necessary
- Ask me before installing any new package
- Do one task at a time, list changed files at the end
- Run `npm run lint` when done

## Docs (read only the relevant section, not the whole file)

- ../docs/Project_requirements.md
