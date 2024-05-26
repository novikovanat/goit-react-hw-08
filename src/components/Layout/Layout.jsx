import AppBar from "../AppBar/AppBar";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <>
      <Suspense fallback='wait ...for it'>
        <AppBar />
        {children}
      </Suspense>
    </>
  );
}
