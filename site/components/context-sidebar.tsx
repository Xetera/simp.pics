import { Heading, Stack } from "@chakra-ui/layout";
import { useBreakpoint, useBreakpointValue } from "@chakra-ui/media-query";
import { Flex, Box, forwardRef } from "@chakra-ui/react";
import React, { ComponentProps, PropsWithChildren } from "react";

export type ContextSidebarProps = {
  items: React.ReactNode[];
};

export const ContextSidebar: React.FC<ContextSidebarProps> = forwardRef(
  ({ items, ...rest }, ref) => {
    return (
      <Stack
        height="100%"
        spacing={[2, 2, 4]}
        {...rest}
        p={[2, 4, 6, 8]}
        ref={ref}
      >
        {items}
      </Stack>
    );
  }
);

export type SidebarItemProps = {
  title: React.ReactChild | string;
};

export function SidebarItem(opts: React.PropsWithChildren<SidebarItemProps>) {
  return (
    <>
      <Heading size="sm" fontWeight="500">
        {opts.title}
      </Heading>
      {opts.children}
    </>
  );
}

export type WithSidebarProps = {
  sidebar: React.ReactNode;
};

export function WithSidebar({
  sidebar,
  children,
}: PropsWithChildren<WithSidebarProps>) {
  return (
    <Flex>
      {sidebar && (
        <Flex
          display={["none", "block"]}
          minWidth={["0", "170px", "250px", "350px"]}
        >
          {sidebar}
        </Flex>
      )}
      <Box display={["none", "block"]} width="2px" background="gray.900" />
      {children}
    </Flex>
  );
}
