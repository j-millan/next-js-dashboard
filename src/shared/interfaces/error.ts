import Error from "next/error";

export interface NextError {
  error: Error;
  reset: () => void;
}