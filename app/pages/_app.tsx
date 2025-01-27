// /app/providers.tsx
"use client"; // Marks this component as a Client Component

import { Provider } from "react-redux";
import store from "../redux/store";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
