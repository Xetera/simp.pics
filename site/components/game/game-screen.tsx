import { Flex, Grid, Text } from "@chakra-ui/layout"
import { useSelector } from "@/hooks/useSelector"
import { motion } from "framer-motion"
import { useCountdown } from "@/hooks/game"
import pick from "lodash/pick"
import React from "react"
import { Face, ImageWithFaces } from "../image-display"
import { RoundCountdown } from "@/components/game/guessing-game/round-countdown"
import { GameBody } from "@/components/game/guessing-game/game-body"
import { Link, Stack } from "@chakra-ui/react"
import { InteractableButton } from "@/components/image/image-sidebar"
import { RiAlarmWarningLine, RiHeartFill, RiImage2Line } from "react-icons/ri"
import { Routing } from "@/client/routing"

const MotionFlex = motion(Flex)

function NextRoundCountdown({ seconds: _sec }: { seconds: number }) {
  const seconds = useCountdown(_sec)
  return (
    <Text fontSize="sm" color="yellow.400">
      Next round stars in {seconds}
    </Text>
  )
}

export default function GameScreen() {
  const { round, answers } = useSelector((r) =>
    pick(r.game, ["round", "answers"])
  )

  if (!round) {
    return null
  }
  const { image } = round
  return (
    <Grid
      flex={1}
      maxW="1500px"
      mx="auto"
      h="full"
      gridTemplateAreas={["'game' 'sidebar'", null, null, "'sidebar game'"]}
      gridTemplateColumns={["1fr", null, null, "2fr 3fr", "2fr 4fr"]}
      justifyContent="flex-start"
      alignItems="center"
      flexFlow="row"
    >
      <Flex
        borderLeftWidth="1px"
        borderRightWidth="1px"
        borderColor="borderSubtle"
        height="100%"
        width="100%"
        gridArea="sidebar"
        justifyContent="center"
      >
        <GameBody />
      </Flex>
      <Flex
        flexFlow="column"
        height="100%"
        borderRightWidth="1px"
        borderColor="borderSubtle"
        gridArea="game"
        // p={[3, null, 4, null, 6]}
        justifyContent="flex-start"
        alignItems="center"
      >
        <ImageWithFaces
          image={image}
          faces={(imageSize) => (
            <>
              {image.faces.map((face) => (
                <Face
                  noBackground
                  key={`${face.x}-${face.y}-${face.width}-${face.height}`}
                  label={
                    round && round.state.type === "waitingForNextRound"
                      ? round.state.correctAnswer.name
                      : "Who is this?"
                  }
                  forceActive
                  face={face}
                  style={{
                    left: (face.x * imageSize.width) / (image?.width ?? 1),
                    top: (face.y * imageSize.height) / (image?.height ?? 1),
                    width: (face.width * imageSize.width) / (image?.width ?? 1),
                    height:
                      (face.height * imageSize.height) / (image?.height ?? 1),
                  }}
                />
              ))}
            </>
          )}
        />
        <Flex justifyContent="flex-start" height="2px" width="100%">
          <RoundCountdown />
        </Flex>
        <Flex
          minHeight="30px"
          width="100%"
          justifyContent="center"
          alignItems="center"
          position="static"
          top={0}
          background="bgPrimary"
          zIndex={2}
          borderBottomWidth="1px"
          borderColor="borderSubtle"
          fontSize="sm"
        >
          {answers && round.state.type === "waitingForNextRound" && (
            <NextRoundCountdown seconds={round.state.waitSeconds} />
          )}
        </Flex>
        <Flex
          pt={3}
          pb={1}
          direction="row"
          spacing={0}
          borderBottomWidth="1px"
          borderColor="borderSubtle"
          w="full"
          justify="center"
          flexFlow="row wrap"
        >
          <InteractableButton
            icon={<RiHeartFill />}
            text="Like"
            onClick={() => {}}
          />
          <Link
            href={Routing.toImage(
              round.state.type === "waitingForNextRound"
                ? round.state.imageSlug
                : "#"
            )}
            textDecoration="none !important"
            target="_blank"
          >
            <InteractableButton
              icon={<RiImage2Line />}
              disabled={round.state.type !== "waitingForNextRound"}
              onClick={() => {}}
              text="View Image"
            />
          </Link>
          <InteractableButton
            icon={<RiAlarmWarningLine />}
            disabled={false}
            tooltip="You already reported this image"
            text="Report"
            onClick={() => {}}
          />
        </Flex>
      </Flex>
    </Grid>
  )
}
