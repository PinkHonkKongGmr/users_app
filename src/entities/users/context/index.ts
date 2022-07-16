import { createContext } from "react";
import { User } from "../types";

export const userContext = createContext<User[] | null>(null)