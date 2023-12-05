import { ReactElement } from "react";
import { HomeWork1 } from "./pages/HomeWork1/HomeWork1";
import { HomeWork1Second } from "./pages/HomeWork1_second/HomeWork1Second";
import { HomeWork2 } from "./pages/HomeWork2/HomeWork2";
import { HomeWork3 } from "./pages/HomeWork3/HomeWork3";
import { HomeWork4 } from "./pages/HomeWork4/HomeWork4";

interface IRoute {
  title: string;
  description?: string;
  element: ReactElement;
}

export const routesConfig: Record<string, IRoute> = {
  "/homework1": {
    title: "Домашнее задание №1",
    element: <HomeWork1 />,
  },
  "/homework1-second": {
    title: "Домашнее задание №1 (second)",
    element: <HomeWork1Second />,
  },
  "/homework2": {
    title: "Домашнее задание №2",
    element: <HomeWork2 />,
  },
  "/homework3": {
    title: "Домашнее задание №3",
    element: <HomeWork3 />,
  },
  "/homework4": {
    title: "Домашнее задание №",
    element: <HomeWork4 />,
  },
};

export const routes = Object.keys(routesConfig);
