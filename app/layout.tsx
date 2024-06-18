import { PropsWithChildren, FC } from "react";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Pulse | Find The Perferct Rental",
  description: "Find your dream renral property with Property Pulse",
  keywords: "rental, property, real estate, find property, find properties",
};

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};
export default MainLayout;
