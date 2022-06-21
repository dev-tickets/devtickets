import { Page } from "@/components/PageLayouts/Page";
import Payment from "@/features/Payment";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import { Get } from "type-fest";
import { EventQuery, useEventQuery } from "./getEvent.generated";

interface EventContentProps {
  eventNode: Get<EventQuery, "event.edges[0].node">;
}

const EventContent = (props: EventContentProps) => {
  let { eventNode } = props;

  return (
    <>
      <Flex>
        <Box
          p="4"
          h={"210px"}
          w={"50%"}
          bg={useColorModeValue("black", "gray.100")}
          pos={"relative"}
          overflow="hidden"
        >
          <Box
            opacity={0.7}
          >
            <Image
              objectFit="fill"
              alt="cover"
              src={eventNode?.image_link || ""}
            />
          </Box>
        </Box>
        <Box paddingLeft={10}>
          <Heading
            as="h1"
            color={useColorModeValue("pink.400", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {eventNode?.name}
          </Heading>
          <Text fontSize={"md"}>
            {format(
              parseISO(eventNode?.start_date.toString()),
              "EEEE, MMM yyyy",
            )}{"   "},{"   "}
            {format(parseISO(eventNode?.end_date.toString()), "EEEE, MMM yyyy")}
          </Text>
          <br />
          <Text fontSize={"md"}>{eventNode?.description}</Text>
        </Box>
      </Flex>
      <Flex>
        <Box p="4">
          <Heading
            as="h2"
            fontSize={"lg"}
            fontFamily={"body"}
          >
            Sobre el evento
          </Heading>
          <Text fontSize="lg" paddingTop="4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </Box>
        <Box p="4">
          <Heading
            as="h3"
            fontSize={"lg"}
            fontFamily={"body"}
          >
            Tickets
          </Heading>
          <Box>
            <Payment />
          </Box>
        </Box>
      </Flex>
    </>
  );
};

interface EventDetailProps {
  id: string;
}

export const EventDetail = (props: EventDetailProps) => {
  const [result] = useEventQuery({ variables: { id: props.id } });
  const edges = result.data?.event?.edges || [];
  const event = edges?.at(0)?.node;

  return (
    <Page title="Evento">
      <Flex gap={9} flexWrap="wrap">
        {event && <EventContent eventNode={event} />}
      </Flex>
    </Page>
  );
};
