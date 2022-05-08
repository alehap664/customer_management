---
  to: src/components/<%= level %>/<%= name %>/index.tsx
---

import type { NextPage } from 'next';

interface <%= h.toPascalCase(name) %>Props {}

const <%= h.toPascalCase(name) %>: NextPage<<%= h.toPascalCase(name) %>Props> = ({}) => {
  return <div><%= h.toPascalCase(name) %> Component</div>;
};

export default <%= h.toPascalCase(name) %>;
