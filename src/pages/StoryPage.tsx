import {
    Button,
    Container,
    Flex,
    Radio,
    Stack,
    Text,
    useMatches,
} from "@mantine/core";
import { useState } from "react";
import classes from "../Demo.module.css";

const StoryPage = () => {
    const [optionValue, setOptionValue] = useState<string | null>(null);

    const options = [
        {
            content: "Go through the left door.",
        },
        {
            content: "Investigate the room for clues.",
        },
        {
            content: "Enter the hallway",
        },
    ];

    const containerPx = useMatches({
        sm: 0,
        md: 100,
    });

    const optionBr = "12";

    const optionCards = options.map((item, index) => (
        <Radio.Card
            className={classes.root + " card"}
            value={item.content}
            key={item.content}
            style={{
                outline: "black solid 1px",
                borderRadius:
                    index == 0
                        ? options.length == 1
                            ? `${optionBr}px ${optionBr}px ${optionBr}px ${optionBr}px`
                            : `${optionBr}px ${optionBr}px 0px 0px`
                        : index == options.length - 1
                          ? `0px 0px ${optionBr}px ${optionBr}px`
                          : `0px`,
            }}
        >
            <div style={{ padding: "7px" }}>
                <Radio.Indicator
                    style={{ float: "left", margin: "2px 7px 0 0" }}
                />
                <div>
                    <Text>{item.content}</Text>
                </div>
            </div>
        </Radio.Card>
    ));

    return (
        <Container px={containerPx}>
            <Flex
                justify='center'
                mt='md'
                direction='column'
                align='center'
                gap='xl'
            >
                <div>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Quisque faucibus ex sapien vitae pellentesque sem placerat.
                    In id cursus mi pretium tellus duis convallis. Tempus leo eu
                    aenean sed diam urna tempor. Pulvinar vivamus fringilla
                    lacus nec metus bibendum egestas. Iaculis massa nisl
                    malesuada lacinia integer nunc posuere. Ut hendrerit semper
                    vel class aptent taciti sociosqu. Ad litora torquent per
                    conubia nostra inceptos himenaeos. Lorem ipsum dolor sit
                    amet consectetur adipiscing elit. Quisque faucibus ex sapien
                    vitae pellentesque sem placerat. In id cursus mi pretium
                    tellus duis convallis. Tempus leo eu aenean sed diam urna
                    tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
                    egestas. Iaculis massa nisl malesuada lacinia integer nunc
                    posuere. Ut hendrerit semper vel class aptent taciti
                    sociosqu. Ad litora torquent per conubia nostra inceptos
                    himenaeos. Lorem ipsum dolor sit amet consectetur adipiscing
                    elit. Quisque faucibus ex sapien vitae pellentesque sem
                    placerat. In id cursus mi pretium tellus duis convallis.
                    Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
                    fringilla lacus nec metus bibendum egestas. Iaculis massa
                    nisl malesuada lacinia integer nunc posuere. Ut hendrerit
                    semper vel class aptent taciti sociosqu. Ad litora torquent
                    per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit
                    amet consectetur adipiscing elit. Quisque faucibus ex sapien
                    vitae pellentesque sem placerat. In id cursus mi pretium
                    tellus duis convallis. Tempus leo eu aenean sed diam urna
                    tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
                    egestas. Iaculis massa nisl malesuada lacinia integer nunc
                    posuere. Ut hendrerit semper vel class aptent taciti
                    sociosqu. Ad litora torquent per conubia nostra inceptos
                    himenaeos. Lorem ipsum dolor sit amet consectetur adipiscing
                    elit. Quisque faucibus ex sapien vitae pellentesque sem
                    placerat. In id cursus mi pretium tellus duis convallis.
                    Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
                    fringilla lacus nec metus bibendum egestas. Iaculis massa
                    nisl malesuada lacinia integer nunc posuere. Ut hendrerit
                    semper vel class aptent taciti sociosqu. Ad litora torquent
                    per conubia nostra inceptos himenaeos.
                </div>

                <Radio.Group
                    value={optionValue}
                    onChange={setOptionValue}
                    w='100%'
                >
                    <Stack gap='0'>{optionCards}</Stack>
                </Radio.Group>
                <Button>Submit</Button>
            </Flex>
        </Container>
    );
};

export default StoryPage;
