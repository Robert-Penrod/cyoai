import {
    AppShell,
    Avatar,
    Burger,
    Button,
    Container,
    Flex,
    MantineProvider,
} from "@mantine/core";
import { useState } from "react";
import { GiMagicGate } from "react-icons/gi";
import { RiRobot2Fill } from "react-icons/ri";
import "./App.css";

function App() {
    const [opened, setOpened] = useState(false);
    const toggle = () => setOpened(!opened);

    return (
        <MantineProvider>
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
                <AppShell.Header>
                    <Flex
                        align='center'
                        justify='space-between'
                        h='100%'
                        px='md'
                    >
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            // hiddenFrom='sm'
                            size='sm'
                        />

                        <Flex gap='xs' w='100%' align='center' justify='center'>
                            <GiMagicGate size={25} />
                            <div>Artificial Adventure</div>
                            <RiRobot2Fill size={25} />
                        </Flex>

                        <Avatar />
                    </Flex>
                </AppShell.Header>

                <AppShell.Navbar>Navbar</AppShell.Navbar>

                <AppShell.Main>
                    <Container>
                        <Flex
                            justify='center'
                            mt='md'
                            direction='column'
                            align='center'
                            gap='xl'
                        >
                            <div>
                                Lorem ipsum dolor sit amet consectetur
                                adipiscing elit. Quisque faucibus ex sapien
                                vitae pellentesque sem placerat. In id cursus mi
                                pretium tellus duis convallis. Tempus leo eu
                                aenean sed diam urna tempor. Pulvinar vivamus
                                fringilla lacus nec metus bibendum egestas.
                                Iaculis massa nisl malesuada lacinia integer
                                nunc posuere. Ut hendrerit semper vel class
                                aptent taciti sociosqu. Ad litora torquent per
                                conubia nostra inceptos himenaeos. Lorem ipsum
                                dolor sit amet consectetur adipiscing elit.
                                Quisque faucibus ex sapien vitae pellentesque
                                sem placerat. In id cursus mi pretium tellus
                                duis convallis. Tempus leo eu aenean sed diam
                                urna tempor. Pulvinar vivamus fringilla lacus
                                nec metus bibendum egestas. Iaculis massa nisl
                                malesuada lacinia integer nunc posuere. Ut
                                hendrerit semper vel class aptent taciti
                                sociosqu. Ad litora torquent per conubia nostra
                                inceptos himenaeos. Lorem ipsum dolor sit amet
                                consectetur adipiscing elit. Quisque faucibus ex
                                sapien vitae pellentesque sem placerat. In id
                                cursus mi pretium tellus duis convallis. Tempus
                                leo eu aenean sed diam urna tempor. Pulvinar
                                vivamus fringilla lacus nec metus bibendum
                                egestas. Iaculis massa nisl malesuada lacinia
                                integer nunc posuere. Ut hendrerit semper vel
                                class aptent taciti sociosqu. Ad litora torquent
                                per conubia nostra inceptos himenaeos. Lorem
                                ipsum dolor sit amet consectetur adipiscing
                                elit. Quisque faucibus ex sapien vitae
                                pellentesque sem placerat. In id cursus mi
                                pretium tellus duis convallis. Tempus leo eu
                                aenean sed diam urna tempor. Pulvinar vivamus
                                fringilla lacus nec metus bibendum egestas.
                                Iaculis massa nisl malesuada lacinia integer
                                nunc posuere. Ut hendrerit semper vel class
                                aptent taciti sociosqu. Ad litora torquent per
                                conubia nostra inceptos himenaeos. Lorem ipsum
                                dolor sit amet consectetur adipiscing elit.
                                Quisque faucibus ex sapien vitae pellentesque
                                sem placerat. In id cursus mi pretium tellus
                                duis convallis. Tempus leo eu aenean sed diam
                                urna tempor. Pulvinar vivamus fringilla lacus
                                nec metus bibendum egestas. Iaculis massa nisl
                                malesuada lacinia integer nunc posuere. Ut
                                hendrerit semper vel class aptent taciti
                                sociosqu. Ad litora torquent per conubia nostra
                                inceptos himenaeos.
                            </div>

                            <div>Choices</div>
                            <Button>Submit</Button>
                        </Flex>
                    </Container>
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
}

export default App;
