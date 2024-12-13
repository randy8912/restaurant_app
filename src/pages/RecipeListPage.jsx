import { useState } from "react";
import {
  Box,
  Center,
  Input,
  SimpleGrid,
  Heading,
  Badge,
  Text,
  Image,
  VStack,
  Select,
} from "@chakra-ui/react";
import { data } from "../utils/data";

const RecipeListPage = ({ onSelectRecipe }) => {
  const [search, setSearch] = useState(""); // State to hold the search input
  const [filter, setFilter] = useState(""); // State to hold the filter for health labels

  // Filter recipes based on search input and health labels
  const filteredRecipes = data.hits.filter((hit) => {
    const matchesSearch = hit.recipe.label
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter =
      filter === "" || hit.recipe.healthLabels?.includes(filter);
    return matchesSearch && matchesFilter; // Recipe must match both criteria
  });

  return (
    <Center p="4" flexDirection="column" bg="blue.100" minH="100vh">
      <Heading mb="6" color="blue.800">
        The Ultimate Recipe Checker
      </Heading>
      <Input
        placeholder="Search recipes..." // Input for searching recipes
        value={search} // Controlled input for search
        onChange={(e) => setSearch(e.target.value)} // Update search state
        mb="4"
        width="50%"
        bg="white"
      />
      <Select
        placeholder="Filter by health label" // Dropdown for filtering recipes
        value={filter} // Controlled input for filter
        onChange={(e) => setFilter(e.target.value)} // Update filter state
        mb="6"
        width="50%"
        bg="white"
      >
        <option value="Vegan">Vegan</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Pescetarian">Pescetarian</option>
      </Select>
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {filteredRecipes.map((hit) => (
          <Box
            key={hit.recipe.label} // Unique key for each recipe box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg="white"
            boxShadow="md"
            onClick={() => onSelectRecipe(hit.recipe)} // Handle recipe selection
            cursor="pointer"
            transition="transform 0.2s" // Smooth transition for hover effect
            _hover={{ transform: "scale(1.05)" }} // Scale effect on hover
          >
            <Image src={hit.recipe.image} alt={hit.recipe.label} />{" "}
            {/* Recipe image */}
            <VStack p="4" align="start" spacing={2}>
              <Heading size="md">{hit.recipe.label}</Heading>{" "}
              {/* Recipe title */}
              <Text fontSize="sm" color="gray.600">
                Dish: {hit.recipe.dishType?.join(", ")}{" "}
                {/* Display dish types */}
              </Text>
              <Text fontSize="sm" color="gray.600">
                Meal: {hit.recipe.mealType?.join(", ")}{" "}
                {/* Display meal types */}
              </Text>
              <Box>
                {hit.recipe.healthLabels?.slice(0, 2).map((label) => (
                  <Badge key={label} colorScheme="green" mr="1">
                    {label} {/* Display health labels */}
                  </Badge>
                ))}
              </Box>
              <Box>
                {hit.recipe.cautions?.map((caution) => (
                  <Badge key={caution} colorScheme="red" mr="1">
                    {caution} {/* Display cautions */}
                  </Badge>
                ))}
              </Box>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Center>
  );
};

export default RecipeListPage;
