import {
    AppShell,
    Avatar,
    Burger,
    Button,
    Container,
    Flex,
    useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { GiMagicGate } from "react-icons/gi";
import { RiRobot2Fill } from "react-icons/ri";
import "./App.css";

function App() {
    const [opened, setOpened] = useState(false);
    const toggle = () => setOpened(!opened);
    const useTheme = useMantineTheme();

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
                    fontSize: "19px",
                }}
            >
                <Flex align='center' justify='space-between' h='100%' px='md'>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        // hiddenFrom='sm'
                        size='sm'
                        color='white'
                    />

                    <Flex gap='xs' w='100%' align='center' justify='center'>
                        <GiMagicGate size={20} />
                        <div>Artificial Adventure</div>
                        <RiRobot2Fill size={20} />
                    </Flex>

                    <Avatar />
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
                <Container>
                    <Flex
                        justify='center'
                        mt='md'
                        direction='column'
                        align='center'
                        gap='xl'
                    >
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit. Quisque faucibus ex sapien vitae pellentesque
                            sem placerat. In id cursus mi pretium tellus duis
                            convallis. Tempus leo eu aenean sed diam urna
                            tempor. Pulvinar vivamus fringilla lacus nec metus
                            bibendum egestas. Iaculis massa nisl malesuada
                            lacinia integer nunc posuere. Ut hendrerit semper
                            vel class aptent taciti sociosqu. Ad litora torquent
                            per conubia nostra inceptos himenaeos. Lorem ipsum
                            dolor sit amet consectetur adipiscing elit. Quisque
                            faucibus ex sapien vitae pellentesque sem placerat.
                            In id cursus mi pretium tellus duis convallis.
                            Tempus leo eu aenean sed diam urna tempor. Pulvinar
                            vivamus fringilla lacus nec metus bibendum egestas.
                            Iaculis massa nisl malesuada lacinia integer nunc
                            posuere. Ut hendrerit semper vel class aptent taciti
                            sociosqu. Ad litora torquent per conubia nostra
                            inceptos himenaeos. Lorem ipsum dolor sit amet
                            consectetur adipiscing elit. Quisque faucibus ex
                            sapien vitae pellentesque sem placerat. In id cursus
                            mi pretium tellus duis convallis. Tempus leo eu
                            aenean sed diam urna tempor. Pulvinar vivamus
                            fringilla lacus nec metus bibendum egestas. Iaculis
                            massa nisl malesuada lacinia integer nunc posuere.
                            Ut hendrerit semper vel class aptent taciti
                            sociosqu. Ad litora torquent per conubia nostra
                            inceptos himenaeos. Lorem ipsum dolor sit amet
                            consectetur adipiscing elit. Quisque faucibus ex
                            sapien vitae pellentesque sem placerat. In id cursus
                            mi pretium tellus duis convallis. Tempus leo eu
                            aenean sed diam urna tempor. Pulvinar vivamus
                            fringilla lacus nec metus bibendum egestas. Iaculis
                            massa nisl malesuada lacinia integer nunc posuere.
                            Ut hendrerit semper vel class aptent taciti
                            sociosqu. Ad litora torquent per conubia nostra
                            inceptos himenaeos. Lorem ipsum dolor sit amet
                            consectetur adipiscing elit. Quisque faucibus ex
                            sapien vitae pellentesque sem placerat. In id cursus
                            mi pretium tellus duis convallis. Tempus leo eu
                            aenean sed diam urna tempor. Pulvinar vivamus
                            fringilla lacus nec metus bibendum egestas. Iaculis
                            massa nisl malesuada lacinia integer nunc posuere.
                            Ut hendrerit semper vel class aptent taciti
                            sociosqu. Ad litora torquent per conubia nostra
                            inceptos himenaeos.
                        </div>

                        <div>Choices</div>
                        <Button>Submit</Button>
                    </Flex>
                </Container>
            </AppShell.Main>
        </AppShell>
    );
}

export default App;
