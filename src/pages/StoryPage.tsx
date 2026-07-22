import {
    Button,
    Container,
    Flex,
    Group,
    Radio,
    Stack,
    Text,
    useMatches,
} from "@mantine/core";
import { useEffect, useState } from "react";
import classes from "../Demo.module.css";
import { getAiClient } from "../lib/aiClient";

const StoryPage = () => {
    const [options, setOptions] = useState<string[]>([]);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        setContent("Story Start.");
    }, []);

    const containerPx = useMatches({
        sm: 0,
        md: 100,
    });

    const optionBr = "12";

    const optionCards = options.map((option, index) => (
        <Radio.Card
            className={classes.root + " card"}
            value={option}
            key={option}
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
                    <Text>{option}</Text>
                </div>
            </div>
        </Radio.Card>
    ));

    const continueStory = () => {
        getAiClient()
            .generateStory(null, "Initial choice")
            .then((page) => {
                setContent((state) => state + "\n\n" + page.content);
                setOptions(page.options);
                setSelectedOption(null);
            });
    };

    return (
        <Container px={containerPx} style={{ whiteSpace: "pre-wrap" }}>
            <Flex
                justify='center'
                mt='md'
                direction='column'
                align='center'
                gap='xl'
            >
                <div>{content}</div>

                <Group style={{ width: "100%" }} gap='lg'>
                    <Radio.Group
                        value={selectedOption}
                        onChange={setSelectedOption}
                        w='100%'
                        mb={0}
                    >
                        <Stack gap='0'>{optionCards}</Stack>
                    </Radio.Group>
                    <Button onClick={continueStory} w='100%' m={0}>
                        Next
                    </Button>
                </Group>
            </Flex>
        </Container>
    );
};

export default StoryPage;
