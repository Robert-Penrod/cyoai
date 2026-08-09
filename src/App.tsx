import { AppShell, Avatar, Burger, Flex, useMantineTheme } from "@mantine/core";
import { useEffect, useState } from "react";
import { GiMagicGate } from "react-icons/gi";
import { RiRobot2Fill } from "react-icons/ri";
import { Route, Routes } from "react-router";
import "./App.css";
import { useAuth } from "./data/contexts/AuthProvider";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import StoryPage from "./pages/StoryPage";

function App() {
    const [opened, setOpened] = useState(false);
    const toggle = () => setOpened(!opened);
    const useTheme = useMantineTheme();

    const { authUser, setAuthUser, isSignedIn } = useAuth();

    useEffect(() => {
        console.log("APP.tsx useEffect");
        console.log(authUser);
    }, [authUser]);

    return (
        <AppShell
            padding='md'
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: "sm",
                collapsed: { desktop: !opened, mobile: !opened },
            }}
            transitionDuration={375}
            transitionTimingFunction='ease'
        >
            <AppShell.Header
                c='white'
                fw='bold'
                style={{
                    backgroundColor: useTheme.colors.main[9],
                    fontSize: "20px",
                }}
            >
                <Flex align='center' justify='space-between' h='100%' px='md'>
                    {isSignedIn && (
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            // hiddenFrom='sm'
                            size='sm'
                            color='white'
                        />
                    )}

                    <Flex gap='xs' w='100%' align='center' justify='center'>
                        <RiRobot2Fill size={20} />
                        <h2>Artificial Adventure</h2>
                        <GiMagicGate size={20} />
                    </Flex>

                    {isSignedIn && <Avatar />}
                </Flex>
            </AppShell.Header>

            <AppShell.Navbar
                style={{ backgroundColor: useTheme.colors.main[8] }}
                c='white'
                p='sm'
            >
                STORIES
            </AppShell.Navbar>

            <AppShell.Main style={{ backgroundColor: useTheme.colors.main[0] }}>
                {isSignedIn ? (
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/story/:storyId' element={<StoryPage />} />
                    </Routes>
                ) : (
                    <SignInPage />
                )}
            </AppShell.Main>
        </AppShell>
    );
}

export default App;
