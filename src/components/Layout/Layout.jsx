import AppBar from "../AppBar/AppBar";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { selectisRefreshing } from "../../redux/auth/authSelectors";

export default function Layout({ children }) {
  const isRefreshing = useSelector(selectisRefreshing);
  return (
    <>
      {isRefreshing ? (
        <p>Refreshing...</p>
      ) : (
        <Suspense fallback="wait ...for it">
          <AppBar />
          {children}
        </Suspense>
      )}
    </>
  );
}
