import { ThemeProvider } from "@/components/theme-provider"


import Router from "./router/routes";

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">


          <Router />


    </ThemeProvider>
  )
}

export default App
