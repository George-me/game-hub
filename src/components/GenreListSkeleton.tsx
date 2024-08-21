import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack paddingY="5px">
      <Skeleton boxSize="32px" borderRadius={8} />
      <SkeletonText width="150px" noOfLines={1} skeletonHeight="3" />
    </HStack>
  );
};

export default GenreListSkeleton;
