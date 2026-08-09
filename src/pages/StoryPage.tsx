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
import type { Page } from "../data/contexts/storyData";
import classes from "../Demo.module.css";
import { generateStoryPage } from "../lib/supabase";

const StoryPage = () => {
    const [pageData, setPageData] = useState<Page | null>(null);

    useEffect(() => {
        setPageData({
            content: "Story Start.",
        });
    }, []);

    const containerPx = useMatches({
        sm: 0,
        md: 100,
    });

    const optionBr = "12";

    const optionCards = pageData?.options?.map((option, index) => (
        <Radio.Card
            className={classes.root + " card"}
            value={option}
            key={option}
            style={{
                outline: "black solid 1px",
                borderRadius:
                    index == 0
                        ? pageData.options?.length == 1
                            ? `${optionBr}px ${optionBr}px ${optionBr}px ${optionBr}px`
                            : `${optionBr}px ${optionBr}px 0px 0px`
                        : index == (pageData.options?.length ?? 0) - 1
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
        generateStoryPage().then((generatedPage) => {
            setPageData(generatedPage);
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
                <div style={{ width: "100%" }}>{pageData?.content}</div>

                <Group style={{ width: "100%" }} gap='lg'>
                    <Radio.Group
                        value={pageData?.selectedOption}
                        onChange={(value: string) =>
                            setPageData((prev) =>
                                prev
                                    ? { ...prev, selectedOption: value }
                                    : prev,
                            )
                        }
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
