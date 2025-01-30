"use client";
import ContentPage from "./pages/homeComponents/bodyContent/ContentPage";
import SideBar from "./pages/homeComponents/sidebar/SideBar";
import { useAppSelector } from "./redux/hooks";
import { selectScreenType } from "./redux/slices/screenSizeSlice";

export default function Home() {
  const screenType = useAppSelector(selectScreenType);
  return (
    <div className="">
      {screenType === "full screen" ? <ContentPage /> : <SideBar />}
      {screenType !== "full screen" ? (
        <div>
          <ContentPage />
          <SideBar />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
