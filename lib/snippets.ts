export type Snippet = { prefix: string; description: string }
export type Language = { name: string; snippets: Snippet[] }

// Mirrors the cheat sheet on the Marketplace listing.
export const languages: Language[] = [
  {
    name: "C++",
    snippets: [
      { prefix: "cpp-base", description: "Basic C++ file boilerplate" },
      { prefix: "cpp-oops", description: "Simple C++ class & object" },
    ],
  },
  {
    name: "JavaScript",
    snippets: [
      { prefix: "js-base", description: "Basic JS function" },
      { prefix: "js-express", description: "Express.js route setup" },
      { prefix: "js-web", description: "Basic HTML + JS web setup" },
      { prefix: "js-react", description: "React component boilerplate" },
    ],
  },
  {
    name: "PHP",
    snippets: [
      { prefix: "php-base", description: "Basic PHP file" },
      { prefix: "php-laravel", description: "Laravel controller example" },
    ],
  },
  {
    name: "Python",
    snippets: [
      { prefix: "py-base", description: "Basic Python file" },
      { prefix: "py-flask", description: "Flask route setup" },
      { prefix: "py-django", description: "Django view example" },
    ],
  },
  {
    name: "Go",
    snippets: [
      { prefix: "go-base", description: "Basic Go file" },
      { prefix: "go-web", description: "Go HTTP server boilerplate" },
    ],
  },
  {
    name: "Rust",
    snippets: [
      { prefix: "rust-base", description: "Basic Rust file" },
      { prefix: "rust-web", description: "Rust web server example" },
    ],
  },
  {
    name: "Ruby",
    snippets: [
      { prefix: "ruby-base", description: "Basic Ruby file" },
      { prefix: "ruby-rails", description: "Rails controller example" },
    ],
  },
  {
    name: "Java",
    snippets: [
      { prefix: "java-base", description: "Basic Java class" },
      { prefix: "java-oops", description: "Java class & object example" },
      { prefix: "java-web", description: "Java servlet/endpoint setup" },
    ],
  },
  {
    name: "Hono",
    snippets: [
      { prefix: "hono-base", description: "Minimal Hono starter app" },
      { prefix: "hono-web", description: "Hono app with GET & POST routes" },
    ],
  },
]
