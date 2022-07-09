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
  eventNode: Get<EventQuery, "events.edges[0].node">;
  fetching: boolean;
}

const EventContent = (props: EventContentProps) => {
  let { eventNode, fetching } = props;

  return (
    <>
      <Flex
        flexWrap={{
          base: "wrap",
          md: "initial",
          xl: "initial",
        }}
      >
        <Box
          p="4"
          h={"210px"}
          bg={useColorModeValue("black", "gray.100")}
          pos={"relative"}
          overflow="hidden"
        >
          <Box
            opacity={0.7}
            w={{
              base: "100%", // 0-48em
              md: "100%", // 48em-80em,
              xl: "100%",
            }}
          >
            <Image
              objectFit="fill"
              alt="cover"
              src={eventNode?.image_link || ""}
            />
          </Box>
        </Box>
        <Box
          paddingLeft={{
            md: 10,
            xl: 10,
          }}
          paddingTop={{
            base: 10,
            md: 0,
            xl: 0,
          }}
        >
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
      <Flex
        flexWrap={{
          base: "wrap",
          md: "initial",
          xl: "initial",
        }}
      >
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

export const EventDetail = ({ id }: EventDetailProps) => {
  const { loading, data } = useEventQuery({ variables: { id } });
  const event = data?.events?.edges?.[0]?.node || null;

  return (
    <Page title="Evento">
      <Flex gap={9} flexWrap="wrap">
        {event && <EventContent eventNode={event} fetching={loading} />}
      </Flex>
    </Page>
  );
};
