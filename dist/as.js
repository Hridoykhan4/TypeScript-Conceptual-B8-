"use strict";
const data = JSON.parse(`{
   "posts" : [
  {
    "id": 1,
    "title": "Learn JSON",
    "author": "John",
    "tags": ["JSON", "Programming", "Web"]
  },
  {
    "id": 2,
    "title": "TypeScript Essentials",
    "author": "Jane",
    "tags": ["TypeScript", "Programming", "Web"]
  }
]
}`);
console.log(data?.posts[0]?.title || "Thakbe na");
