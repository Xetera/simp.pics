import {
  Image as ImageData,
  Person,
  Thumbnail,
} from "@/lib/__generated__/graphql"
import Link from "next/link"
import { Box, Flex, Image, Skeleton, Text } from "@chakra-ui/react"
import React, { useEffect, useRef, useState } from "react"
import format from "date-fns/format"
import { AnimatePresence, motion } from "framer-motion"

export type FocusableImage = Pick<ImageData, "focus" | "width" | "height">

export type ImageGridElementProps = {
  forceSmall?: boolean
  image: Pick<ImageData, "createdAt" | "id" | "url"> &
    FocusableImage & {
      thumbnail: Pick<Thumbnail, "small">
      appearances?: Array<{
        person: Pick<Person, "name">
      }>
    }
}

const MotionBox = motion(Box)

const toPercentage = (position: number, max: number) =>
  `${Math.floor((position / max) * 100)}%`

export const focusToObjectPosition = (image: FocusableImage) => {
  return `${toPercentage(
    image.focus ? image.focus.x : image.width / 2,
    image.width
  )} ${toPercentage(
    image.focus ? image.focus.y : image.height / 2,
    image.height
  )}`
}

const ImageDisplay = ({ objectPosition, thumbnail }) => {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef<HTMLImageElement | null>(null)
  useEffect(() => {
    if (ref.current?.complete) {
      setLoaded(true)
    }
  }, [])
  return (
    <Skeleton
      isLoaded={loaded}
      height="100%"
      startColor="bgPrimary"
      endColor="bgSecondary"
    >
      <Image
        objectPosition={objectPosition}
        objectFit="cover"
        width="100%"
        height="100%"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        ref={ref}
        src={thumbnail}
      />
    </Skeleton>
  )
}

export function ImageGridElement(props: ImageGridElementProps) {
  const [hovering, setHovering] = useState(false)
  const { image } = props
  const objectPosition = image ? focusToObjectPosition(image) : ""

  return (
    <Link href={image.url} key={image.id} passHref>
      <Flex
        onMouseOver={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        height="100%"
        as="a"
        flexDirection="column"
        objectFit="cover"
        background="gray.900"
        borderRadius="md"
        position="relative"
        overflow="hidden"
      >
        <ImageDisplay
          objectPosition={objectPosition}
          thumbnail={image.thumbnail.small}
        />
        <AnimatePresence>
          {hovering && (
            <MotionBox
              initial={{ "--opacity": 0.1 }}
              exit={{ "--gradient": 0.1 }}
              animate={{ "--gradient": 0.8 }}
              transition="all"
              transitionDuration="0.04s"
              display="flex"
              background="linear-gradient(to bottom, transparent, rgba(0, 0, 0, var(--gradient)))"
              sx={{
                "--gradient": 0.1,
              }}
              justifyContent="space-between"
              p={2}
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              height="20%"
              flexDirection="row"
              alignItems="flex-end"
            >
              {image.appearances?.[0] && (
                <Text
                  fontSize="xs"
                  color="white"
                  zIndex="1000000"
                  opacity="var(--gradient)"
                >
                  {image.appearances[0]?.person.name ?? "Unknown"}
                </Text>
              )}
              <Text
                as="time"
                dateTime={image.createdAt}
                fontSize="xs"
                opacity="var(--gradient)"
              >
                {format(new Date(image.createdAt), "MMMM yyyy")}
              </Text>
            </MotionBox>
          )}
        </AnimatePresence>
      </Flex>
    </Link> //
  )
}
