import { AppShell, Avatar, Burger, Flex, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { GiMagicGate } from "react-icons/gi";
import { RiRobot2Fill } from "react-icons/ri";
import "./App.css";
import { useAuth } from "./contexts/AuthProvider";
import SignInPage from "./pages/SignInPage";
import StoryPage from "./pages/StoryPage";

function App() {
    const [opened, setOpened] = useState(false);
    const toggle = () => setOpened(!opened);
    const useTheme = useMantineTheme();

    const { authUser, setAuthUser, isSignedIn, setIsSignedIn } = useAuth();

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
                    {(authUser ?? false) && (
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
                        <div>Artificial Adventure</div>
                        <GiMagicGate size={20} />
                    </Flex>

                    {(authUser ?? false) && <Avatar />}
                </Flex>
            </AppShell.Header>

            <AppShell.Navbar
                style={{ backgroundColor: useTheme.colors.main[8] }}
                c='white'
                p='sm'
            >
                Navbar
            </AppShell.Navbar>

            <AppShell.Main style={{ backgroundColor: useTheme.colors.main[0] }}>
                {(authUser ?? false) ? <StoryPage /> : <SignInPage />}
            </AppShell.Main>
        </AppShell>
    );
}

export default App;
